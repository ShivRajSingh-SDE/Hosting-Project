import React from "react";

function Cards(props) {
  return (
    <>
      <div class=" flex flex-col space-y-2 justify-center items-center p-3 w-[30vh]  bg-white  rounded-lg shadow-2xl">
        <div class="prod-title">
          <p class="text-2xl uppercase text-gray-900 font-bold">
            <h4>{props.service}</h4>
          </p>
          <p class="uppercase text-sm text-gray-400 ">
            <h4>{props.description}</h4>
          </p>
        </div>
        <div class="prod-img">
          <img
            src={props.image}
            class=" md:h-[40vh] h-[auto] overflow-hidden object-cover object-center"
          />
        </div>
        <div class="prod-info grid gap-10">
          <div>
            <ul class="flex flex-row justify-center items-center">
              <li class="mr-4 last:mr-0">
                <span class="block p-1 border-2 border-gray-500 rounded-full transition ease-in duration-300">
                  <a
                    href="#blue"
                    class="block w-6 h-6 bg-blue-900 rounded-full"
                  ></a>
                </span>
              </li>
              <li class="mr-4 last:mr-0">
                <span class="block p-1 border-2 border-white hover:border-gray-500 rounded-full transition ease-in duration-300">
                  <a
                    href="#yellow"
                    class="block w-6 h-6 bg-yellow-500 rounded-full"
                  ></a>
                </span>
              </li>
              <li class="mr-4 last:mr-0">
                <span class="block p-1 border-2 border-white hover:border-gray-500 rounded-full transition ease-in duration-300">
                  <a
                    href="#red"
                    class="block w-6 h-6 bg-red-500 rounded-full"
                  ></a>
                </span>
              </li>
              <li class="mr-4 last:mr-0">
                <span class="block p-1 border-2 border-white hover:border-gray-500 rounded-full transition ease-in duration-300">
                  <a
                    href="#green"
                    class="block w-6 h-6 bg-green-500 rounded-full"
                  ></a>
                </span>
              </li>
            </ul>
          </div>
          <div class="flex flex-col md:flex-row justify-between gap-5 items-center text-gray-900">
            <p class="font-bold text-xl text-red-500"> {props.price}$</p>
            <button class=" p-1 rounded-2xl drop-shadow-2xl shadow-2xl  hover:bg-[#0000001f] bg-[#ffffffa9]">
              Book
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
export default Cards;
