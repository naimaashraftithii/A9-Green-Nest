import React, { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { toast } from "react-toastify";

const Profile = () => {
  const { user, updateUser, setUser } = useContext(AuthContext);
  const [name, setName] = useState(user?.displayName || "");
  const [photo, setPhoto] = useState(user?.photoURL || "");

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await updateUser(name, photo);
      setUser({ ...user, displayName: name, photoURL: photo });
      toast.success("Profile updated!");
    } catch (err) {
      toast.error(err.message);
    }
  };

  if (!user) return null;

  return (
    <div className="container mx-auto py-10 grid md:grid-cols-2 gap-10 items-center">
      {/* Left: Profile Info */}
      <div className="text-center bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300">
        <img
          className="w-40 h-40 mx-auto rounded-full object-cover ring-4 ring-emerald-400 shadow-md hover:scale-105 transition-transform duration-300"
          src={user.photoURL || "https://i.pravatar.cc/150?img=9"}
          alt="User Avatar"
        />
        <h2 className="text-2xl font-bold mt-3 text-emerald-700">
          {user.displayName || "Anonymous"}
        </h2>
        <p className="opacity-80 text-gray-600">{user.email}</p>
      </div>

      {/* Right: Update Form */}
      <form
        onSubmit={handleUpdate}
        className="space-y-4 max-w-md mx-auto bg-emerald-50 p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
      >
        {/* Name */}
        <input
          className="input input-bordered w-full focus:ring-2 focus:ring-emerald-400 text-gray-800 bg-white border-emerald-200"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Full Name"
        />

        {/* Email */}
        <input
          className="input input-bordered w-full text-gray-800 bg-white border-emerald-200 focus:ring-2 focus:ring-emerald-400"
          value={user.email}
          readOnly
          placeholder="Email Address"
        />

        {/* Photo URL */}
        <input
          className="input input-bordered w-full focus:ring-2 focus:ring-emerald-400 text-gray-800 bg-white border-emerald-200"
          value={photo}
          onChange={(e) => setPhoto(e.target.value)}
          placeholder="Photo URL"
        />

        {/* Button */}
        <button
          type="submit"
          className="btn bg-gradient-to-r from-emerald-500 to-green-600 border-none text-white font-semibold px-6 py-2 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg hover:scale-105 active:scale-95"
        >
          Update Profile
        </button>
      </form>
    </div>
  );
};

export default Profile;
