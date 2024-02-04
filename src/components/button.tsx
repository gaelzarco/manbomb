import { ButtonHTMLAttributes, FC } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

const Button: FC<ButtonProps> = ({ className, children, ...props }) => {
  return (
    <button
      className={`flex justify-center content-center items-center py-2 px-4 mx-2 w-[100px] ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
