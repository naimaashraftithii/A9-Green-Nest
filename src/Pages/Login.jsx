import React, { useContext, useRef, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { FaEye } from "react-icons/fa";
import { IoEyeOff } from "react-icons/io5";

const Login = () => {
  const { login, googleLogin, resetPassword, setLoading } = useContext(AuthContext);
  const [show, setShow] = useState(false);
  const emailRef = useRef(null);
  const navigate = useNavigate();
  const from = useLocation().state || "/";

  const handleLogin = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const email = form.email.value.trim();
    const password = form.password.value;
    try {
      await login(email, password);
      setLoading(false);
      toast.success("Login successful!");
      navigate(from, { replace: true });
    } catch (err) {
      toast.error(err.message);
    }
  };

  const handleGoogle = async () => {
    try {
      await googleLogin();
      toast.success("Logged in with Google");
      navigate(from, { replace: true });
    } catch (err) {
      toast.error(err.message);
    }
  };

  const handleForgot = async () => {
    const email = emailRef.current?.value.trim();
    if (!email) return toast.error("Enter your email first.");
    try {
      await resetPassword(email);
      toast.success("Reset email sent. Check your inbox.");
    } catch (err) {
      toast.error(err.message);
    }
  };

  return (
    <div
      className="bg-amber-50 text-gray-800 min-h-screen flex flex-col lg:flex-row items-center justify-center 
                 gap-10 px-5 py-10 text-center bg-gradient-to-br from-green-50 to-white"
    >
      {/* Left side (welcome text) */}
      <div className="lg:w-1/2 flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold text-green-600 mb-2">Welcome Back </h1>
        <p className="text-gray-600 text-base max-w-md">
          Login to manage your plants, track your care routine, and discover new green friends!
        </p>
      </div>

      {/* Right side (login form) */}
      <div className="lg:w-1/2 flex flex-col items-center justify-center w-full">
        <form
          onSubmit={handleLogin}
          className="space-y-4 bg-white shadow-lg rounded-xl p-8 w-full max-w-md text-left"
        >
          <h2 className="text-2xl font-semibold text-center text-gray-800 mb-2">Login</h2>

          <input
            ref={emailRef}
            name="email"
            type="email"
            className="input input-bordered w-full"
            placeholder="Email"
            required
          />

          <div className="relative">
            <input
              name="password"
              type={show ? "text" : "password"}
              className="input input-bordered w-full pr-10"
              placeholder="Password"
              required
            />
            <button
              type="button"
              className="absolute right-3 top-3 text-gray-500"
              onClick={() => setShow((s) => !s)}
            >
              {show ? <FaEye /> : <IoEyeOff />}
            </button>
          </div>

          <button
            type="button"
            className="link text-sm text-blue-900 hover:underline"
            onClick={handleForgot}
          >
            Forgot Password?
          </button>

          <button className="my-btn w-full bg-green-600 text-white hover:bg-green-700 transition">
            Login
          </button>

          <button
            type="button"
            onClick={handleGoogle}
            className="btn w-full border border-gray-300 hover:border-b-indigo-900 text-emerald-600"
          >
            Continue with Google
          </button>

          <p className="text-sm text-center text-black">
            New here?{" "}
            <Link to="/signup" className="link text-blue-800 hover:underline">
              Create an account
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
