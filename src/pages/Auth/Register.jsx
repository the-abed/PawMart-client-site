import React, { useContext } from "react";

import AuthForm from "./AuthForm";
import { AuthContext } from "../../contexts/AuthContext";

const Register = () => {
  const { createUser, signInWithGoogle } = useContext(AuthContext);

  const handleRegister = (data) => {
    createUser(data.email, data.password)
      .then(() => alert("Account created successfully!"))
      .catch((err) => alert(err.message));
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then(() => alert("Logged in with Google!"))
      .catch((err) => alert(err.message));
  };

  return (
    <AuthForm
      mode="register"
      onSubmit={handleRegister}
      onGoogleSignIn={handleGoogleSignIn}
    />
  );
};

export default Register;
