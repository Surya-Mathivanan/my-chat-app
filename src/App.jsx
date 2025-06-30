import React, { useState } from "react";
import LoginPage from "./LoginPage";
import RegisterPage from "./RegisterPage";
import UserForm from "./UserForm";
import ChatPage from "./ChatPage";
import "./App.css";

function App() {
  const [currentPage, setCurrentPage] = useState("login"); // 'login', 'register', 'userForm', 'chat'
  const [user, setUser] = useState(null);
  const [authUser, setAuthUser] = useState(null);

  const handleLogin = (loginData) => {
    // Here you would typically validate with your backend
    console.log("Login attempt:", loginData);
    setAuthUser(loginData);
    setCurrentPage("userForm");
  };

  const handleRegister = (registerData) => {
    // Here you would typically send to your backend
    console.log("Register attempt:", registerData);
    setAuthUser(registerData);
    setCurrentPage("userForm");
  };

  const handleUserFormSubmit = (userData) => {
    setUser({ ...authUser, ...userData });
    setCurrentPage("chat");
  };

  const switchToRegister = () => {
    setCurrentPage("register");
  };

  const switchToLogin = () => {
    setCurrentPage("login");
  };

  const renderCurrentPage = () => {
    switch (currentPage) {
      case "login":
        return (
          <LoginPage
            onLogin={handleLogin}
            onSwitchToRegister={switchToRegister}
          />
        );
      case "register":
        return (
          <RegisterPage
            onRegister={handleRegister}
            onSwitchToLogin={switchToLogin}
          />
        );
      case "userForm":
        return <UserForm onSubmit={handleUserFormSubmit} />;
      case "chat":
        return <ChatPage user={user} />;
      default:
        return (
          <LoginPage
            onLogin={handleLogin}
            onSwitchToRegister={switchToRegister}
          />
        );
    }
  };

  return <div>{renderCurrentPage()}</div>;
}

export default App;
