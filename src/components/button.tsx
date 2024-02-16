import { ButtonHTMLAttributes, FC } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

const Button: FC<ButtonProps> = ({ className, children, ...props }) => {
  return (
    <button
      className={`flex justify-center content-center items-center py-2 px-4 mx-2 min-w-[100px] backdrop-blur-lg rounded-full text-neutral-100 hover:text-white hover:scale-125 transition-all ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
