# WhatsApp Message Sender

## Overview

The WhatsApp Message Sender is a web application that allows you to send bulk messages and attachments to WhatsApp contacts. It uses WhatsApp Web's API through the `whatsapp-web.js` library to facilitate sending messages, handling attachments, and applying message patterns. The application also provides real-time status updates and QR code scanning for authentication.

## Live URL

You can access the live application at [WhatsApp Automation](https://whatsapp-automation-1r2gpghzd-shaktintripathis-projects.vercel.app/).

## Features

- **Send Messages**: Send a single or multiple messages to WhatsApp contacts.
- **Attach Files**: Attach files to your messages.
- **Message Patterns**: Apply patterns (e.g., pyramid) to your messages.
- **Real-Time Updates**: View real-time status updates and message counts.
- **QR Code Authentication**: Scan QR codes for WhatsApp Web authentication.

## Technologies Used

- **Node.js**: Server-side JavaScript runtime.
- **Express**: Web framework for Node.js.
- **WhatsApp Web.js**: Library for interacting with WhatsApp Web.
- **Socket.IO**: Real-time bidirectional event-based communication.
- **Bootstrap**: Front-end framework for responsive design.
- **jQuery**: JavaScript library for DOM manipulation and AJAX.

## Setup Instructions

### Prerequisites

- Node.js (>= 14.x)
- npm (Node Package Manager)

### Installation

1. **Clone the Repository**

    ```bash
    git clone https://github.com/your-repo/whatsapp-message-sender.git
    cd whatsapp-message-sender
    ```

2. **Install Dependencies**

    ```bash
    npm install
    ```

3. **Run the Application**

    ```bash
    npm start
    ```

    The server will start on `http://localhost:3000`.

4. **Open the Application**

    Navigate to `http://localhost:3000` in your web browser to access the application.

## Usage

1. **Scan QR Code**

    Upon first launch or after the client is disconnected, scan the QR code displayed on the webpage to authenticate the WhatsApp client.

2. **Send Messages**

    - Enter phone numbers (comma-separated) in the `Phone Numbers` field.
    - Type your message in the `Message` field.
    - Specify the number of messages and delay between them.
    - Choose a message pattern if desired.
    - Attach files if needed.
    - Click `Send Messages` to start sending.

3. **Stop Messages**

    Click the `Stop Messages` button to halt message sending.

## Troubleshooting

- **Client Not Ready**: Ensure the QR code is scanned and the client is connected. Check console logs for any authentication errors.
- **Message Sending Issues**: Verify the format of phone numbers and ensure the WhatsApp client is correctly set up.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request to improve the project.

## Contact

For any questions or issues, please contact [your-email@example.com](mailto:your-email@example.com).

