import React, { useState } from "react";
import { useLocation, Link,useNavigate } from "react-router-dom";

const CustomerSignup = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [fullName, setFullName] = useState("");
  let [mobileNumber, setMobileNumber] = useState("");
  const [countryCode, setCountryCode] = useState("+91");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [agree, setAgree] = useState(false);
  const [loading, setLoading] = useState(false);
  const [username, SetUsername] = useState("");
  const handleSendOTP = async (e) => {
    e.preventDefault();

    if (!agree) {
      alert("You must agree to the terms.");
      return;
    }

    const fullMobileNumber = countryCode+mobileNumber
    const userData = {
      fullName,
      email,
      mobileNumber: fullMobileNumber,
      password,
      username,
    };

    setLoading(true);

    try {
      const response = await fetch("http://localhost:8100/api/v1/users/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      const result = await response.json();
      setLoading(false);

      if (response.ok) {
        alert(result.message || "OTP sent successfully!");
        navigate("/");

      } else {
        alert("Registration failed: " + (result.message || "Unknown error"));
      }
    } catch (error) {
      setLoading(false);
      console.error("Error during registration:", error);
      alert("An error occurred. Please try again.");
    }
  };

  const isLoginActive = location.pathname === "/login";
  const isSignupActive = location.pathname === "/signup";

  return (
    <>
      <div className="flex justify-center mt-4">
        <div className="flex justify-around w-1/3 relative">
          <Link
            to="/login"
            className={`font-semibold text-lg relative z-10 ${
              isLoginActive ? "text-blue-600" : "text-gray-500"
            } hover:text-blue-500`}
          >
            Login
          </Link>
          <Link
            to="/signup"
            className={`font-semibold text-lg relative z-10 ${
              isSignupActive ? "text-blue-600" : "text-gray-500"
            } hover:text-blue-500`}
          >
            SignUp
          </Link>

          <div
            className={`absolute bottom-0 h-1 transition-all duration-300 ${
              isLoginActive ? "bg-blue-600 left-0 w-1/2" : ""
            } ${isSignupActive ? "bg-blue-600 right-0 w-1/2" : ""}`}
          ></div>
        </div>
      </div>
      <div className="flex min-h-screen justify-center items-center bg-gray-50">
        <div className="w-full max-w-4xl flex bg-white shadow-lg rounded-lg">
          <div className="flex-1 bg-blue-100 hidden md:flex items-center justify-center">
            <svg
              className="h-64 w-64"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 64 64"
            >
              <circle cx="32" cy="32" r="32" fill="#4F46E5" />
              <text
                x="32"
                y="40"
                textAnchor="middle"
                fill="white"
                fontSize="20"
                fontFamily="Arial"
              >
                SVG Placeholder
              </text>
            </svg>
          </div>

          <div className="flex-1 p-8">            
            <h2 className="text-2xl font-semibold mb-6">Join ServEase</h2>

            <form onSubmit={handleSendOTP}>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Full Name
                </label>
                <input
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="Full Name"
                  className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  username
                </label>
                <input
                  type="text"
                  value={username}
                  onChange={(e) => SetUsername(e.target.value)}
                  placeholder="username"
                  className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  required
                />
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
                  className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  required
                />
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Mobile Number
                </label>
                <div className="flex">
                  <select
                    className="mt-1 p-2 border border-gray-300 bg-white rounded-l-md focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    value={countryCode}
                    onChange={(e) => setCountryCode(e.target.value)}
                  >
                    <option value="+91">+91 (IND)</option>
                    <option value="+1">+1 (USA)</option>
                    <option value="+44">+44 (UK)</option>
                  </select>
                  <input
                    type="tel"
                    value={mobileNumber}
                    onChange={(e) => setMobileNumber(e.target.value)}
                    placeholder="Mobile Number"
                    className="mt-1 p-2 flex-grow border border-gray-300 rounded-r-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    required
                  />
                </div>
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Create Password
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
                <label htmlFor="agree" className="ml-2 block text-sm text-gray-900">
                  Receive relevant offers and promotional communication from ServEase
                </label>
              </div>

              <p className="text-xs text-gray-500 mb-4">
                By signing up, I agree to{" "}
                <Link to="/terms" className="text-blue-600 hover:underline">
                  terms
                </Link>
                .
              </p>

              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition"
                disabled={loading}
              >
                {loading ? "Sending OTP..." : "Send OTP"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default CustomerSignup;
