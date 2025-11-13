import React, { useState } from "react";
import { Toaster, toast } from "react-hot-toast";
import { useNavigate } from "react-router";
import googleLogo from "../../assets/google.png";

const AuthForm = ({ onSubmit, onGoogleSignIn }) => {
  const [mode, setMode] = useState("login"); // login or register
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    image: "",
    password: "",
  });
  const [passwordError, setPasswordError] = useState("");

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (name === "password" && mode === "register") {
      validatePassword(value);
    }
  };

  const validatePassword = (password) => {
    const hasUpper = /[A-Z]/.test(password);
    const hasLower = /[a-z]/.test(password);
    const isLongEnough = password.length >= 6;

    if (!hasUpper) {
      setPasswordError("Password must contain at least 1 uppercase letter.");
    } else if (!hasLower) {
      setPasswordError("Password must contain at least 1 lowercase letter.");
    } else if (!isLongEnough) {
      setPasswordError("Password must be at least 6 characters long.");
    } else {
      setPasswordError("");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (mode === "register" && passwordError) {
      toast.error("Please fix password requirements before submitting.");
      return;
    }

    try {
      const success = await onSubmit({ ...formData, mode });

      if (success) {
        toast.success(`${mode === "login" ? "Login" : "Registration"} successful!`);
        navigate("/", { replace: true }); // Navigate to home page
      } else {
        toast.error("Failed. Please check your credentials or try again.");
      }
    } catch (err) {
      toast.error("Something went wrong. Try again.");
      console.error(err);
    }
  };

  return (
    <div
      className="flex items-center justify-center p-10 min-h-screen"
      style={{ backgroundColor: "var(--color-base-100)", color: "var(--color-text-primary)" }}
    >
      <div
        className="w-full max-w-md p-8 rounded-2xl shadow-md"
        style={{
          backgroundColor: "var(--color-base-200)",
          color: "var(--color-text-primary)",
          border: "1px solid var(--color-border)",
        }}
      >
        <h2 className="text-3xl font-bold mb-6 text-center">
          {mode === "login" ? "Login" : "Register"}
        </h2>

        <form className="space-y-4" onSubmit={handleSubmit}>
          {mode === "register" && (
            <>
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 rounded-lg border"
                style={{
                  backgroundColor: "var(--color-base-100)",
                  color: "var(--color-text-primary)",
                  borderColor: "var(--color-border)",
                }}
                required
              />
              <input
                type="url"
                name="image"
                placeholder="Image URL"
                value={formData.image}
                onChange={handleChange}
                className="w-full p-3 rounded-lg border"
                style={{
                  backgroundColor: "var(--color-base-100)",
                  color: "var(--color-text-primary)",
                  borderColor: "var(--color-border)",
                }}
              />
            </>
          )}

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 rounded-lg border"
            style={{
              backgroundColor: "var(--color-base-100)",
              color: "var(--color-text-primary)",
              borderColor: "var(--color-border)",
            }}
            required
          />

          <div>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className={`w-full p-3 rounded-lg border ${passwordError ? "border-red-500" : ""}`}
              style={{
                backgroundColor: "var(--color-base-100)",
                color: "var(--color-text-primary)",
                borderColor: "var(--color-border)",
              }}
              required
            />
            {mode === "register" && passwordError && (
              <p className="text-sm text-red-500 mt-1">{passwordError}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full py-3 rounded-lg font-semibold mt-2 hover:opacity-90 transition"
            style={{ backgroundColor: "var(--color-primary)", color: "var(--color-text-primary)" }}
          >
            {mode === "login" ? "Login" : "Register"}
          </button>
        </form>

        <div className="text-center mt-4">
          {mode === "login" ? (
            <p className="text-sm">
              Don’t have an account?{" "}
              <button type="button" onClick={() => setMode("register")} className="text-blue-500 font-medium hover:underline">
                Register here
              </button>
            </p>
          ) : (
            <p className="text-sm">
              Already have an account?{" "}
              <button type="button" onClick={() => setMode("login")} className="text-blue-500 font-medium hover:underline">
                Login here
              </button>
            </p>
          )}
        </div>

        <div className="flex items-center my-4">
          <hr className="flex-1 border-t border-gray-400" />
          <span className="mx-2 text-sm">OR</span>
          <hr className="flex-1 border-t border-gray-400" />
        </div>

        <button
          onClick={onGoogleSignIn}
          className="w-full py-3 rounded-lg border flex items-center justify-center gap-2 font-semibold hover:bg-gray-100 transition"
          style={{
            backgroundColor: "var(--color-base-100)",
            color: "var(--color-text-primary)",
            borderColor: "var(--color-border)",
          }}
        >
          <img width={28} src={googleLogo} alt="Google logo" />
          Sign in with Google
        </button>
      </div>

      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
};

export default AuthForm;
