import axios from "axios";
import { useState } from "react";
import { useAuth } from "../../store/AuthProvider";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AdminService = () => {
  const [data, setData] = useState({
    service: "",
    description: "",
    price: "",
    provider: "",
    image: "",
  });
  const { AuthorizationToken } = useAuth();
  const head = {
    headers: {
      Authorization: AuthorizationToken,
    },
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "https://administration-h2fa.onrender.com/api/admin/addServices",
        data,
        head
      );

      if (response.status === 200) {
        toast.success("Service added successfully!", {
          position: "bottom-left",
          autoClose: 1050,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      } else {
        toast.error("Failed to add service. Please try again.", {
          position: "bottom-left",
          autoClose: 1050,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
    } catch (error) {
      console.error("Error adding service:", error);
      toast.error("An error occurred. Please try again later.", {
        position: "bottom-left",
        autoClose: 1050,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
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
      <div className="text-black  h-full justify-center flex items-center">
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 bg-[#ffffff77] text-black w-[25%] p-5 rounded-2xl drop-shadow-2xl shadow-2xl"
        >
          <h1 className="text-black">Add Service</h1>
          <div className="flex flex-col">
            <label htmlFor="service" className="text-black">
              Name
            </label>
            <input
              className="border rounded-md px-2 py-1 focus:outline-none focus:ring-1 focus:ring-blue-500 transition duration-300"
              id="service"
              name="service"
              type="text"
              value={data.service}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="description" className="">
              Description
            </label>
            <input
              className="border rounded-md px-2 py-1 focus:outline-none focus:ring-1 focus:ring-blue-500 transition duration-300"
              type="text"
              id="description"
              name="description"
              value={data.description}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col">
            <label className="text-black" htmlFor="price">
              Price
            </label>
            <input
              className="border rounded-md px-2 py-1 focus:outline-none focus:ring-1 focus:ring-blue-500 transition duration-300"
              type="text"
              value={data.price}
              name="price"
              id="price"
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col">
            <label className="text-black" htmlFor="provider">
              Provider
            </label>
            <input
              className="border rounded-md px-2 py-1 focus:outline-none focus:ring-1 focus:ring-blue-500 transition duration-300"
              type="text"
              value={data.provider}
              name="provider"
              id="provider"
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col">
            <label className="text-black" htmlFor="image">
              Image link
            </label>
            <input
              className="border rounded-md px-2 py-1 focus:outline-none focus:ring-1 focus:ring-blue-500 transition duration-300"
              type="text"
              value={data.image}
              name="image"
              id="image"
              onChange={handleChange}
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-2 py-1 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-300 w-full"
          >
            Add service
          </button>
        </form>
      </div>
    </>
  );
};

export default AdminService;
