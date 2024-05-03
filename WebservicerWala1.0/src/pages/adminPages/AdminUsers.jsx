import axios from "axios";
import { useEffect, useState } from "react";
import { useAuth } from "../../store/AuthProvider";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";

const AdminUsers = () => {
  const [userData, setUserData] = useState([]);
  const { AuthorizationToken } = useAuth();

  const getAllUsers = async () => {
    const head = {
      headers: {
        Authorization: AuthorizationToken,
      },
    };
    try {
      const response = await axios.get(
        "https://administration-h2fa.onrender.com/api/users",
        head
      );
      setUserData(response.data);
      console.log("get alluser", response);
    } catch (error) {
      console.log("Error getting getAllUsers", error.response);
    }
  };
  useEffect(() => {
    getAllUsers();
  }, []);

  const mainDel = async (id) => {
    const head = {
      headers: {
        Authorization: AuthorizationToken,
      },
    };
    console.log("user table id", id);
    const response = await axios.delete(
      `https://administration-h2fa.onrender.com/api/users/delete/${id}`,
      head
    );
    if (response.status === 200) {
      toast.success("User deleted successfully !", {
        position: "bottom-left",
        autoClose: 1050,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      getAllUsers();
    }
    console.log("user table response", response);
  };
  return (
    <>
      <div className="adminUserData mt-2">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
        </table>
        <div className="tableBody">
          <table>
            <tbody>
              {userData.map((item, index) => (
                <tr key={index}>
                  <td>{item.username}</td>
                  <td>{item.email}</td>
                  <td>{item.phone}</td>
                  <td>
                    <button className="adminUpdatebutton">
                      <Link to={`/admin/users/${item._id}/edit`}>edit</Link>
                    </button>
                  </td>
                  <td>
                    <button
                      onClick={() => {
                        mainDel(item._id);
                      }}
                      className="adminDelbutton"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
export default AdminUsers;
