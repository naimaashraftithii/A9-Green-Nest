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
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage:
          "url('https://i.ibb.co.com/2Yh6MDCq/953c87670b9c9e822f23e0ed30e6a891.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* bg transparent overlay */}
      <div className="absolute inset-0 bg-white/18 backdrop-blur-[0.5px]" />

      {/* animated  */}
      <div className="pointer-events-none absolute inset-0 opacity-60">
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/10 to-transparent animate-[pulse_8s_ease-in-out_infinite]" />
      </div>

      <div className="relative z-10 container mx-auto px-5 py-12 grid lg:grid-cols-2 gap-10">
        {/* left: image  */}
        <div className=" flex flex-col items-center lg:items-start text-center lg:text-left">
          <img
            src="https://i.ibb.co.com/zhR23jqM/login.png"
            alt="Login"
            className="w-[210px] h-[210px] md:w-[250px] md:h-[250px] lg:w-[270px] lg:h-[270px]
                       object-contain drop-shadow-xl
                       transition-transform duration-500 ease-out
                       hover:scale-[1.05] hover:-translate-y-1
                       animate-[float_4s_ease-in-out_infinite]"
          />
      
           <h1 className=" text-3xl md:text-4xl font-extrabold text-white tracking-tight drop-shadow-sm">
            Welcome Back
          </h1>
          <p className="mt-2 text-gray-100 max-w-md">
            Log in to manage your plants, track your care routine, and discover new green friends!
          </p>
        
        </div>

        {/* right: form */}
        <div className="w-full flex items-center justify-center">
          <form
            onSubmit={handleLogin}
            className="bg-white/95 backdrop-blur-md rounded-2xl p-8 shadow-2xl space-y-4 max-w-md w-full
                       border border-emerald-200 transition-all duration-500 hover:shadow-green-300 text-gray-700"
          >
            <h2 className="text-2xl font-bold text-center text-gray-800">Login</h2>

            <input
              ref={emailRef}
              name="email"
              type="email"
              className="input input-bordered w-full bg-white focus:ring-2 focus:ring-emerald-400 transition-all"
              placeholder="Email"
              required
            />

            <div className="relative">
              <input
                name="password"
                type={show ? "text" : "password"}
                className="input input-bordered w-full pr-10 bg-white focus:ring-2 focus:ring-emerald-400 transition-all"
                placeholder="Password"
                required
              />
              <button
                type="button"
                className="absolute right-3 top-3 text-gray-500 hover:text-green-600 transition"
                onClick={() => setShow((s) => !s)}
                aria-label="Toggle password visibility"
              >
                {show ? <FaEye /> : <IoEyeOff />}
              </button>
            </div>

            <button
              type="button"
              className="link text-sm text-emerald-700 font-semibold hover:underline"
              onClick={handleForgot}
            >
              Forgot Password?
            </button>

            <button
              className="w-full py-2 font-semibold text-white rounded-lg
                         bg-linear-to-r from-green-600 via-emerald-500 to-lime-500
                         hover:from-green-500 hover:to-emerald-600
                         transition-all duration-300 transform hover:scale-[1.03] shadow-md"
            >
              Login
            </button>

            <button
              type="button"
              onClick={handleGoogle}
              className="btn w-full bg-white border border-gray-300 hover:border-emerald-500 text-gray-700 hover:text-green-700 transition-all"
            >
              Continue with Google
            </button>

            <p className="text-sm font-medium text-gray-700 text-center">
              New here?{" "}
              <Link to="/signup" className="text-emerald-600 font-semibold hover:underline">
                Create an account
              </Link>
            </p>
          </form>
        </div>
      </div>

      {/* for floating image */}
      <style>{`
        @keyframes float {
          0%   { transform: translateY(0px) }
          50%  { transform: translateY(-10px) }
          100% { transform: translateY(0px) }
        }
      `}</style>
    </div>
  );
};

export default Login;
