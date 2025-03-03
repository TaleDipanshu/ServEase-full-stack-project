import React, { useState } from "react";
import { useLocation ,useNavigate} from "react-router-dom";
import lady from "../assets/she_with_phone.png"
const Login = () => {
  const location = useLocation();
  const [identifier, setIdentifier] = useState(""); // Handles both email and username
  const [password, setPassword] = useState("");
  const [agree, setAgree] = useState(false);
  const navigate = useNavigate();
  const handleLogin = async (e) => {
    e.preventDefault();

    // Check if the input is a valid email (simple regex check)
    const isEmail = identifier.includes("@");

    try {
      // Prepare the body data based on whether it's an email or username
      const bodyData = isEmail
        ? { email: identifier, password } // Send email if valid
        : { username: identifier, password }; // Send username otherwise

      const response = await fetch("http://localhost:8100/api/v1/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(bodyData),
      });

      const data = await response.json();

      if (response.ok) {
        alert("Login successful!");

        // Optionally store JWT token (if returned by the backend)
        // localStorage.setItem('token', data.token);

        // Redirect to another page after login success, if needed
        // window.location.href = '/dashboard';
        navigate("/");
      } else {
        alert(data.message || "Login failed. Please check your credentials.");
      }
    } catch (error) {
      console.error("Error logging in:", error);
      alert("An error occurred during login. Please try again.");
    }
  };

  const isLoginActive = location.pathname === "/login";
  const isSignupActive = location.pathname === "/signup";

  return (
    <>
      <div className="flex justify-center mt-2">
        <div className="flex justify-around w-1/3 relative">
          <a
            href="/login"
            className={`font-semibold text-lg relative z-10 ${
              isLoginActive ? "text-blue-600" : "text-gray-500"
            } hover:text-blue-500`}
          >
            Login
          </a>
          <a
            href="/signup"
            className={`font-semibold text-lg relative z-10 ${
              isSignupActive ? "text-blue-600" : "text-gray-500"
            } hover:text-blue-500`}
          >
            SignUp
          </a>
          <div
            className={`absolute bottom-0 h-1 transition-all duration-300 ${
              isLoginActive ? "bg-blue-600 left-0 w-1/2" : ""
            } ${isSignupActive ? "bg-blue-600 right-0 w-1/2" : ""}`}
          ></div>
        </div>
      </div>

      <div className="flex min-h-screen justify-center md:items-center bg-gray-50 mt-2">
        <div className="w-full max-w-4xl flex bg-white shadow-lg rounded-lg">
          <div className="flex-1 bg-blue-100 hidden md:flex items-center justify-center p-4">
            <img src={lady} alt="" />
          </div>

          <div className="flex-1 p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
              Login to Your Account
            </h2>
            <form onSubmit={handleLogin}>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Username / Email
                </label>
                <input
                  type="text"
                  value={identifier}
                  onChange={(e) => setIdentifier(e.target.value)}
                  placeholder="Username or Email"
                  className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  required
                />
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Password
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                  className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  required
                />
              </div>

              <div className="flex items-center mb-4">
                <input
                  id="agree"
                  type="checkbox"
                  checked={agree}
                  onChange={(e) => setAgree(e.target.checked)}
                  className="h-4 w-4 text-blue-600 border-gray-300 rounded"
                />
                <label
                  htmlFor="agree"
                  className="ml-2 block text-sm text-gray-900"
                >
                  Receive relevant offers and promotional communication
                </label>
              </div>

              <p className="text-xs text-gray-500 mb-4">
                By logging in, I agree to{" "}
                <a href="#" className="text-blue-600 hover:underline">
                  terms
                </a>
                .
              </p>

              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition"
              >
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
