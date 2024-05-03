import React, { useEffect, useState } from "react";
import axios from "axios";
import { useAuth } from "../../store/AuthProvider";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
export const AdminUserData = () => {
  const [data, setData] = useState({
    username: "",
    email: "",
    phone: "",
  });
  const { AuthorizationToken } = useAuth();
  const params = useParams();

  const updateData = async () => {
    const head = {
      headers: {
        Authorization: AuthorizationToken,
      },
    };

    try {
      const response = await axios.get(
        `https://administration-h2fa.onrender.com/api/admin/users/${params.id}`,
        head
      );
      setData(response.data.response);
      console.log(response.data.response);
    } catch (error) {
      console.log("error from edit user data from frontend", error);
    }
  };

  useEffect(() => {
    updateData();
  }, [params.id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const head = {
      headers: {
        Authorization: AuthorizationToken,
      },
    };
    try {
      console.log(data);

      // Assuming you have an API endpoint to handle the form data update
      const response = await axios.post(
        `https://administration-h2fa.onrender.com/api/admin/users/${params.id}`,
        data, // Send the data as the request body
        head
      );

      // Handle the response as needed, e.g., show a success message
      toast.success("Update successful:");
    } catch (error) {
      // Handle errors, e.g., show an error message
      console.error("Update failed:", error);
    }
  };

  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setData({
      ...data,
      [name]: value,
    });
  };

  return (
    <>
      <div className="mt-2 text-black">
        <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-6 ">
          <h1 className="text-white">Update User</h1>
          <div className="flex flex-col">
            <label className="text-white mb-2">Name</label>
            <input
              className="border rounded-md px-4 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500 transition duration-300"
              id="username"
              name="username"
              type="text"
              value={data.username}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col">
            <label className="text-white mb-2">Email</label>
            <input
              className="border rounded-md px-4 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500 transition duration-300"
              type="email"
              id="email"
              name="email"
              value={data.email}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col">
            <label className="text-white mb-2" htmlFor="phone">
              Phone No.
            </label>
            <input
              className="border rounded-md px-4 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500 transition duration-300"
              type="number"
              value={data.phone}
              name="phone"
              id="phone"
              onChange={handleChange}
            />
          </div>

          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-300 w-full"
          >
            update
          </button>
        </form>
      </div>
    </>
  );
};
