// components/ui/Button.tsx
import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ className, children, ...props }) => {
  return (
    <button
      className={`px-4 py-2 rounded-lg font-semibold bg-purple-600 hover:bg-purple-700 transition ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
