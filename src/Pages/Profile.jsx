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
      // reflect immediately
      setUser({...user, displayName: name, photoURL: photo});
      toast.success("Profile updated!");
    } catch (err) {
      toast.error(err.message);
    }
  };

  if (!user) return null;

  return (
    <div className="container mx-auto py-10 grid md:grid-cols-2 gap-10">
      <div className="text-center">
        <img className="w-40 h-40 mx-auto rounded-full object-cover" src={user.photoURL || "https://i.pravatar.cc/150?img=9"} />
        <h2 className="text-2xl font-bold mt-3">{user.displayName || "Anonymous"}</h2>
        <p className="opacity-80">{user.email}</p>
      </div>
      <form onSubmit={handleUpdate} className="space-y-3 max-w-md">
        <input className="input input-bordered w-full" value={name} onChange={e=>setName(e.target.value)} placeholder="Name" />
        <input className="input input-bordered w-full" value={photo} onChange={e=>setPhoto(e.target.value)} placeholder="Photo URL" />
        <button className="my-btn">Update Profile</button>
      </form>
    </div>
  );
};

export default Profile;
