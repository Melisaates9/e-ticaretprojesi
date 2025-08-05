import { Slider } from "../components/Slider";
import protein from "../assets/img/1protein.png";
import vitamin from "../assets/img/2.png";
import saglık from "../assets/img/3 .png";
import sporgida from "../assets/img/4.png";
import gida from "../assets/img/5.png";
import tumurunler from "../assets/img/6.png";

export const Homepage = () => {
  return (
    <>
      <Slider />
<div className="flex sm:flex-wrap gap-3 mx-4 justify-center  ">
      <div className=" grid grid-cols-1 sm:grid-cols-3  gap-4 mt-4 mb-6  ">
        {/* 1. Kutu */}
        <div className="relative w-full h-[157px]">
          <img
            src={protein}
            alt="pic"
            className="w-full h-full object-fill rounded-md "
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white bg-black/40 rounded-md">
          <h2 className="text-3xl font-semibold mb-2 ml-32">PROTEİN</h2>
           <button
    className="
    
    bg-white bg-opacity-80 text-black text-sm px-4 py-2 ml-28 rounded
    "
  >
    İNCELE
  </button>
  </div>
         

        </div>
        {/* 1. Kutu bitiş */}
          {/* 2. Kutu */}
        <div className="relative w-full h-[157px]">
        <img
          src={vitamin}
          alt="pic"
          className="sm:w-[380px]  h-[157px] object-fill rounded-md"
        />  
         <div className="absolute inset-0 flex flex-col items-center justify-center text-white bg-black/40 rounded-md">
          <h2 className="text-3xl font-semibold mb-2 ml-32 text-center mt-5">VİTA<br/>-MİNLER</h2>
           <button
    className="
    
    bg-white bg-opacity-80 text-black text-sm px-4 py-2 ml-32 rounded
    "
  >
    İNCELE
  </button>
  </div>
         </div>
          {/* 3. Kutu */}
          <div className="relative w-full h-[157px]">
        <img
          src={saglık}
          alt="pic"
          className="sm:w-[380px]  h-[157px] object-fill rounded-md"
        />
         <div className="absolute inset-0 flex flex-col items-center justify-center text-white bg-black/40 rounded-md">
          <h2 className="text-3xl font-semibold mb-2 ml-32 text-center mt-5">SAĞLIK</h2>
           <button
    className="
    
    bg-white bg-opacity-80 text-black text-sm px-4 py-2 ml-32 rounded
    "
  >
    İNCELE
  </button>
      </div>
      </div>
         </div>
     
      {/* 4. Kutu başı */}
      <div className=" grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4 mb-6">
        <div className="relative w-full h-[157px]">
        <div className="relative w-full h-[157px]">
          <img
            src={sporgida}
            alt="pic"
            className=" w-full h-full object-fill rounded-md  "
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white bg-black/40 rounded-md">
          <h2 className="text-3xl font-semibold mb-2 ml-32 text-center mt-5">SPOR<br/>GIDALARI</h2>
           <button
    className="
    
    bg-white bg-opacity-80 text-black text-sm px-4 py-2 ml-32 rounded
    "
  >
    İNCELE
  </button>
  </div>
        </div>
        </div>
         {/* 5. Kutu başı */}
        <div className="relative w-full h-[157px]">
        <img
          src={gida}
          alt="pic"
          className="sm:w-[380px]  h-[157px] object-fill rounded-md"
        />
         <div className="absolute inset-0 flex flex-col items-center justify-center text-white bg-black/40 rounded-md">
          <h2 className="text-3xl font-semibold mb-2 ml-32 text-center mt-5">GIDA</h2>
           <button
    className="
    
    bg-white bg-opacity-80 text-black text-sm px-4 py-2 ml-32 rounded
    "
  >
    İNCELE
  </button>
  </div>
         </div>
         {/* 6. Kutu başı */}
         <div className="relative w-full h-[157px]">
        <img
          src={tumurunler}
          alt="pic"
          className="sm:w-[380px]  h-[157px] object-fill rounded-md"
        />
         <div className="absolute inset-0 flex flex-col items-center justify-center text-white bg-black/40 rounded-md">
          <h2 className="text-3xl font-semibold mb-2 ml-32 text-center mt-5">TÜM<br/>ÜRÜNLER</h2>
           <button
    className="
    
    bg-white bg-opacity-80 text-black text-sm px-4 py-2 ml-32 rounded
    "
  >
    İNCELE
  </button>
  </div>

      </div>
      </div>
      </div>
    </>
  );
};
