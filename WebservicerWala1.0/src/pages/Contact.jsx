import React from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
import { useAuth } from "../store/AuthProvider";

export const Contact = () => {
  const [names, setName] = React.useState({
    username: "",
    email: "",
    message: "",
    phone: "",
  });
  const [userData, setUserData] = useState(true);
  const { user, API } = useAuth();

  if (userData && user) {
    setName({
      username: user.username,
      email: user.email,
      message: "",
      phone: user.phone.toString(),
    });
    setUserData(false);
  }
  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      console.log("user enter data", names);

      const response = await axios.post(
        "https://administration-h2fa.onrender.com/api/contact",
        {
          username: names.username,
          email: names.email,
          message: names.message,
          phone: names.phone.toString(),
        }
      );
      console.log("deal :", response);
      if (response.status == 200) {
        toast.success("Contact successfully submitted");
        console.log("Server response:", response.data);
        setName({
          username: names.username,
          email: names.email,
          message: "",
          phone: user.phone.toString(),
        });
      }
    } catch (error) {
      console.log("fornt contact error:", error);
    }
  };

  const change = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setName({
      ...names,
      [name]: value,
    });
    e.preventDefault();
  };

  return (
    <>
      <div className="bg-[#ffffff60]  md:w-[40%] w-[90%] mb-10  drop-shadow-xl shadow-2xl mx-auto rounded-lg shadow-md p-8 flex flex-col items-center mt-28">
        {/* Contact Form */}
        <div className="w-full md:w-96">
          <h2 className="text-3xl font-bold mb-6 text-blue-600 text-center">
            Let's get in touch!
          </h2>
          <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-6">
            <div className="flex flex-col">
              <label className="text-gray-600 mb-2">Name</label>
              <input
                className="border rounded-md px-4 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500 transition duration-300"
                id="username"
                name="username"
                type="text"
                value={names.username}
                onChange={change}
              />
            </div>
            <div className="flex flex-col">
              <label className="text-gray-600 mb-2">Email</label>
              <input
                className="border rounded-md px-4 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500 transition duration-300"
                type="email"
                id="email"
                name="email"
                value={names.email}
                onChange={change}
              />
            </div>
            <div className="flex flex-col">
              <label className="text-gray-600 mb-2" htmlFor="phone">
                Phone No.
              </label>
              <input
                className="border rounded-md px-4 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500 transition duration-300"
                type="tel"
                value={names.phone}
                name="phone"
                id="phone"
                onChange={change}
              />
            </div>
            <div className="flex flex-col">
              <label className="text-gray-600 mb-2" htmlFor="message">
                Message
              </label>
              <textarea
                className="border rounded-md px-4 py-2 h-32 focus:outline-none focus:ring-1 focus:ring-blue-500 transition duration-300"
                value={names.message}
                name="message"
                id="message"
                onChange={change}
              />
            </div>
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-300 w-full"
            >
              Send Message
            </button>
          </form>

          {/* Image (Visible on larger screens) */}
        </div>
      </div>

      <div className=" max-w-[1300px] p-2 rounded-2xl mx-auto">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3653.955855905521!2d86.96641120000001!3d23.677536600000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f71f1416aeb3db%3A0x9babc8256d15dc34!2sQehar%20studio&#39;s!5e0!3m2!1sen!2sin!4v1703916832695!5m2!1sen!2sin"
          width="100%"
          height="300"
          allowFullScreen="true"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </>
  );
};
