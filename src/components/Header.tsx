import React, { useState } from "react";
import logo from "../assets/img/LOGO_Siyah.png";
import { IoIosSearch } from "react-icons/io";
import { SlBasket } from "react-icons/sl";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { MdOutlineSupervisorAccount } from "react-icons/md";
import { FaParachuteBox } from "react-icons/fa";
import { GrEmoji } from "react-icons/gr";
import { AiOutlineSafetyCertificate } from "react-icons/ai";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { IoMenu } from "react-icons/io5";

import { IconButton } from "@mui/material";
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
  {
    /* app barr */
  }

  return (
    <>
      <div>
        <div className="flex justify-between mt-[26px] items-center  py-4 gap-4 flex-wrap  ">
          <div className="w-24 md:w-32 flex-shrink-0 ">
            <img src={logo} alt="Logo" className="w-full ml-15" />
          </div>
          {/* Arama Kutusu ve Buton */}
          <div className="flex items-center  md:w-auto md:flex-nowrap   ">
            <div className="relative w-full md:w-72 ">
              <IoIosSearch className="absolute left-3 top-3 text-gray-500  size={18}" />
              <input
                type="text"
                placeholder="Aradığınız ürünü yazınız..."
                value={value}
                onChange={(e) => setValue(e.target.value)}
                className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 transition-all "
              />
            </div>

            <div>
              <button className="bg-[#919191] text-white py-[11px] px-[27px] rounded-md  shadow-sm focus:ring-2 focus:ring-gray-400 transition-all   ">
                Ara
              </button>
            </div>
          </div>
          {/* Hesap Butonu */}

          <div className="flex items-center space-x-4">
            <Button
              sx={{ color: "#919191", border: "2px solid gray" }}
              className="flex-wrap"
              id="basic-button"
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
            >
              {" "}
              <MdOutlineSupervisorAccount className="mx-2 flex items-center md:mx-2 " />{" "}
              Hesap
            </Button>

            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              <MenuItem className="font-bold" onClick={handleClose}>
                Üye ol
              </MenuItem>
              <MenuItem className="font-bold" onClick={handleClose}>
                Giriş yap
              </MenuItem>
            </Menu>
          </div>
          <div>
            <button className="bg-[#919191] text-white py-[11px] px-[27px]  rounded-md flex mx-[30px] md:px-6  items-center flex-wrap mr-10">
              <SlBasket className="mx-1 my-1" />
              Sepet
            </button>
          </div>
          <div className="">
            <div className="bg-black  w-full    ">
              <div className="flex text-white  gap-25 justify-center ">
                <button> PROTEİN </button>
                <button className=" text-center  flex space-x-10 ">
                  {" "}
                  SPOR GIDALARI
                </button>
                <button>SAĞLIK </button>
                <button> GIDA</button>
                <button> VİTAMİN </button>
                <button> TÜM ÜRÜNLER </button>
              </div>
            </div>
          </div>
          {/* kargo kısımı */}
          <div className="">
            <div className="  flex justify-evenly ">
              <p>
                {" "}
                <FaParachuteBox />
                AYNI GÜN KARGO - 16:00’DAN ÖNCEKİ SİPARİŞLERDE{" "}
              </p>
              <p>
                <GrEmoji />
                ÜCRETSİZ KARGO - 100 TL ÜZERİ SİPARİŞLERDE{" "}
              </p>
              <p>
                <AiOutlineSafetyCertificate />
                GÜVENLİ ALIŞVERİŞ - 1.000.000+ MUTLU MÜŞTERİ
              </p>
            </div>
            <div>
              <Box sx={{ flexGlow: 1 }}>
                <AppBar
                  position="static"
                  sx={{ bgcolor: "#fff", boxShadow: "none" }}
                >
                  <Toolbar>
                    <IconButton
                      size="large"
                      edge="start"
                      color="black"
                      aria-label="menu"
                      sx={{ mr: 2 }}
                    >
                      <IoMenu />
                    </IconButton>
                  </Toolbar>
                </AppBar>
              </Box>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
