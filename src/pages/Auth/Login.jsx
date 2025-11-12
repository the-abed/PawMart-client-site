import React, { useContext } from "react";
import AuthForm from "./AuthForm";
import { AuthContext } from "../../contexts/AuthContext";

const Login = () => {
  const { signInUser, signInWithGoogle } = useContext(AuthContext);

  const handleLogin = (data) => {
    signInUser(data.email, data.password)
      .then(() => alert("Logged in successfully!"))
      .catch((err) => alert(err.message));
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then(() => alert("Logged in with Google!"))
      .catch((err) => alert(err.message));
  };

  return (
    <AuthForm
      mode="login"
      onSubmit={handleLogin}
      onGoogleSignIn={handleGoogleSignIn}
    />
  );
};

export default Login;
