import React from "react";

// images
import Comment1 from "../../assets/images/comment-1.png";
import Comment2 from "../../assets/images/comment-2.png";
import Comment3 from "../../assets/images/comment-3.png";
import CommentCard from "./CommentCard/CommentCard";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// comment data
import { commentData } from "./commentData";

const Comment = () => {
   return (
      <div className="mt-[120px]">
         <div className="max-w-[1200px] mx-auto flex items-center gap-[100px]">
            <div className="col-span-1 flex flex-col gap-4">
               <img src={Comment1} alt="" className="w-full" />
               <div className="w-full grid grid-cols-2 col-span-1 gap-4">
                  <img
                     src={Comment2}
                     alt=""
                     className="col-span-1 w-full object-cover"
                  />
                  <img
                     src={Comment3}
                     alt=""
                     className="col-span-1 w-full object-cover"
                  />
               </div>
            </div>

            <div className="">
               <h5 className="font-medium text-[22px] text-yellow">
                  Thực đơn của chúng tôi
               </h5>
               <h3 className="font-bold text-[32px] text-blackColor mt-2">
                  Thực đơn phổ biến của chúng tôi
               </h3>

               <div className="mt-8 max-w-[650px]">
                  <Swiper
                     pagination={true}
                     autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                     }}
                     loop={true}
                     modules={[Pagination]}
                     className="mySwiper">
                     {commentData.map((comment) => (
                        <SwiperSlide key={comment.id}>
                           <CommentCard comment={comment} />
                        </SwiperSlide>
                     ))}
                  </Swiper>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Comment;
