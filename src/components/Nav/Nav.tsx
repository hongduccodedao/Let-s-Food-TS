import React from "react";
import Button from "../Button/Button";

import { FaSignOutAlt } from "react-icons/fa";
import Logo from "../Logo/Logo";

const navMenu = [
   {
      name: "Trang chủ",
      link: "/",
   },
   {
      name: "Thực đơn",
      link: "#menu",
   },
   {
      name: "Hoạt động",
      link: "#activity",
   },
   {
      name: "Về chúng tôi",
      link: "/about",
   },
   {
      name: "Liên hệ",
      link: "/contact",
   },
];

const Nav = () => {
   window.addEventListener("scroll", () => {
      const nav = document.querySelector("nav");

      if (window.scrollY > 0) {
         nav?.classList.add("header-scroll");
      } else {
         nav?.classList.remove("header-scroll");
      }
   });

   return (
      <nav className="bg-backgroundColor fixed z-10 w-full">
         {/* logo link home */}
         <div className="max-w-[1200px] h-[108px] mx-auto flex items-center justify-between">
            <Logo />

            <ul className="flex items-center gap-6">
               {navMenu.map((item, index) => (
                  <li key={index}>
                     <a
                        href={item.link}
                        className="relative font-medium text-[22px] text-blackColor text-opacity-80 after:absolute after:w-0 after:h-1 after:rounded after:bg-orange after:bottom-[-5px] after:left-0 hover:after:duration-300 hover:after:ease-in-out hover:after:w-full hover:text-opacity-100">
                        {item.name}
                     </a>
                  </li>
               ))}
            </ul>

            <Button
               button={{ src: "#", icon: <FaSignOutAlt />, text: "Đăng nhập" }}
            />
         </div>
      </nav>
   );
};

export default Nav;
