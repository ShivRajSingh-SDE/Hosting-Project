import React from "react";
import CountUp from "react-countup";

export const Counter = () => {
  return (
    <>
      <div className="bg-[white] md:max-w-[90%] border-b-red-400 border-4 mx-auto rounded-2xl drop-shadow-xl shadow-2xl md:p-4 p-0  w-full">
        <div className="flex md:gap-0 justify-between gap-8">
          <div className="rounded-md  bg-white justify-center items-center flex flex-col p-4 md:p-6 lg:p-8">
            <h3>
              <CountUp start={0} end={50} duration={3} separator="+" />+
            </h3>
            <p className="md:text-xl text-[10px] font-serif font-bold">
              Register
            </p>
          </div>
          <div className="rounded-md overflow-hidden bg-white justify-center items-center flex flex-col p-4 md:p-6 lg:p-8">
            <h3>
              <CountUp start={0} end={10000} duration={4} />+
            </h3>
            <p className="md:text-xl  text-[10px] font-serif font-bold">
              Happy Clients
            </p>
          </div>
          <div className="rounded-md overflow-hidden bg-white justify-center items-center flex flex-col p-4 md:p-6 lg:p-8">
            <h3>
              <CountUp start={0} end={500} duration={2} />+
            </h3>
            <p className="md:text-xl  text-[10px] font-serif font-bold">
              Well-Known Developers
            </p>
          </div>
          <div className="rounded-md overflow-hidden bg-white justify-center items-center flex flex-col p-4 md:p-6 lg:p-8">
            <h3>Active Service</h3>
            <p className="md:text-xl  text-[10px] font-serif font-bold">
              24/7{" "}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
