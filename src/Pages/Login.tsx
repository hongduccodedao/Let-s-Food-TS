import React from "react";

const Login = () => {
   return (
      <div className="bg-orange w-screen h-screen flex items-center justify-center">
         <div className="bg-white py-5 px-3 w-[500px] rounded-2xl">
            <header className="">
               <p className="">Chào mừng bạn đến với Let's Food</p>
               <h2 className="">Đăng nhập</h2>
            </header>
            <form action="" className="">
               <div className="">
                  <label htmlFor="" className="text-base font-medium text-blackColor text-opacity-60">
                     Tên đăng nhập
                  </label>
                  <input type="text" className="w-full h-[50px] bg-colorInput border border-colorInput rounded-xl px-[20px] my-[10px] outline-none" placeholder="Nhập tên đăng nhập của bạn"/>
               </div>
               <div className="">
                  <label htmlFor="" className="text-base font-medium text-blackColor text-opacity-60">
                     Mật khẩu
                  </label>
                  <input type="text" className="w-full h-[50px] bg-colorInput border border-colorInput rounded-xl px-[20px] my-[10px] outline-none" placeholder="Nhập mật khẩu của bạn"/>
               </div>
               <a href="" className="text-orange ml-auto w-full">
                  Quên mật khẩu
               </a>
               <button className="w-full bg-orange text-white h-[50px] rounded-[10px] font-semibold mt-5">
                  Đăng nhập
               </button>
            </form>
            <div className="relative after:absolute after:w-full after:h-[1px] after:bg-[#ADADAD] after:top-[50%] after:left-0">
               <p className="text-blackColor text-opacity-70 text-center my-5 bg-white z-[1] relative px-2">
                  Hoặc
               </p>
            </div>
         </div>
      </div>
   );
};

export default Login;
