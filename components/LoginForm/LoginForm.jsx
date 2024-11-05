"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { loginRequest } from "@/utils/loginRequest";
import Cookies from "js-cookie";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setMessage(''); 
  
    try {
      const { data, error } = await loginRequest(username, password);
      if (error) {
        setMessage(error);
      } else if (data) {
        Cookies.set('authToken', data.token, { expires: 7 });
        router.push('/dashboard');
      }
    } catch (err) {
      console.error('An unexpected error occurred:', err);
      setMessage("An unexpected error occurred, please try again.");
    } finally {
      setLoading(false);
    }
  };
  

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <div className="p-8 rounded-lg shadow-md w-full max-w-sm bg-gray-800 text-white">
        <h1 className="text-2xl font-bold mb-4 text-center">Login</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1" htmlFor="username">
              Username
            </label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Username"
              required
              className="block w-full border border-gray-600 rounded-md p-2 bg-gray-700 focus:ring focus:ring-blue-300"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              required
              className="block w-full border border-gray-600 rounded-md p-2 bg-gray-700 focus:ring focus:ring-blue-300"
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className={`w-full py-2 rounded-md ${
              loading ? 'bg-gray-400' : 'bg-blue-600 hover:bg-blue-700'
            } transition duration-200`}
          >
            {loading ? "Logging in..." : "Login"}
          </button>
          {message && <p className="mt-4 text-red-500 text-sm text-center">{message}</p>}
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
