import React from "react";
import { BsFillCartPlusFill } from "react-icons/bs";

export interface ProductCardProps {
   name: string;
   description: string;
   price: number;
   image: string;
}

const ProductCard = ({ productItem } : {product:ProductCardProps})=> {
   return (
      <div className="bg-backgroundColor inline-block p-4 rounded-xl text-center drop-shadow-lg h-auto">
         <img
            src={productItem.image}
            alt=""
            className="w-[250px] h-[250px] rounded-md object-cover mx-auto"
         />
         <h3 className="font-medium text-[20px] text-blackColor mt-6">
            {productItem.name}
         </h3>
         <p
            className="
                     font-medium text-[16px] text-blackColor text-opacity-70 max-w-[250px] mx-auto my-2
                  ">
            {productItem.description}
         </p>
         <div className="flex items-center justify-between">
            <span className="font-medium text-orange text-lg">
               {productItem.price}đ
            </span>
            <BsFillCartPlusFill size="1.5rem" />
         </div>
      </div>
   );
};

export default ProductCard
