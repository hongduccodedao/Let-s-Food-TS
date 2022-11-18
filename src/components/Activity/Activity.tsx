import React from "react";

// images
import Activity1 from "../../assets/images/activity-1.png";
import Activity2 from "../../assets/images/activity-2.png";
import Activity3 from "../../assets/images/activity-3.png";

const Activity = () => {
   return (
      <div id="activity" className="">
         <div className="max-w-[1200px] mx-auto mt-[80px]">
            <div className="text-center">
               <h5 className="font-medium text-[22px] text-yellow">
                  Phương thức hoạt động
               </h5>
               <h3 className="font-bold text-[32px] text-blackColor mt-2">
                  Những gì chúng tôi phục vụ
               </h3>
               <p className="font-medium text-[22px] text-blackColor text-opacity-70 max-w-[650px] mx-auto mt-6">
                  Chất lượng sản phẩm là ưu tiên của chúng tôi và luôn đảm bảo
                  an toàn cho đến khi nó nằm trong tay bạn.
               </p>
            </div>
            <ul className="grid grid-cols-3 mt-8">
               <li className="text-center mx-auto">
                  <img src={Activity1} alt="" className="mx-auto" />
                  <h4 className="mt-6 font-semibold text-[28px] text-blackColor">
                     Dễ dàng đặt hàng
                  </h4>
                  <p className="mt-4 font-medium text-[20px] text-opacity-70 text-blackColor max-w-[234px] mx-auto">
                     Bạn chỉ có thể đặt hàng thông qua ứng dụng
                  </p>
               </li>
               <li className="text-center mx-auto">
                  <img src={Activity2} alt="" className="mx-auto" />
                  <h4 className="mt-6 font-semibold text-[28px] text-blackColor">
                     Giao hàng nhanh chóng
                  </h4>
                  <p className="mt-4 font-medium text-[20px] text-opacity-70 text-blackColor max-w-[234px] mx-auto">
                     Giao hàng đúng thời gian và đúng địa chỉ
                  </p>
               </li>
               <li className="text-center mx-auto">
                  <img src={Activity3} alt="" className="mx-auto" />
                  <h4 className="mt-6 font-semibold text-[28px] text-blackColor">
                     Dịch vụ tốt nhất
                  </h4>
                  <p className="mt-4 font-medium text-[20px] text-opacity-70 text-blackColor max-w-[234px] mx-auto">
                     Chất lượng đồ ăn tốt nhất
                  </p>
               </li>
            </ul>
         </div>
      </div>
   );
};

export default Activity;
