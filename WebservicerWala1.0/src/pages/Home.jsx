import React from "react";
import { NavLink } from "react-router-dom";
import { Counter } from "../components/Counter";
import img from "../assets/pic.png";
import img2 from "../assets/pic2.png";
const Home = () => {
  return (
    <>
      <main className="flex  flex-col items-center justify-center max-w-[95%] mx-auto   ">
        <section className="text-center h-[90vh] md:h-[auto]  justify-center mt-5   w-full items-center flex">
          <div className="container   md:flex-row   space-y-5  flex-col-reverse  md:max-w-[auto]  mx-auto">
            <div className="  font-sans h-[100%] w-[100%] md:w-[60%] p-2 text-white space-y-5  ">
              <p class=" text-2xl decoration-clone font-bold  text-[#ffffff8f]">
                𝔇𝔦𝔰𝔠𝔬𝔳𝔢𝔯 excellence with our leading IT solutions
              </p>
              <h1 class=" lg:text-4xl text-4xl    font-extrabold">
                Welcome to 𝕍𝕠𝕣𝕥𝕖𝕩ℙ𝕦𝕝𝕤𝕖 𝕋𝕖𝕔𝕙𝕟𝕠𝕝𝕠𝕘𝕚𝕖𝕤
              </h1>

              <p class="modern-paragraph">
                Elevate your business to new heights with our avant-garde IT
                solutions. At VortexPulse Technologies, we excel in delivering
                cutting-edge IT services tailored to your distinctive
                requirements.
              </p>
              <div className="flex justify-center mt-4">
                <div className="bg-[#f57ceb44] hover:scale-105 ease-in-out hover:bg-[#ffffff2a] text-white py-2 px-3 rounded-full mr-4">
                  <NavLink to="/contact">Contact</NavLink>
                </div>
                <div className="bg-gray-300 text-gray-700 hover:scale-105 ease-in-out hover:bg-[#ffffff8f] py-2 px-3 rounded-full">
                  <NavLink to="/About">Learn More</NavLink>
                </div>
              </div>
            </div>

            <div className=" justify-center items-center w-[90%] md:w-[40%] flex">
              <img
                src={img}
                alt="Home image"
                className="  rounded-b-2xl drop-shadow-3xl my-10 shadow-2xl"
              />
            </div>
          </div>
        </section>

        <Counter />

        <section className="text-center h-[90vh] md:h-[auto]  justify-center mt-5   w-full items-center flex">
          <div className="container   md:flex-row   space-y-5  flex-col  md:max-w-[auto]  mx-auto">
            <div className=" justify-center items-center w-[90%] md:w-[40%] flex">
              <img
                src={img2}
                alt="Home image"
                className="  rounded-2xl drop-shadow-3xl my-10 shadow-2xl"
              />
            </div>

            <div className="  font-sans h-[100%] w-full  md:w-[60%] text-white space-y-5  ">
              <p class="text-3xl font-bold text-white">
                Unleash the Power of Innovation
              </p>
              <h1 class="text-4xl lg:text-5xl transform scale-105 font-extrabold text-white">
                Elevate Your Journey with Us
              </h1>
              <p class="text-lg italic tracking-wide text-white">
                Ready to embark on a path to efficiency and security in your IT
                infrastructure? Connect with us now for a complimentary
                consultation, and let's explore how Pritam Developer Wala can
                redefine success for your business.
              </p>

              <div className="flex justify-center mt-4">
                <div className="bg-[#f57ceb44] hover:scale-105 ease-in-out hover:bg-[#ffffff2a] text-white py-2 px-3 rounded-full mr-4">
                  <NavLink to="/contact">Contact</NavLink>
                </div>
                <div className="bg-gray-300 text-gray-700 hover:scale-105 ease-in-out hover:bg-[#ffffff8f] py-2 px-3 rounded-full">
                  <NavLink to="/About">Learn More</NavLink>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
