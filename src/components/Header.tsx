import React, { useState } from "react";
import logo from "../assets/img/LOGO_Siyah.png";
import { IoIosSearch } from "react-icons/io";
import { SlBasket } from "react-icons/sl";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

export const Header = () => {
  const [value, setValue] = useState("");
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <div className="flex justify-between mt-[26px] ">
        <div>
          <img src={logo} alt="Logo" />
        </div>
        <div className="flex">
          <div className="relative w-72 ">
            <IoIosSearch
              className="absolute left-3 top-3 text-gray-500"
              size={18}
            />
            <input
              type="text"
              placeholder="Aradığınız ürünü yazınız..."
              value={value}
              onChange={(e) => setValue(e.target.value)}
              className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 transition-all "
            />
          </div>

          <div>
            <button className="bg-[#919191] text-white py-[11px] px-[27px] rounded-[4px]  ">
              Ara
            </button>
          </div>
        </div>
        <div>
          <button className="bg-[#919191] text-white py-[11px] px-[27px] rounded-[4px] flex">
            <SlBasket />
            Sepet
          </button>
        </div>
        <div>
          <Button  sx={{ color:"#919191"}}
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          >Hesap
          </Button>

          <Menu 
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby':'basic-button'

          }}

          >
            <MenuItem className="font-bold" onClick={handleClose}>Üye ol</MenuItem>

          </Menu>
        </div>
      </div>
    </>
  );
};
