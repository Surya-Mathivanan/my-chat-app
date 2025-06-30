# My Chat App

A real-time chat application built with **React** (Vite), **Firebase Authentication**, and **Socket.IO** (Node.js/Express backend).

---
## Features

- 🔒 **User Authentication** (Register/Login with Firebase)
- 💬 **Real-time Chat** using Socket.IO
- 🎨 **Modern Responsive UI** (with mobile support)
- 👤 **User Profile**: Name, Gender, Date of Birth
- 🌙 **Dark/Light Mode** (via system preference)
- ⚡ **Fast Development** with Vite
---

## Live:
 - netlify : https://my-chat-app-v1.netlify.app/
 - Vercel : https://my-chat-app-sand-phi.vercel.app/
 - Render : https://my-chat-app-v2.onrender.com



---

## Tech Stack

- **Frontend:** React, Vite, CSS
- **Backend:** Node.js, Express, Socket.IO
- **Auth:** Firebase Authentication

---

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/surya-mathivanan/my-chat-app.git
cd my-chat-app
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set up Firebase

- Create a Firebase project at [Firebase Console](https://console.firebase.google.com/)
- Enable **Email/Password Authentication**
- Copy your Firebase config to `src/Firebase.jsx`

### 4. Start the backend server

```bash
npm run server
# or
node server.js
```

### 5. Start the frontend (Vite)

```bash
npm run dev
```

- Frontend: [http://localhost:5173](http://localhost:5173)
- Backend: [http://localhost:3000](http://localhost:3000)

---

## Deployment

- **Frontend:** Deploy `dist/` to [Netlify](https://www.netlify.com/) or [Vercel](https://vercel.com/)
- **Backend:** Deploy `server.js` to [Render](https://render.com/) or [Heroku](https://heroku.com/)

---

## Project Structure

```
my-chat-app/
├── public/
├── src/
│   ├── App.jsx
│   ├── ChatPage.jsx
│   ├── LoginPage.jsx
│   ├── RegisterPage.jsx
│   ├── UserForm.jsx
│   ├── Message.jsx
│   ├── Firebase.jsx
│   └── index.css
├── server.js
├── package.json
└── README.md
```

---

## Screenshots



---

## License

MIT

---

## Credits

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [Firebase](https://firebase.google.com/)
