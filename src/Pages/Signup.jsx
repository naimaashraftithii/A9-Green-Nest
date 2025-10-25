
import React, { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { FaEye } from "react-icons/fa";
import { IoEyeOff } from "react-icons/io5";

const DEFAULT_AVATAR =
  "https://i.ibb.co.com/xSs47HzW/eaccd7bf07e314e993b3604518b9deae.jpg";

const Signup = () => {
  const { signup, googleLogin, updateUser, setLoading } = useContext(AuthContext);
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const passRule = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;

  const handleSignup = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = form.name.value.trim();
    const photoURL = form.photo.value.trim();
    const email = form.email.value.trim();
    const password = form.password.value;

    if (!passRule.test(password)) {
      toast.error("Password must have at least 1 uppercase, 1 lowercase, and be 6+ chars.");
      return;
    }

    try {
      await signup(email, password);
      await updateUser(name, photoURL || DEFAULT_AVATAR);
      setLoading(false);
      toast.success("Signup successful!");
      navigate("/");
    } catch (err) {
      toast.error(err.message);
    }
  };

  //handle google
  const handleGoogle = async () => {
    try {
      await googleLogin();
      toast.success("Logged in with Google");
      navigate("/");
    } catch (err) {
      toast.error(err.message);
    }
  };

  return (
    <div
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage:
          "url('https://i.ibb.co.com/s8yxHRz/00a09ce1e1d2f13b5fe2e24cfa386f45.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-white/18 backdrop-blur-[0.5px]" />
      <div className="pointer-events-none absolute inset-0 opacity-60">
        <div className="absolute inset-0 bg-linear-to-br from-transparent via-white/10 to-transparent animate-[pulse_8s_ease-in-out_infinite]" />
      </div>

      <div className="relative z-10 container mx-auto py-12 px-5 grid lg:grid-cols-2 gap-10">
        <div className="flex flex-col items-center lg:items-start text-white text-center lg:text-left">
          <img
            src="https://i.ibb.co.com/hFBtnvyf/signup.png"
            alt="Signup"
            className="w-[220px] h-[220px] md:w-[260px] md:h-[260px] lg:w-[280px] lg:h-[280px]
                       object-contain drop-shadow-xl transition-transform duration-500 ease-out
                       hover:scale-[1.05] hover:-translate-y-1 animate-[float_4s_ease-in-out_infinite]"
          />
          <h1 className="mt-5 text-3xl md:text-4xl font-extrabold text-amber-400 tracking-tight drop-shadow-sm">
            Create Your Account
          </h1>
          <p className="mt-2 text-gray-100 max-w-md">
            Join <span className="font-bold text-emerald-300 font-serif hover:text-amber-600">Green<span className="inter_Lustria">Nest</span></span>  and grow greener — inspire others.
          </p>
        </div>

        <form
          onSubmit={handleSignup}
          className="bg-white/85 backdrop-blur-md rounded-2xl p-8 shadow-2xl space-y-4 max-w-md w-full mx-auto
                     border border-emerald-200 transition-all duration-500 hover:shadow-green-300 text-gray-700"
        >
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-1">
            Sign Up to GreenNest 
          </h2>

          <input
            name="name"
            className="input input-bordered w-full bg-white focus:ring-2 focus:ring-emerald-400 transition-all"
            placeholder="Full Name"
            required
          />
          <input
            name="photo"
            className="input input-bordered w-full bg-white focus:ring-2 focus:ring-emerald-400 transition-all"
            placeholder="Photo URL"
          />
          <input
            name="email"
            type="email"
            className="input input-bordered w-full bg-white focus:ring-2 focus:ring-emerald-400 transition-all"
            placeholder="Email Address"
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
            className="w-full py-2 font-semibold text-white rounded-lg
                       bg-linear-to-r from-green-600 via-emerald-500 to-lime-500
                       hover:from-green-500 hover:to-emerald-600
                       transition-all duration-300 transform hover:scale-[1.03] shadow-md"
          >
            Register
          </button>

          <button
            type="button"
            onClick={handleGoogle}
            className="btn w-full bg-white border border-gray-300 hover:border-emerald-500 text-gray-700 hover:text-green-700 transition-all"
          >
            Continue with Google
          </button>

          <p className="text-sm font-medium text-gray-700 text-center">
            Already have an account?{" "}
            <Link to="/login" className="text-emerald-600 font-semibold hover:underline">
              Login here
            </Link>
          </p>
        </form>
      </div>

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

export default Signup;
