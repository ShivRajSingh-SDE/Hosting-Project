import axios from "axios";
import { useEffect, useState } from "react";
import { useAuth } from "../../store/AuthProvider";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AdminContacts = () => {
  const [data, setData] = useState([]);
  const { AuthorizationToken } = useAuth();
  const getAllContact = async () => {
    const head = {
      headers: {
        Authorization: AuthorizationToken,
      },
    };
    try {
      const response = await axios.get(
        "https://administration-h2fa.onrender.com/api/admin/contacts",
        head
      );
      setData(response.data);
      console.log("get alluser", response.data);
    } catch (error) {
      console.log("Error getting getAllUsers", error.response);
    }
  };

  const mainDel = async (id) => {
    try {
      const head = {
        headers: {
          Authorization: AuthorizationToken,
        },
      };
      console.log("user table id", id);
      const response = await axios.delete(
        `https://administration-h2fa.onrender.com/api/admin/contacts/delete/${id}`,
        head
      );
      if (response.status === 200) {
        toast.success("contact delete successfully !", {
          position: "bottom-left",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        getAllContact();
      }
    } catch (error) {
      console.log("admin contact delete error", error);
    }
  };

  useEffect(() => {
    getAllContact();
  }, []);
  return (
    <>
      <h1 className="mt-10" style={{ color: "white", width: "100%" }}>
        contacts
      </h1>

      <div className="mt-10  text-white ">
        {data.map((contact, index) => (
          <div
            className=" flex flex-row w-auto p-2 rounded-xl border-2  space-x-10"
            key={index}
          >
            <div className=" flex flex-col items-start bg-[#ffffff1a] p-3 rounded-2xl drop-shadow-2xl shadow-2xl">
              <div className="block">username: {contact.username}</div>
              <div className="block">email: {contact.email}</div>
              <div className="block">phone: {contact.phone}</div>
              <div className="block">message: {contact.message}</div>
            </div>
            <div className=" flex flex-col">
              <div
                onClick={() => {
                  mainDel(contact._id);
                }}
                className=" p-3 bg-[#ffffff2f] rounded-2xl drop-shadow-2xl shadow-2xl hover:scale-105 ease-in-out cursor-pointer hover:bg-[#ff60603d] h-auto"
              >
                delete
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default AdminContacts;
