import React, { useState, useEffect } from "react";
import axios from "axios";
import { useAuth } from "../../store/AuthProvider";
import { toast } from "react-toastify";

const AdminServiceList = () => {
  const { AuthorizationToken } = useAuth();
  const [services, setServices] = useState([]);

  const fetchServices = async () => {
    try {
      const response = await axios.get(
        "https://administration-h2fa.onrender.com/api/admin/services",
        {
          headers: {
            Authorization: AuthorizationToken,
          },
        }
      );
      setServices(response.data);
    } catch (error) {
      console.error("Error fetching services:", error);
    }
  };

  useEffect(() => {
    fetchServices();
  }, [AuthorizationToken]);

  const mainDel = async (id) => {
    const head = {
      headers: {
        Authorization: AuthorizationToken,
      },
    };

    try {
      const response = await axios.delete(
        `https://administration-h2fa.onrender.com/api/admin/services/${id}`,
        head
      );

      if (response.status === 200) {
        toast.success("Service deleted successfully!", {
          position: "bottom-left",
          autoClose: 1050,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        fetchServices();
      }
    } catch (error) {
      console.error("Error deleting service:", error);
    }
  };

  return (
    <div className="max-w-[auto] flex flex-col mx-auto  p-8">
      <h2 className="text-3xl font-bold mb-4 justify-center items-center flex">
        Services List
      </h2>
      <table className="w-full border-collapse border">
        <thead>
          <tr className="bg-gray-200">
            <th className="border p-2">Name</th>
            <th className="border p-2">Description</th>
            <th className="border p-2">Price</th>
            <th className="border p-2">Provider</th>
            <th className="border p-2">Image</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {services.map((service) => (
            <tr key={service.email} className="border bg-[#ffffff9a]">
              <td className="border p-2">{service.service}</td>
              <td className="border p-2">{service.description}</td>
              <td className="border p-2">{service.price}</td>
              <td className="border p-2">{service.provider}</td>
              <td className="border p-2">
                <a
                  className="text-blue-700"
                  target="_blank"
                  href={service.image}
                >
                  Link
                </a>
              </td>
              <td>
                <button
                  onClick={() => mainDel(service._id)}
                  className="bg-red-500 text-white py-1 px-4 rounded hover:bg-red-600"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminServiceList;
