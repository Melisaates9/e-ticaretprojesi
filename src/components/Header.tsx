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
import { IoMenu } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";

import { Badge, Drawer, IconButton } from "@mui/material";
export const Header = () => {
  const [value, setValue] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
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
        <div>
          <div className="flex justify-between mt-[26px] items-center  py-4 gap-4 flex-wrap   ">
            <div className="sm:hidden ">
              <IconButton onClick={() => setMenuOpen(true)}>
                <IoMenu size={28} />
              </IconButton>
            </div>
            <div className="flex gap-x-14 items-center ">
            <div className=" mx-auto sm:mx-0  ">
              <img
                src={logo}
                alt="Logo"
                className="w-full  sm:h-9 sm:ml-15 sm:w-38 "
              />
            </div>
            {/* Arama Kutusu ve Buton */}
            <div className="hidden sm:flex  ">
              <div className="flex items-center  md:w-auto md:flex-nowrap">
                <div className="relative w-full md:w-40 ">
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
            </div>

            {/* Hesap Butonu */}

            <div className=" items-center space-x-4 hidden sm:flex ">
              <Button
                sx={{ color: "#919191", border: "2px solid gray" }}
                onClick={handleClick}
                className="flex-wrap"
                id="basic-button"
                aria-controls={open ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
               
              >
               <div className="flex items-center px-5">
                <MdOutlineSupervisorAccount className="mr-2" /> Hesap  </div>
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
           
            <div className="hidden sm:flex w-full">
              <button className="bg-[#919191] text-white py-[11px] px-[27px]  rounded-md flex mx-[30px] md:px-6  items-center flex-wrap mr-10">
                <SlBasket className="mr-2 " />
                Sepet
              </button>
            </div>
            </div>
            </div>
            <div className="mr-4  sm:hidden">
              <button>
                <Badge badgeContent={4} color="success">
                  <SlBasket className="w-full " />
                </Badge>
              </button>
            </div>
          </div>

                      {/* arama kısmı küçük ekran için */}
          <div className="sm:hidden relative w-full mt-2 px-5 ">
          <CiSearch className= "absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-xl  " />
            <input
              type="text"
              placeholder="Aradığınız ürünü yazınız..."
              value={value}
              onChange={(e) => setValue(e.target.value)}
              className="w-full pl-10 pr-3 py-2 border-gray-300 rounded-full shadow-sm focus:ring-2 focus:ring-blue-500    "
            />
            
          </div>

          {/* siyah kısım ve buttonlar */}
          <div>
            <div className="bg-black  w-full gap-20 py-3 hidden sm:flex justify-center  ">
              <div className="flex text-white  gap-25 justify-center  ">
                <button> PROTEİN </button>
                <button className=" text-center  flex "> SPOR GIDALARI</button>
                <button>SAĞLIK </button>
                <button> GIDA</button>
                <button> VİTAMİN </button>
                <button> TÜM ÜRÜNLER </button>
              </div>
            </div>

            {/* Mobil için Drawer */}
            <Drawer
              anchor="left"
              open={menuOpen}
              onClose={() => setMenuOpen(false)}
            >
              <div className="w-64 bg-black h-full flex flex-col text-white p-4  ">
                <button
                  className="self-end text-gray-400 mb-4 "
                  onClick={() => setMenuOpen(false)}

                >
                  X
                </button>
                <button className="py-2">PROTEİN</button>
                <button className="py-2">SPOR GIDALARI</button>
                <button className="py-2">SAĞLIK</button>
                <button className="py-2">GIDA</button>
                <button className="py-2">VİTAMİN</button>
                <button className="py-2">TÜM ÜRÜNLER</button>
              </div>
            </Drawer>
          </div>
          {/* kargo kısımı */}
          <div className="">
            <div className="  justify-evenly text-xs mt-3.5 md:text-xs gap-2.5 hidden sm:flex ">
              <p className="flex ">
                {" "}
                <FaParachuteBox className="size-7 mx-3" />
                AYNI GÜN KARGO - <span>16:00’DAN ÖNCEKİ SİPARİŞLERDE </span>
              </p>
              <p className="flex">
                <GrEmoji className="size-7 mr-2" />
                ÜCRETSİZ KARGO - <span>100 TL ÜZERİ SİPARİŞLERDE </span>
              </p>
              <p className="flex">
                <AiOutlineSafetyCertificate className="size-7 mr-2 " />
                GÜVENLİ ALIŞVERİŞ -<span> 1.000.000+ MUTLU MÜŞTERİ</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
