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
import { FaChevronRight } from "react-icons/fa";
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
          <div className="container mx-auto max-w-7xl px-4 py-4">
            <div className="flex justify-between  items-center  py-4 gap-4 flex-wrap   ">
              <div className="sm:hidden ">
                <IconButton onClick={() => setMenuOpen(true)}>
                  <IoMenu size={28} />
                </IconButton>
              </div>
              <div className="flex gap-x-8 items-center  ">
                <div className=" w-45 sm:w-32  ">
                  <img src={logo} alt="Logo" className="w-full h-auto  " />
                </div>
                <div className="flex lg:ml-55    ">
                  {/* Arama Kutusu ve Buton */}
                  <div className="hidden sm:flex mr-[30px]  ">
                    <div className="flex items-center  md:w-auto md:flex-nowrap">
                      <div className="relative w-full  ">
                        <IoIosSearch className="absolute left-3 top-3  text-gray-500  size={18} sm:hidden" />
                        <input
                          type="text"
                          placeholder="Aradığınız ürünü yazınız..."
                          value={value}
                          onChange={(e) => setValue(e.target.value)}
                          className="w-[158px] md:w-[355px] h-[40px]  bg-[#fff] sm:pl-2  pl-10 pr-3 py-2 border border-gray-300 rounded-[4px]shadow-sm focus:ring-2 focus:ring-gray-400 transition-all outline-0  "
                        />
                      </div>

                      <div>
                        <button className="bg-[#919191ed] h-[40px]  w-[80px] flex justify-center text-white items-center rounded-md  shadow-sm focus:ring-2 focus:ring-gray-400 transition-all outline-none  ">
                          Ara
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Hesap Butonu */}

                  <div className="hidden sm:flex items-center space-x-4  ">
                    <Button
                      sx={{ color: "#919191", border: "2px solid gray " }}
                      onClick={handleClick}
                      className="h-[45px] w-[135px] rounded-[4px]"
                      id="basic-button"
                      aria-controls={open ? "basic-menu" : undefined}
                      aria-haspopup="true"
                      aria-expanded={open ? "true" : undefined}
                    >
                      <div className="flex items-center gap-0,50">
                        <MdOutlineSupervisorAccount className="mr-2" /> Hesap{" "}
                      </div>
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

                    <div className="hidden sm:flex w-full ">
                      <button className="bg-[#919191ea] border-b-gray-600  text-white w-full py-[11px] px-[27px] justify-center  rounded-[4px] flex ml-[30px] md:px-6  items-center flex-wrap sm:px-1 ">
                        <SlBasket className="mr-2 " />
                        Sepet
                      </button>
                    </div>
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
          </div>

          {/* arama kısmı küçük ekran için */}
          <div className="sm:hidden relative w-full mt-2 px-5 ">
            <CiSearch className="absolute left-8 top-1/2 transform -translate-y-1/2 text-gray-500 text-xl  " />
            <input
              type="text"
              placeholder="Aradığınız ürünü yazınız..."
              value={value}
              onChange={(e) => setValue(e.target.value)}
              className="w-full pl-10 pr-3 py-2 border-gray-300 rounded-full shadow-sm focus:ring-2 focus:ring-blue-500 bg-[#F3F3F3]   "
            />
          </div>

          {/* siyah kısım ve buttonlar*/}
          <div>
            <div className="bg-black  w-full  py-3 hidden sm:flex justify-center  ">
              <div className="flex flex-wrap  gap-6 text-white  px-4 max-w-screen-xl w-full justify-evenly ">
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
              <div className="w-64 bg-white h-full flex flex-col p-2  gap-3 font-extrabold ">
                <button className="py-2 text-start flex justify-between items-center">
                  PROTEİN <FaChevronRight  />
                </button>
                <button className="py-2 text-start  flex justify-between items-center ">
                  SAĞLIK <FaChevronRight />
                </button>
                <button className="py-2 text-start  flex justify-between items-center">
                  GIDA
                  <FaChevronRight />
                </button>
                <button className="py-2 text-start  flex justify-between items-center">
                  VİTAMİN
                  <FaChevronRight />
                </button>
                <button className="py-2 text-start  flex justify-between items-center">
                  TÜM ÜRÜNLER
                  <FaChevronRight />
                </button>
              </div>
              <div className="gap-1.5 bg-[#E5E5E5] flex flex-col flex-21/12 px-2 font-medium text-sm ">
                <button className="py-2 text-start">HESABIM</button>
                <button className="py-2 text-start">MÜŞTERİ YORUMLARI</button>
                <button className="py-2 text-start">İLETİŞİM</button>
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
