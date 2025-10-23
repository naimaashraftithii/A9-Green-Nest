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
    <div className="container mx-auto py-10 grid lg:grid-cols-2 gap-10">
      <div>
        <h1 className="text-3xl font-bold">Welcome Back</h1>
        <p className="opacity-80">Login to manage your plants 🌱</p>
      </div>
      <form onSubmit={handleLogin} className="space-y-3 max-w-md">
        <input ref={emailRef} name="email" type="email" className="input input-bordered w-full" placeholder="Email" required />
        <div className="relative">
          <input name="password" type={show ? "text" : "password"} className="input input-bordered w-full" placeholder="Password" required />
          <button type="button" className="absolute right-3 top-3" onClick={()=>setShow(s=>!s)}>
            {show ? <FaEye/> : <IoEyeOff/>}
          </button>
        </div>
        <button type="button" className="link" onClick={handleForgot}>Forgot Password?</button>
        <button className="my-btn">Login</button>
        <button type="button" onClick={handleGoogle} className="btn w-full">Continue with Google</button>
        <p className="text-sm">New here? <Link to="/signup" className="link link-primary">Create an account</Link></p>
      </form>
    </div>
  );
};

export default Login;
