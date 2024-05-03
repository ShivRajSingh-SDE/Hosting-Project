import React from "react";
import { NavLink, Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../store/AuthProvider";

const AdminLayout = () => {
  const { user, isLoading } = useAuth();

  if (isLoading) {
    return (
      <div className="bg-slate-700 h-screen flex items-center justify-center text-white text-4xl">
        Loading...
      </div>
    );
  }

  if (!user.isAdmin) {
    return <Navigate to="/" />;
  }

  return (
    <div className="mt-16 adminLayout p-2 flex">
      <div className="adminBox1  bg-white p-4 rounded-2xl drop-shadow-2xl shadow-2xl m-2">
        <header className="">
          <nav className=" ">
            <ul className=" justify-center items-center  space-y-4  flex flex-col">
              <li className=" p-2 bg-[#00fff21f] w-full hover:scale-105 ease-in-out  rounded-xl drop-shadow-xl shadow-xl">
                <NavLink className="adminLink" to="/admin/users">
                  Users
                </NavLink>
              </li>
              <li className=" p-2 bg-[#00fff21f] w-full hover:scale-105 ease-in-out  rounded-xl drop-shadow-xl shadow-xl">
                <NavLink className="adminLink" to="/admin/contacts">
                  Contacts
                </NavLink>
              </li>
              <li className=" p-2 bg-[#00fff21f] hover:scale-105 ease-in-out  w-full  rounded-xl drop-shadow-xl shadow-xl">
                <NavLink className="adminLink" to="/admin/service">
                  Add Service
                </NavLink>
              </li>
              <li className=" p-2 bg-[#00fff21f] w-full hover:scale-105 ease-in-out  rounded-xl drop-shadow-xl shadow-xl">
                <NavLink className="adminLink" to="/admin/serviceUpdate">
                  Service View
                </NavLink>
              </li>
            </ul>
          </nav>
        </header>
      </div>
      <div className="adminBox2 overflow-auto flex-1 p-3 rounded-2xl drop-shadow-xl shadow-xl">
        <Outlet />
      </div>
    </div>
  );
};

export default AdminLayout;
