import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "../store/AuthProvider";
import { AiOutlineSlackSquare, AiOutlineSlack } from "react-icons/ai";

const Navbar = () => {
  const { isLoggedIn, user } = useAuth();
  const [toggle, setToggle] = useState(false);

  console.log("isAdmin:", user.isAdmin);

  const toggleMenu = () => {
    setToggle(!toggle);
  };

  return (
    <header>
      <div className="bg-[#ffffff31] z-50 text-white rounded-b-2xl drop-shadow-xl shadow-xl p-4 max-w-[95%] mx-auto">
        <div className="flex justify-between z-50 items-center">
          <div className="logo">
            <NavLink to="/" className="">
              <a
                href="/"
                className="h-[30px] border-2 p-2 rounded-xl hover:scale-105 ease-in-out duration-300"
              >
                𝕍𝕠𝕣𝕥𝕖𝕩
              </a>
            </NavLink>
          </div>

          <div>
            <nav className=" ">
              <ul className="hidden md:flex flex-row  justify-center items-center space-x-4 font-sans">
                <NavLink
                  to="/"
                  className="hover:scale-110 duration-300  ease-in-out hover:text-[#ffffff] text-2xl"
                >
                  Home
                </NavLink>
                <NavLink
                  to="/about"
                  className="hover:scale-110 duration-300  ease-in-out hover:text-[#ffffff] text-2xl"
                >
                  About
                </NavLink>
                <NavLink
                  to="/contact"
                  className="hover:scale-110 duration-300  ease-in-out hover:text-[#ffffff] text-2xl"
                >
                  Contact
                </NavLink>
                <NavLink
                  to="/service"
                  className="hover:scale-110 duration-300  ease-in-out hover:text-[#ffffff] text-2xl"
                >
                  Services
                </NavLink>
                <NavLink
                  to="/pricing"
                  className="hover:scale-110 duration-300  ease-in-out hover:text-[#ffffff] text-2xl"
                >
                  Pricing
                </NavLink>

                {user.isAdmin ? (
                  <NavLink
                    to="/admin/users"
                    className="hover:scale-110 duration-300  ease-in-out hover:text-[#ffffff] text-2xl"
                  >
                    Admin
                  </NavLink>
                ) : null}
                {isLoggedIn ? (
                  <NavLink
                    to="/Logout"
                    className="hover:scale-110 duration-300  ease-in-out hover:text-[#ffffff] text-2xl"
                  >
                    Logout
                  </NavLink>
                ) : (
                  <>
                    <NavLink
                      to="/register"
                      className="hover:scale-110 duration-300  ease-in-out hover:text-[#ffffff] text-2xl"
                    >
                      Register
                    </NavLink>
                    <NavLink
                      to="/login"
                      className="hover:scale-110 duration-300  ease-in-out hover:text-[#ffffff] text-2xl"
                    >
                      Login
                    </NavLink>
                  </>
                )}
              </ul>
            </nav>

            {toggle ? (
              <AiOutlineSlackSquare
                onClick={toggleMenu}
                className="md:hidden block text-[50px] text-[#ffffff] rounded-3xl"
              />
            ) : (
              <AiOutlineSlack
                onClick={toggleMenu}
                className="md:hidden block text-[50px] text-[#ffffff]"
              />
            )}

            <nav>
              <ul
                className={` md:hidden bg-[#ffffff] flex z-49 fixed w-full text-black justify-center items-center  space-y-10 flex-col  ${
                  toggle ? "left-[0]" : "left-[-120%]"
                }`}
              >
                <NavLink
                  onClick={toggleMenu}
                  to="/"
                  className="hover:scale-105 duration-300  ease-in-out  p-2 bg-[#ffffff4d] justify-center flex rounded-2xl text-black w-full"
                >
                  Home
                </NavLink>
                <NavLink
                  onClick={toggleMenu}
                  to="/about"
                  className="hover:scale-105 duration-300  ease-in-out  p-2 bg-[#ffffff4d] justify-center flex rounded-2xl text-black w-full"
                >
                  About
                </NavLink>
                <NavLink
                  onClick={toggleMenu}
                  to="/contact"
                  className="hover:scale-105 duration-300  ease-in-out  p-2 bg-[#ffffff4d] justify-center flex rounded-2xl text-black w-full"
                >
                  Contact
                </NavLink>
                <NavLink
                  onClick={toggleMenu}
                  to="/service"
                  className="hover:scale-105 duration-300  ease-in-out  p-2 bg-[#ffffff4d] justify-center flex rounded-2xl text-black w-full"
                >
                  Services
                </NavLink>
                <NavLink
                  onClick={toggleMenu}
                  to="/pricing"
                  className="hover:scale-105 duration-300  ease-in-out  p-2 bg-[#ffffff4d] justify-center flex rounded-2xl text-black w-full"
                >
                  Pricing
                </NavLink>

                {user.admin && (
                  <NavLink
                    onClick={toggleMenu}
                    to="/admin"
                    className="hover:scale-105 duration-300  ease-in-out  p-2 bg-[#ffffff4d] justify-center flex rounded-2xl text-black w-full"
                  >
                    Admin
                  </NavLink>
                )}
                {isLoggedIn ? (
                  <NavLink
                    onClick={toggleMenu}
                    to="/Logout"
                    className="hover:scale-105 duration-300  ease-in-out  p-2 bg-[#ffffff4d] justify-center flex rounded-2xl text-black w-full"
                  >
                    Logout
                  </NavLink>
                ) : (
                  <>
                    <NavLink
                      onClick={toggleMenu}
                      to="/register"
                      className="hover:scale-105 duration-300  ease-in-out  p-2 bg-[#ffffff4d] justify-center flex rounded-2xl text-black w-full"
                    >
                      Register
                    </NavLink>
                    <NavLink
                      onClick={toggleMenu}
                      to="/login"
                      className="hover:scale-105 duration-300  ease-in-out  p-2 bg-[#ffffff4d] justify-center flex rounded-2xl text-black w-full"
                    >
                      Login
                    </NavLink>
                  </>
                )}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
