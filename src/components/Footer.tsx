
import Logo from "../assets/img/LOGO_beyaz.png";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import { FaPlus } from "react-icons/fa";

export const Footer = () => {
  return (
    <>
      <div className="bg-[#222222] w-full text-[#999999] pl-3  text-[11.48px] p-6 ">
        {/* footer logo iletişim */}
        <div className="sm:grid-cols-3 hidden sm:grid  place-items-center container">

        <div className="space-y-1.5">

          <div className=" w-30 mb-2 ">
            <img src={Logo} alt="Logo" className="w-full h-auto pt-3 " />
          </div>
          <p>İletişim</p>
          <p>Hakkımızda</p>
          <p>Sıkça Sorulan Sorular</p>
          <p>KVKK</p>
          <p>Çalışma İlkelerimiz</p>
          <p>Satış Sözleşmesi</p>
          <p>Garanti ve İade Koşulları</p>
          <p>Gerçek Müşteri Yorumları</p>
          <p>Blog</p>
          
        </div>
        <div className="text-[11.48px] space-y-1.5 ">
          <p className="text-[17.44px] text-white">Kategoriler</p>
          <p>Protein</p>
          <p>Spor Gıdaları</p>
          <p>Sağlık</p>
          <p>Gıda</p>
          <p>Vitamin</p>
          <p>Aksesuar</p>
          <p>Tüm Ürünler</p>
          <p>Paketler</p>
          <p>Lansmana Özel Fırsatlar</p>
        </div>
        <div className="text-[11.48px] space-y-1.5">
          <p className="text-[17.48px] text-white">Popüler Ürünler</p>
          <p>Whey Protein</p>
          <p>Cream of Rice</p>
          <p>Creatine</p>
          <p>BCAA+</p>
          <p>Pre-Workout</p>
          <p>Fitness Paketi</p>
          <p>Collagen</p>
          <p>Günlük Vitamin Paketi</p>
          <p>ZMA</p>
        </div>
        <div>
        <p className="text-[10px] mt-10  ">
            Copyright © - Tüm Hakları Saklıdır.
          </p>
          </div>
        </div>
       
        {/* mobil kısmı footer logo iletişim  */}
        <div className="sm:hidden inline-block ">
            
          <Accordion sx={{backgroundColor:"#222222 "}}>
            <AccordionSummary

            sx={{color:"#ffffff" ,flexDirection: "row-reverse","& .MuiAccordionSummary-content":{
                marginLeft: "8px",
            } }} 
              expandIcon={<FaPlus className="text-white"/>
            }
              aria-controls="panel1-content"
              id="panel1-header"
            >
              <p>OJS Nutrition </p>
            </AccordionSummary>
            <AccordionDetails sx={{color:"#ffffff" }} >
              <p>İletişim</p>
              <p>Hakkımızda</p>
              <p>Sıkça Sorulan Sorular</p>
              <p>KVKK</p>
              <p>Çalışma İlkelerimiz</p>
              <p>Satış Sözleşmesi</p>
              <p>Garanti ve İade Koşulları</p>
              <p>Gerçek Müşteri Yorumları</p>
              <p>Blog</p>
            </AccordionDetails>
          </Accordion>
          <Accordion  sx={{backgroundColor:"#222222"}} >
            <AccordionSummary 
            sx={{color:"#ffffff" ,flexDirection: "row-reverse","& .MuiAccordionSummary-content":{
                marginLeft: "8px",
            } }} 
              expandIcon={<FaPlus  className="text-white"/>
            }
              aria-controls="panel2-content"
              id="panel2-header"
            >
              
              <p>Kategoriler</p>
            </AccordionSummary>
            <AccordionDetails sx={{color:"#ffffff"}} >
              <p>Protein</p>
              <p>Spor Gıdaları</p>
              <p>Sağlık</p>
              <p>Gıda</p>
              <p>Vitamin</p>
              <p>Aksesuar</p>
              <p>Tüm Ürünler</p>
              <p>Paketler</p>
              <p>Lansmana Özel Fırsatlar</p>
            </AccordionDetails>
          </Accordion>

          <Accordion  sx={{backgroundColor:"#222222"}}>
            <AccordionSummary
            sx={{color:"#ffffff" ,flexDirection: "row-reverse","& .MuiAccordionSummary-content":{
                marginLeft: "8px",
            } }}
              expandIcon={<FaPlus className="text-white" />
            }
              aria-controls="panel3-content"
              id="panel3-header"
            >
              <p>Popüler Ürünler</p>
            </AccordionSummary>
            <AccordionDetails  sx={{color:"#ffffff"}}>
              <p>Whey Protein</p>
              <p>Cream of Rice</p>
              <p>Creatine</p>
              <p>BCAA+</p>
              <p>Pre-Workout</p>
              <p>Fitness Paketi</p>
              <p>Collagen</p>
              <p>Günlük Vitamin Paketi</p>
              <p>ZMA</p>
            </AccordionDetails>
          </Accordion>
          <div>
        <p className="text-[10px] mt-10  ">
            Copyright © - Tüm Hakları Saklıdır.
          </p>
          </div>
        </div>
       
      </div>
    </>
  );
};
