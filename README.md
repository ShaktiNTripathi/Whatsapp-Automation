<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>WhatsApp Message Sender - Documentation</title>
    <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" rel="stylesheet">
    <style>
        body {
            padding-top: 20px;
            background-color: #f8f9fa;
        }
        .container {
            background-color: #ffffff;
            border-radius: 8px;
            box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
            padding: 30px;
        }
        h1, h2 {
            color: #343a40;
        }
        .lead {
            color: #6c757d;
        }
        .alert-info {
            background-color: #e9f7fc;
            color: #004085;
        }
        .alert-success {
            background-color: #d4edda;
            color: #155724;
        }
        .alert-warning {
            background-color: #fff3cd;
            color: #856404;
        }
        .alert-danger {
            background-color: #f8d7da;
            color: #721c24;
        }
        code {
            background-color: #f1f1f1;
            padding: 0.2em 0.4em;
            border-radius: 4px;
        }
        .btn-custom {
            background-color: #007bff;
            color: #ffffff;
        }
        .btn-custom:hover {
            background-color: #0056b3;
            color: #ffffff;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1 class="display-4">WhatsApp Message Sender</h1>
        <p class="lead">The WhatsApp Message Sender is a web application that allows you to send bulk messages and attachments to WhatsApp contacts using the WhatsApp Web API.</p>

        <h2>Live URL</h2>
        <div class="alert alert-info">
            <a href="https://whatsapp-automation-1r2gpghzd-shaktintripathis-projects.vercel.app/" target="_blank" class="btn btn-custom">Visit WhatsApp Automation</a>
        </div>

        <h2>Features</h2>
        <ul>
            <li>Send Messages: Send a single or multiple messages to WhatsApp contacts.</li>
            <li>Attach Files: Attach files to your messages.</li>
            <li>Message Patterns: Apply patterns (e.g., pyramid) to your messages.</li>
            <li>Real-Time Updates: View real-time status updates and message counts.</li>
            <li>QR Code Authentication: Scan QR codes for WhatsApp Web authentication.</li>
        </ul>

        <h2>Technologies Used</h2>
        <ul>
            <li><code>Node.js</code>: Server-side JavaScript runtime.</li>
            <li><code>Express</code>: Web framework for Node.js.</li>
            <li><code>WhatsApp Web.js</code>: Library for interacting with WhatsApp Web.</li>
            <li><code>Socket.IO</code>: Real-time bidirectional event-based communication.</li>
            <li><code>Bootstrap</code>: Front-end framework for responsive design.</li>
            <li><code>jQuery</code>: JavaScript library for DOM manipulation and AJAX.</li>
        </ul>

        <h2>Setup Instructions</h2>
        <h3>Prerequisites</h3>
        <ul>
            <li>Node.js (>= 14.x)</li>
            <li>npm (Node Package Manager)</li>
        </ul>

        <h3>Installation</h3>
        <ol>
            <li>Clone the Repository
                <pre><code>git clone https://github.com/your-repo/whatsapp-message-sender.git</code></pre>
                <pre><code>cd whatsapp-message-sender</code></pre>
            </li>
            <li>Install Dependencies
                <pre><code>npm install</code></pre>
            </li>
            <li>Run the Application
                <pre><code>npm start</code></pre>
                The server will start on <code>http://localhost:3000</code>.
            </li>
            <li>Open the Application
                Navigate to <code>http://localhost:3000</code> in your web browser to access the application.
            </li>
        </ol>

        <h2>Usage</h2>
        <ol>
            <li>Scan QR Code: Upon first launch or after the client is disconnected, scan the QR code displayed on the webpage to authenticate the WhatsApp client.</li>
            <li>Send Messages:
                <ul>
                    <li>Enter phone numbers (comma-separated) in the <strong>Phone Numbers</strong> field.</li>
                    <li>Type your message in the <strong>Message</strong> field.</li>
                    <li>Specify the number of messages and delay between them.</li>
                    <li>Choose a message pattern if desired.</li>
                    <li>Attach files if needed.</li>
                    <li>Click <strong>Send Messages</strong> to start sending.</li>
                </ul>
            </li>
            <li>Stop Messages: Click the <strong>Stop Messages</strong> button to halt message sending.</li>
        </ol>

        <h2>Troubleshooting</h2>
        <ul>
            <li><strong>Client Not Ready</strong>: Ensure the QR code is scanned and the client is connected. Check console logs for any authentication errors.</li>
            <li><strong>Message Sending Issues</strong>: Verify the format of phone numbers and ensure the WhatsApp client is correctly set up.</li>
        </ul>

        <h2>License</h2>
        <p>This project is licensed under the MIT License - see the <a href="LICENSE">LICENSE</a> file for details.</p>

        <h2>Contributing</h2>
        <p>Contributions are welcome! Please open an issue or submit a pull request to improve the project.</p>

        <h2>Contact</h2>
        <p>For any questions or issues, please contact <a href="mailto:your-email@example.com">your-email@example.com</a>.</p>
    </div>
</body>
</html>
