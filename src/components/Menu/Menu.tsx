import React from "react";

import { Routes, Route, useParams, useNavigate } from "react-router-dom";
// swr
import useSWR from "swr";
import { fetcher } from "../../apiConfig/config";

import { BsFillCartPlusFill } from "react-icons/bs";
import ProductCard from "../ProductCard/ProductCard";

const Menu = () => {
   const { data, error } = useSWR("http://localhost:3000/product/get", fetcher);

   // console.log(data);

   return (
      <div id="activity" className="">
         <div className="max-w-[1200px] mx-auto mt-[80px]">
            <div className="text-center">
               <h5 className="font-medium text-[22px] text-yellow">
                  Thực đơn của chúng tôi
               </h5>
               <h3 className="font-bold text-[32px] text-blackColor mt-2">
                  Thực đơn phổ biến của chúng tôi
               </h3>
               <p className="font-medium text-[22px] text-blackColor text-opacity-70 max-w-[650px] mx-auto mt-6">
                  Nhà hàng chúng tôi có thể làm theo nhu cầu mà khách đặt
               </p>
            </div>

            <div className="mt-[60px] grid grid-cols-4 gap-3">
               {/* productCard */}
               <ProductCard />
               <ProductCard />
               <ProductCard />
               <ProductCard />
               <ProductCard />
            </div>
         </div>
      </div>
   );
};

export default Menu;
