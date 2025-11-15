import React, { useContext } from "react";

import AuthForm from "./AuthForm";
import { AuthContext } from "../../contexts/AuthContext";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";

const Register = () => {
  const { createUser, signInWithGoogle } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleRegister = (data) => {
    createUser(data.email, data.password)
      .then(() => {
        toast.success("Registered successfully!");
        navigate("/");
      })
      .catch((err) => alert(err.message));
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then(() => {
        toast.success("Logged in with Google!");
        navigate("/");
      })
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
