import React from "react";
import { useNavigate } from "react-router";
import errorImage from "../../assets/error-404.png";

const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-base-200 text-center px-4">
      {/* Error Image */}
      <img
        src={errorImage}
        alt="Page Not Found"
        className="w-72 md:w-96 mb-6 animate-bounce-slow"
      />

      {/* Headline */}
      <h1 className="text-5xl md:text-6xl font-extrabold text-primary mb-3">
        Oops!
      </h1>

      {/* Subheadline */}
      <p className="text-2xl md:text-3xl font-semibold text-secondary mb-2">
        Page Not Found
      </p>

      {/* Description */}
      <p className="max-w-md text-gray-500 dark:text-gray-400 mb-8">
        The page you’re looking for doesn’t exist or might have been moved.
        Please check the URL or return to the homepage.
      </p>

      {/* Button */}
      <button
        onClick={() => navigate("/")}
        className="btn btn-primary rounded-full px-8 text-lg shadow-md hover:shadow-lg transition-transform transform hover:scale-105"
      >
        🏠 Back to Home
      </button>
    </div>
  );
};

export default ErrorPage;
