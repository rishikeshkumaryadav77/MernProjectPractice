import React, { useEffect, useState } from "react";
import { get, post, remove } from "../services/ApiendPoints";
import toast from "react-hot-toast";

const Admin = () => {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    try {
      const request = await get("/admin/getAllUser");
      const response = request.data;
      setUsers(response.AllUsers);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  const handleDelete = async (user) => {
    // ❌ Prevent admin delete
    if (user.role === "admin") {
      toast.error("You can't delete yourself");
      return;
    }

    try { 
      await remove(`/admin/deleteUser/${user._id}`);

      // ✅ remove from UI
      const updatedUsers = users.filter((u) => u._id !== user._id);
      setUsers(updatedUsers);

      toast.success("User deleted successfully");
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  return (
    <>
      <h1 className="text-2xl font-bold text-center my-5">Admin Dashboard</h1>

      <div className="max-w-4xl mx-auto">
        {users.map((user) => (
          <div
            key={user._id}
            className="flex justify-between items-center border p-3 mb-2 rounded"
          >
            <div>
              <p><strong>Name:</strong> {user.name}</p>
              <p><strong>Email:</strong> {user.email}</p>
              <p><strong>Role:</strong> {user.role}</p>
            </div>

            <button
              onClick={() => handleDelete(user)}
              className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-700"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default Admin;