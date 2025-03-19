import React, { useState } from "react";
import logo from "../assets/img/LOGO_Siyah.png";
import { IoIosSearch } from "react-icons/io"
import { SlBasket } from "react-icons/sl";

export const Header = () => {
  const [value, setValue] = useState("");
  return (
    <>
    <div className="flex justify-between mt-[26px] ">
      <div>
        <img src={logo} alt="Logo" />
      </div>
      <div className="flex">
      <div className="relative w-72 ">
        <IoIosSearch className="absolute left-3 top-3 text-gray-500" size={18} />
        <input
          type="text"
          placeholder="Aradığınız ürünü yazınız..."
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 transition-all "
        />
      </div>
     
      <div >
        <button className="bg-[#919191] text-white py-[11px] px-[27px] rounded-[4px]  ">Ara</button>
      </div>
      </div>
      <div >
        <button className="bg-[#919191] text-white py-[11px] px-[27px] rounded-[4px] flex" ><SlBasket/>Sepet</button>
      </div>
      </div>
    </>
  );
};
