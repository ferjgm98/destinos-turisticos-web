import React from "react";

export type ButtonProps = {
  label: string | React.ReactNode;
  onClick?: () => void;
  className?: string | undefined;
  disabled?: boolean;
};

export default function Button({
  label,
  onClick,
  className,
  disabled = false,
}: ButtonProps) {
  return (
    <button
      className={`bg-td-tertiary transition-all duration-300 text-white italic p-2 rounded cursor-pointer ${className} ${
        disabled ? "cursor-not-allowed opacity-65" : ""
      }`}
      disabled={disabled}
      onClick={onClick}
    >
      {label}
    </button>
  );
}
