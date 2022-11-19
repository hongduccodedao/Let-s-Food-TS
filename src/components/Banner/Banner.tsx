import React from "react";

import bannerImage from "../../assets/images/banner.png";
import Button from "../Button/Button";

import { AiOutlineUsergroupAdd } from "react-icons/ai";

const Banner = () => {
   return (
      <div className="mt-[80px] max-w-[1200px] mx-auto relative">
         <img src={bannerImage} alt="banner" className="w-full object-cover" />
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
            <h3 className="text-white font-bold text-[32px] mb-7">
               Trở thành thành viên của chúng tôi để nhận được ưu đãi đến 50%
            </h3>
            <Button button={{ src: '#', icon: <AiOutlineUsergroupAdd /> , text: 'Tham gia' }} />
         </div>
      </div>
   );
};

export default Banner;
