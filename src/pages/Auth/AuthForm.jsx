import React, { useState } from "react";

const AuthForm = ({ mode = "login", onSubmit, onGoogleSignIn }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center p-6"
      style={{
        backgroundColor: "var(--color-base-100)",
        color: "var(--color-text-primary)",
      }}
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

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="w-full p-3 rounded-lg border"
            style={{
              backgroundColor: "var(--color-base-100)",
              color: "var(--color-text-primary)",
              borderColor: "var(--color-border)",
            }}
            required
          />

          <button
            type="submit"
            className="w-full py-3 rounded-lg font-semibold mt-2"
            style={{
              backgroundColor: "var(--color-primary)",
              color: "var(--color-text-primary)",
            }}
          >
            {mode === "login" ? "Login" : "Register"}
          </button>
        </form>

        {/* OR Separator */}
        <div className="flex items-center my-4">
          <hr className="flex-1 border-t border-gray-400" />
          <span className="mx-2">OR</span>
          <hr className="flex-1 border-t border-gray-400" />
        </div>

        {/* Google Sign-In Button */}
        <button
          onClick={onGoogleSignIn}
          className="w-full py-3 rounded-lg border flex items-center justify-center gap-2 font-semibold"
          style={{
            backgroundColor: "var(--color-base-100)",
            color: "var(--color-text-primary)",
            borderColor: "var(--color-border)",
          }}
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
            alt="Google Logo"
            className="w-6 h-6"
          />
          Sign in with Google
        </button>
      </div>
    </div>
  );
};

export default AuthForm;
