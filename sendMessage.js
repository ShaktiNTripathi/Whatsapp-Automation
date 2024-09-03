const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { Client, LocalAuth, MessageMedia } = require('whatsapp-web.js');
const multer = require('multer');
const qrcode = require('qrcode-terminal');
const http = require('http');
const socketIo = require('socket.io');
const fs = require('fs');

const app = express();
const port = 3000;

// Create HTTP server and integrate with Socket.IO
const server = http.createServer(app);
const io = socketIo(server);
app.use(express.static(__dirname));
app.use(bodyParser.json());
app.use(cors());
const client = new Client({ authStrategy: new LocalAuth() });
const messageStore = {}; 

// Readiness flag
let clientReady = false;

// QR Code generation
client.on('qr', (qr) => {
    qrcode.generate(qr, { small: true });
});

// Client ready event
client.on('ready', () => {
    console.log('Client is ready!');
    clientReady = true;
});

// Handle client authentication failure
client.on('auth_failure', () => {
    console.error('Authentication failed');
    clientReady = false;
});

// Handle client disconnection
client.on('disconnected', () => {
    console.log('Client disconnected');
    clientReady = false;
});

// Initialize the client
client.initialize();

// Middleware to check if client is ready
app.use((req, res, next) => {
    if (!clientReady) {
        return res.status(500).send({ success: false, message: 'Client is not ready' });
    }
    next();
});

// Configure multer for handling file uploads
const upload = multer({ dest: 'uploads/' });

// Function to generate pyramid pattern
function generatePyramidPattern(char) {
    let pattern = '';
    for (let i = 1; i <= 5; i++) {
        pattern += ' '.repeat(5 - i) + char.repeat(i) + '\n';
    }
    return pattern;
}

// Endpoint to handle sending messages and attachments
app.post('/send-messages', upload.array('attachment'), async (req, res) => {
    const { phoneNumbers, message, messageCount, delayBetweenMessages, pattern } = req.body;
    const phoneNumberArray = phoneNumbers.split(',').map(num => num.trim());
    const count = parseInt(messageCount, 10) || 1;
    const delay = parseInt(delayBetweenMessages, 10) || 100;

    let totalMessagesSent = 0;

    // Generate the pattern if specified
    let finalMessage = message;
    if (pattern === 'pyramid') {
        finalMessage = generatePyramidPattern(message);
    }

    try {
        for (const number of phoneNumberArray) {
            const phoneNumber = number.replace(/\D/g, ''); // Remove non-digit characters
            const chatId = `${phoneNumber}@c.us`;

            try {
                const chat = await client.getChatById(chatId);

                if (chat) {
                    for (let i = 0; i < count; i++) {
                        const msg = `${finalMessage} ${i + 1}`;
                        
                        await chat.sendMessage(msg);
                        console.log(`Message ${i + 1} sent to ${number}`);
                        totalMessagesSent++;

                        // Send attachments if any
                        for (const file of req.files) {
                            const media = MessageMedia.fromFilePath(file.path);
                            await chat.sendMessage(media);
                            console.log(`Attachment sent to ${number}`);
                        }

                        io.emit('messageUpdate', { totalMessagesSent });
                        await new Promise(resolve => setTimeout(resolve, delay));
                    }
                } else {
                    console.log(`Chat with ID ${chatId} not found.`);
                }
            } catch (chatError) {
                console.error(`Error retrieving chat with ID ${chatId}:`, chatError);
            }
        }

        res.send({ success: true, totalMessagesSent });
    } catch (error) {
        console.error('Error sending messages:', error);
        res.status(500).send({ success: false, error: error.message });
    } finally {
        // Clean up uploaded files after sending
        req.files.forEach(file => fs.unlinkSync(file.path));
    }
});

// Endpoint to stop sending messages
app.post('/stop-messages', (req, res) => {
    res.send({ success: true });
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error('Unhandled error:', err);
    res.status(500).send({ success: false, message: 'Internal Server Error' });
});

server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
