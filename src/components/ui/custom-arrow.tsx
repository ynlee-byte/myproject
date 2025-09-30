import React from "react";

interface CustomArrowProps {
  isOpen?: boolean;
  className?: string;
}

export const CustomArrow: React.FC<CustomArrowProps> = ({ isOpen = false, className = "" }) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : ''} ${className}`}
    >
      <path
        d="M8 12L3 6H13L8 12Z"
        fill="#ADFF00"
      />
    </svg>
  );
};
