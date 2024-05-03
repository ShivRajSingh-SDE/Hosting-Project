import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../store/AuthProvider";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const { storeTokenInLs } = useAuth();

  const navigate = useNavigate();
  const handleLogin = async (e) => {
    try {
      e.preventDefault();
      console.log(user);
      const response = await axios.post(
        "https://administration-h2fa.onrender.com/api/login",
        user
      );
      console.log("Server response this:", response);

      if (response.status === 200) {
        const res_data = response;

        storeTokenInLs(res_data.data.token);

        // Perform any other actions needed on successful login
        setUser({ email: "", password: "" });
        toast.success("login successful");
        navigate("/");
        window.location.reload();
      } else {
        toast.error(
          `
${response.data.extraDetails ? response.data.extraDetails : response.data}`,
          {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          }
        );
      }
    } catch (error) {
      console.log("Login error:", error);
    }
  };

  const handleInputChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUser({ ...user, [name]: value });
  };

  return (
    <>
      <div className=" bg-[#ffffff9a] m-2 p-2 max-w-[1100px] mx-auto rounded-2xl drop-shadow-xl shadow-xl  mt-12 ">
        <div className=" md:flex flex-row   justify-center items-center   mt-4">
          <div className="  ">
            <img
              src="./images/login.png"
              alt="login img"
              className="w-[auto] h-auto"
            />
          </div>
          <div className="    justify-center flex items-center w-full  flex-col p-4">
            <h1 className="text-2xl md:text-3xl  font-bold mb-3">Login Form</h1>
            <div className="w-full md:w-auto ">
              <form
                onSubmit={handleLogin}
                className="bg-[#0000000e]  p-3 rounded-2xl"
              >
                <div className="mb-4">
                  <label htmlFor="email" className="block mb-1 ">
                    Email
                  </label>
                  <input
                    type="text"
                    className="w-full border rounded px-3 py-2"
                    name="email"
                    placeholder="email"
                    required
                    autoComplete="off"
                    value={user.email}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="password" className="block mb-1">
                    Password
                  </label>
                  <input
                    type="password"
                    className="w-full border rounded px-3 py-2"
                    name="password"
                    placeholder="Password"
                    required
                    value={user.password}
                    onChange={handleInputChange}
                    autoComplete="off"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-500 text-white py-2 rounded"
                >
                  Login
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
