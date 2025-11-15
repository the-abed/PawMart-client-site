import React, { useContext } from "react";
import AuthForm from "./AuthForm";
import { AuthContext } from "../../contexts/AuthContext";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";

const Login = () => {
  const { signInUser, signInWithGoogle } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = (data) => {
    signInUser(data.email, data.password)
      .then(() => {
        toast.success("Logged in successfully!");
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
      mode="login"
      onSubmit={handleLogin}
      onGoogleSignIn={handleGoogleSignIn}
    />
  );
};

export default Login;
