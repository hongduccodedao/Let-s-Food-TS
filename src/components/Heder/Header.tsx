import React from "react";
import Button from "../Button/Button";
import { BsCartFill } from "react-icons/bs";
import Food from "../../assets/images/food-1.png"
import Rectangle from "../../assets/images/rectangle-1.png"

const Header = () => {
   return (
      <div className="bg-backgroundColor pt-[108px] relative">
         <div className="max-w-[1200px] mx-auto flex items-center justify-between">
            <div className="">
               <h1 className="font-semibold text-5xl text-blackColor leading-[1.4]">
                  Giao đồ ăn của bạn{" "}
                  <span className="text-orange block">nhanh nhất</span>
               </h1>
               <p className=" mt-3 text-blackColor text-opacity-70 font-normal text-lg max-w-[480px] mb-9">
                  Chúng tôi sẽ giao đồ ăn của bạn nhanh nhất có thể với những
                  món ăn ngon và đầy đủ dinh dưỡng.
               </p>
               <Button button={{
                  src: "#",
                  icon: <BsCartFill />,
                  text: "Đặt hàng ngay",
               }} />
            </div>
            <div className="">
               <img src={Food} alt="food" className="" />
            </div>
         </div>
         <div className="absolution left-0 bottom-9">
            <img src={Rectangle} alt="rectangle" className="" />
            <img src={Rectangle} alt="rectangle" className="" />
         </div>
      </div>
   );
};

export default Header;
