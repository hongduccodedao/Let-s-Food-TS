import React from "react";
import { BsFillCartPlusFill } from "react-icons/bs";

const ProductCard = ()=> {
   return (
      <div className="bg-backgroundColor inline-block p-4 rounded-xl text-center drop-shadow-lg">
         <img
            src="https://media.cooky.vn/recipe/g4/39614/s400x400/cooky-recipe-cover-r39614.JPG"
            alt=""
            className="w-[250px] h-[250px] rounded-md object-cover mx-auto"
         />
         <h3 className="font-medium text-[20px] text-blackColor mt-6">
            Cơm thịt rang cháy tỏi
         </h3>
         <p
            className="
                     font-medium text-[16px] text-blackColor text-opacity-70 max-w-[250px] mx-auto my-2
                  ">
            Món ăn Việt – Yêu thương quay về
         </p>
         <div className="flex items-center justify-between">
            <span className="font-medium text-orange text-lg">100.000đ</span>
            <BsFillCartPlusFill size="1.5rem" />
         </div>
      </div>
   );
};

export default ProductCard
