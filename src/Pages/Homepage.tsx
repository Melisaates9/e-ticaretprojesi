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
      <div className="flex justify-center gap-4 mt-4 mb-6  ">
        <img src={protein} alt="pic" className="sm:w-[380px]  h-[157px] object-fill rounded-md" />
        <img src={vitamin} alt="pic" className="sm:w-[380px]  h-[157px] object-fill rounded-md" />
        <img src={saglık} alt="pic" className="sm:w-[380px]  h-[157px] object-fill rounded-md" />
       
      </div>
      <div className=" flex justify-center gap-4 mt-4 mb-6">
          <img src={sporgida} alt="pic" className="sm:w-[380px]  h-[157px] object-fill rounded-md"/>
          <img src={gida} alt="pic" className="sm:w-[380px]  h-[157px] object-fill rounded-md" />
          <img src={tumurunler} alt="pic" className="sm:w-[380px]  h-[157px] object-fill rounded-md"/>
        </div>
    </>
  );
};
