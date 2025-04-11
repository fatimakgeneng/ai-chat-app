# ai-chat-app
Full Stack Task: Build a Mobile Al Chat App (Frontend + Backend)

## Run the backend
File path\ai-chat-app>cd backend
File path\ai-chat-app\backend>node index.js
Result should be like this 👇 - the backend is working
`Server running on http://0.0.0.0:5000`

Test frontend using  Expo
File path\ai-chat-app>cd frontend
File path\ai-chat-app\frontend>npm start
A QR code like this will appear 👇, first install the Expo Go app from playstore to android, then scan the QR code via that app - the frontend is also working
`Starting Metro Bundler`
▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
█ ▄▄▄▄▄ █▄▄▄ ▀█▄█▄█ ▄▄▄▄▄ █
█ █   █ ██▄▀ █ ▀▄▄█ █   █ █
█ █▄▄▄█ ██▀▄ ▄█▀█▀█ █▄▄▄█ █
█▄▄▄▄▄▄▄█ ▀▄█ ▀▄█▄█▄▄▄▄▄▄▄█
█  ▀ ▄▀▄▀█▄▀█▄▀█ ▀█▄█▀█▀▀▄█
█▀█▄▄▀ ▄▀▀▄██▄▄▄▄ ▀███▄▀▀ █
█▀▀ ██▄▄█▄  █▀█▄ █ ▄▀▀█▀ ██
█ ▄▄██▀▄ ██▄█▀▄▀ ▄▀ ██▄▀  █
█▄█▄▄█▄▄▄ ▀▀ ▄▄ █ ▄▄▄  ▄▀▄█
█ ▄▄▄▄▄ ██▄▀▀▄  █ █▄█ ███ █
█ █   █ █ ▄▀▄ ▀█▄ ▄  ▄ █▀▀█
█ █▄▄▄█ █▀█▀ ▀█▄ ▄█▀▀▄█   █
█▄▄▄▄▄▄▄█▄█▄▄██▄▄▄▄█▄▄███▄█

# Miscellaneous

## Set Up for Backend (Node.js + Express) (backend is deployed on Railway to avoid IP issue)
1. Node.js installed `node -v`
2. npm installed `npm -v`
3. Initialize Node.js `npm init -y`
4. Install `npm install express cors`
5. run backend (see above)

## Set Up for Frontend (React Native + Expo)
1. Install Node.js
2. Install Expo CLI: `npm install -g expo-cli`
3. Create project via react native `expo init ai-chat-frontend`
4. See run comand above and then test it on Expo Go

## To build APK--> frontend
`npm install -g eas-cli`
`eas build:configure`
`eas build -p android --profile preview`
