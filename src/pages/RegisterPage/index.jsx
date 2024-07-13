import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { LoginContext } from "../../context/LoginContext";
import { registerUser } from "./api";

const RegisterPage = () => {
  const navigate = useNavigate();
  const { saveUserLogin } = useContext(LoginContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmitForm = async (e) => {
    e.preventDefault();
    setError(null);

    if (password !== repeatPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      setIsLoading(true);
      const { data } = await registerUser({ email, password });
      saveUserLogin(data);
      navigate("/login");
    } catch (error) {
      setError(error.response.data);
      console.error(error);
    }
    setIsLoading(false);
  };

  return (
    <div className="flex items-center justify-center min-h-lvh bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
        <h1 className="mb-6 text-2xl font-bold text-center">Register</h1>
        <p className="mb-8 text-sm text-center text-gray-400">
          Enter your credentials to create a new account.
        </p>
        <form onSubmit={handleSubmitForm}>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-700"
            >
              Email address
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-3 py-2 text-gray-700 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="email@domain.com"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-3 py-2 text-gray-700 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Password"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="repeatPassword"
              className="block mb-2 text-sm font-medium text-gray-700"
            >
              Repeat password
            </label>
            <input
              type="password"
              id="repeatPassword"
              value={repeatPassword}
              onChange={(e) => setRepeatPassword(e.target.value)}
              required
              className="w-full px-3 py-2 text-gray-700 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Repeat password"
            />
          </div>
          <div className="text-red-500 w-full my-4 text-center">
            <p>{error}</p>
          </div>
          <button
            type="submit"
            disabled={isLoading}
            className="w-full px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            Register
          </button>
        </form>
        <p className="mt-8 text-sm text-center text-gray-400">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-gray-800 hover:underline text-sm font-bold"
          >
            Login here.
          </Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;
