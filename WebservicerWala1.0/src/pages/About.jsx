import React from "react";
import { NavLink } from "react-router-dom";
import { Counter } from "../components/Counter";
import { useAuth } from "../store/AuthProvider";
import img3 from "../assets/pic3.png";
export const About = () => {
  let username;
  const { user } = useAuth();
  if (user) {
    username = `welcome ${user.username}`;
  } else {
    username = "welcome to our website";
  }
  return (
    <>
      <section className="text-center w-full my-18  section1">
        <div className="  md:flex  my-10 flex-row max-w-[80%] mx-auto">
          <div className=" relative    md:flex-row   space-y-5  flex-col-reverse  ">
            <div className="   font-sans h-[100%] w-[100%] md:w-[90%]  text-white space-y-5  ">
              <p class=" text-2xl decoration-clone font-bold  text-[#ffffff8f]">
                𝔇𝔦𝔰𝔠𝔬𝔳𝔢𝔯 excellence with our leading IT solutions
              </p>
              <span>{username}</span>
              <h1 class=" lg:text-4xl text-4xl    font-extrabold">
                Welcome to 𝕍𝕠𝕣𝕥𝕖𝕩ℙ𝕦𝕝𝕤𝕖 𝕋𝕖𝕔𝕙𝕟𝕠𝕝𝕠𝕘𝕚𝕖𝕤
              </h1>

              <p class="modern-paragraph">
                Embark on a journey of innovation and success as we redefine the
                possibilities of IT solutions. At 𝕍𝕠𝕣𝕥𝕖𝕩ℙ𝕦𝕝𝕤𝕖 𝕋𝕖𝕔𝕙𝕟𝕠𝕝𝕠𝕘𝕚𝕖𝕤, we
                don't just meet your needs; we surpass them with our
                forward-thinking and avant-garde approach. Elevate your business
                to new heights with our cutting-edge IT services, uniquely
                crafted to suit your individual requirements. Welcome to a realm
                where technology meets excellence.
              </p>

              <img
                src="https://imgs.search.brave.com/y5gNtaghiOQrMk5mImkEUSUyjVtgzv03j3j1YzTZfSg/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9kZXYu/dG8vYXNzZXRzL2V4/cGxvZGluZy1oZWFk/LWRhY2ViMzhkNjI3/ZTZhZTliNzMwZjM2/YTFlMzkwZmNhNTU2/YTQyODlkNWE0MWFi/YjJjMzUwNjhhZDNl/MmM0YjUuc3Zn.svg"
                alt="Home image"
                className="h-[7vh] md:block hidden animate-bounce absolute top-0 rounded-2xl drop-shadow-xl shadow-2xl"
              />
            </div>
          </div>

          <div className=" relative   -z-10">
            <img
              src={img3}
              alt="Home image"
              className="w-[full] md:w-[70%] my-5 mx-auto -z-10   rounded-2xl drop-shadow-xl shadow-2xl"
            />
            <img
              src="https://imgs.search.brave.com/y5gNtaghiOQrMk5mImkEUSUyjVtgzv03j3j1YzTZfSg/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9kZXYu/dG8vYXNzZXRzL2V4/cGxvZGluZy1oZWFk/LWRhY2ViMzhkNjI3/ZTZhZTliNzMwZjM2/YTFlMzkwZmNhNTU2/YTQyODlkNWE0MWFi/YjJjMzUwNjhhZDNl/MmM0YjUuc3Zn.svg"
              alt="Home image"
              className="h-[7vh]  animate-spin absolute bottom-0 rounded-2xl drop-shadow-xl shadow-2xl"
            />
          </div>
        </div>
      </section>
      <Counter />
    </>
  );
};

export default About;
