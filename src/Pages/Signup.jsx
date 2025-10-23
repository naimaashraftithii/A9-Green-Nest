import React, { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { FaEye } from "react-icons/fa";
import { IoEyeOff } from "react-icons/io5";

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
      const cred = await signup(email, password);
      await updateUser(name, photoURL || null);
      setLoading(false);
      toast.success("Signup successful!");
      navigate("/");
    } catch (err) {
      toast.error(err.message);
    }
  };

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
    <div className="container mx-auto py-10 grid lg:grid-cols-2 gap-10">
      <div>
        <h1 className="text-3xl font-bold">Create Account</h1>
        <p className="opacity-80">Join GreenNest and grow greener 🌿</p>
      </div>
      <form onSubmit={handleSignup} className="space-y-3 max-w-md">
        <input name="name" className="input input-bordered w-full" placeholder="Name" required />
        <input name="photo" className="input input-bordered w-full" placeholder="Photo URL" />
        <input name="email" type="email" className="input input-bordered w-full" placeholder="Email" required />
        <div className="relative">
          <input
            name="password" type={show ? "text" : "password"}
            className="input input-bordered w-full" placeholder="Password" required
          />
          <button type="button" className="absolute right-3 top-3" onClick={()=>setShow(s=>!s)}>
            {show ? <FaEye/> : <IoEyeOff/>}
          </button>
        </div>
        <button className="my-btn">Register</button>
        <button type="button" onClick={handleGoogle} className="btn w-full">Continue with Google</button>
        <p className="text-sm">Already have an account? <Link to="/login" className="link link-primary">Login</Link></p>
      </form>
    </div>
  );
};

export default Signup;
