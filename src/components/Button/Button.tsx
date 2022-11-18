import React from "react";

const Button = ({ button }: { button: buttonProps }) => {

   const { src, icon, text } = button;

   return (
      <a
         href={src}
         className="bg-yellow py-3 px-4 rounded-full inline-flex items-center justify-center gap-2 font-medium text-lg hover:duration-300 hover:bg-orange hover:ease-in-out">
         {icon}
         {text}
      </a>
   );
};

export interface buttonProps {
   src: string;
   icon: JSX.Element;
   text: string;
}

export default Button;
