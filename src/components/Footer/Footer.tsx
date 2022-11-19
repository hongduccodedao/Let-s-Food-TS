import React from "react";
import Logo from "../Logo/Logo";

import { BsInstagram, BsTwitter } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

const Footer = () => {
   return (
      <div className="mt-[80px] bg-backgroundColor">
         <div className="max-w-[1200px] mx-auto flex justify-between py-20 border-b">
            <div className="">
               <Logo />
               <p className="font-normal text-[20px] text-blackColor text-opacity-70 mt-6">
                  Xã Quyết Thắng, TP. Thái Nguyên, Thái Nguyên
               </p>
               <div className="flex items-center gap-6 mt-8">
                  <a
                     href=""
                     className="bg-white w-[45px] h-[45px] flex items-center justify-center rounded-full social-shadow hover:social-hover hover:bg-orange hover:duration-300 hover:ease-in-out">
                     <BsInstagram />
                  </a>
                  <a
                     href=""
                     className="bg-white w-[45px] h-[45px] flex items-center justify-center rounded-full social-shadow hover:social-hover hover:bg-orange hover:duration-300 hover:ease-in-out">
                     <FaFacebookF />
                  </a>
                  <a
                     href=""
                     className="bg-white w-[45px] h-[45px] flex items-center justify-center rounded-full social-shadow hover:social-hover hover:bg-orange hover:duration-300 hover:ease-in-out">
                     <BsTwitter />
                  </a>
               </div>
            </div>
            <div className="grid grid-cols-3 gap-24">
               <div className="">
                  <h3 className="font-medium text-blackColor text-[20px]">
                     Công ty
                  </h3>
                  <div className="flex flex-col gap-4 mt-8">
                     <a
                        href=""
                        className="font-normal text-lg text-opacity-70 text-blackColor hover:text-opacity-100">
                        Về chúng tôi
                     </a>
                     <a
                        href=""
                        className="font-normal text-lg text-opacity-70 text-blackColor hover:text-opacity-100">
                        Thông tin
                     </a>
                     <a
                        href=""
                        className="font-normal text-lg text-opacity-70 text-blackColor hover:text-opacity-100">
                        Cách hoạt động
                     </a>
                  </div>
               </div>
               <div className="">
                  <h3 className="font-medium text-blackColor text-[20px]">
                     Công ty
                  </h3>
                  <div className="flex flex-col gap-4 mt-8">
                     <a
                        href=""
                        className="font-normal text-lg text-opacity-70 text-blackColor hover:text-opacity-100">
                        Về chúng tôi
                     </a>
                     <a
                        href=""
                        className="font-normal text-lg text-opacity-70 text-blackColor hover:text-opacity-100">
                        Thông tin
                     </a>
                     <a
                        href=""
                        className="font-normal text-lg text-opacity-70 text-blackColor hover:text-opacity-100">
                        Cách hoạt động
                     </a>
                  </div>
               </div>
               <div className="">
                  <h3 className="font-medium text-blackColor text-[20px]">
                     Công ty
                  </h3>
                  <div className="flex flex-col gap-4 mt-8">
                     <a
                        href=""
                        className="font-normal text-lg text-opacity-70 text-blackColor hover:text-opacity-100">
                        Về chúng tôi
                     </a>
                     <a
                        href=""
                        className="font-normal text-lg text-opacity-70 text-blackColor hover:text-opacity-100">
                        Thông tin
                     </a>
                     <a
                        href=""
                        className="font-normal text-lg text-opacity-70 text-blackColor hover:text-opacity-100">
                        Cách hoạt động
                     </a>
                  </div>
               </div>
            </div>
         </div>
         <p className="uppercase text-center py-11 text-base text-blackColor">© 2022 Let’sFood. ALL RIGHT RESERVED.</p>
      </div>
   );
};

export default Footer;
