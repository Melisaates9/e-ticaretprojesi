import React from "react";

import Logo from "../assets/img/LOGO_beyaz.png"
export const Footer = () => {
  return (
    <>

      <div className="bg-[#222222] w-full text-[#999999] gap-3 flex flex-col pl-3 ">
      <div className=" w-45 sm:w-32  ">
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
    </>
  );
};
