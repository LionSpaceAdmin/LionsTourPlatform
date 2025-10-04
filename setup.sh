#!/bin/bash

# Exit immediately if a command exits with a non-zero status.
set -e

# Install Node.js dependencies
echo "Installing npm dependencies..."
npm install

# Create the .env file with necessary Firebase credentials
echo "Creating .env file for Firebase credentials..."
cat <<EOT > .env
# Firebase Admin SDK Service Account Credentials
FIREBASE_CLIENT_EMAIL="<your-firebase-client-email>"
FIREBASE_PRIVATE_KEY="<your-firebase-private-key>"
EOT

echo "Setup complete. The .env file has been created with Firebase variables and dependencies are installed."
