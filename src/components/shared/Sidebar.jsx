import React from "react";
import {
  RiHome6Line,
  RiPercentLine,
  RiPieChartLine,
  RiMailAiLine,
  RiNotification3Line,
  RiSettings3Line,
  RiLogoutCircleRLine,
} from "react-icons/ri";

export const Sidebar = (props) => {
 
  const {showMenu} = props

  return (
    <div className={`bg-[#1F1D2B] fixed lg:left-0 top-0 w-28 h-full flex flex-col justify-between py-4 rounded-tr-xl rounded-br-xl
    z-50 transition-all ${showMenu ? 'left-0' : '-left-full'}`}>
      <div>
        <ul className="pl-4">
          <li>
            <h1 className="text-xl text-gray-300 uppercase font-bold text-center my-5 ">
              Logo
            </h1>
          </li>
          <li className="bg-[#262837] p-4 rounded-tl-xl rounded-bl-xl">
            <a
              href="#"
              className="bg-[#ec7c6a] p-4 flex justify-center rounded-xl text-white"
            >
              <RiHome6Line className="text-xl" />
            </a>
          </li>
          <li className="hover:bg-[#262837] p-4 rounded-tl-xl rounded-bl-xl group transition-colors">
            <a
              href="#"
              className="group-hover:bg-[#ec7c6a]  p-4 flex justify-center rounded-xl text-[#ec7c6a] group-hover:text-white transition-colors"
            >
              <RiPercentLine className="text-xl" />
            </a>
          </li>
          <li className="hover:bg-[#262837] p-4 rounded-tl-xl rounded-bl-xl group transition-colors">
            <a
              href="#"
              className="group-hover:bg-[#ec7c6a]  p-4 flex justify-center rounded-xl text-[#ec7c6a] group-hover:text-white transition-colors"
            >
              <RiPieChartLine className="text-xl" />
            </a>
          </li>
          <li className="hover:bg-[#262837] p-4 rounded-tl-xl rounded-bl-xl group transition-colors">
            <a
              href="#"
              className="group-hover:bg-[#ec7c6a]  p-4 flex justify-center rounded-xl text-[#ec7c6a] group-hover:text-white transition-colors"
            >
              <RiMailAiLine className="text-xl" />
            </a>
          </li>
          <li className="hover:bg-[#262837] p-4 rounded-tl-xl rounded-bl-xl group transition-colors">
            <a
              href="#"
              className="group-hover:bg-[#ec7c6a]  p-4 flex justify-center rounded-xl text-[#ec7c6a] group-hover:text-white transition-colors"
            >
              <RiNotification3Line className="text-xl" />
            </a>
          </li>
          <li className="hover:bg-[#262837] p-4 rounded-tl-xl rounded-bl-xl group transition-colors">
            <a
              href="#"
              className="group-hover:bg-[#ec7c6a]  p-4 flex justify-center rounded-xl text-[#ec7c6a] group-hover:text-white transition-colors"
            >
              <RiSettings3Line className="text-xl" />
            </a>
          </li>
        </ul>
      </div>
      <div>
        <ul className="pl-4">
        <li className="hover:bg-[#262837] p-4 rounded-tl-xl rounded-bl-xl group transition-colors">
            <a
              href="#"
              className="group-hover:bg-[#ec7c6a]  p-4 flex justify-center rounded-xl text-[#ec7c6a] group-hover:text-white transition-colors"
            >
              <RiLogoutCircleRLine className="text-xl" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
