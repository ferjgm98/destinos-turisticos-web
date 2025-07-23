export type ButtonProps = {
  label: string;
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
      className={`bg-[#E73D1E] text-white italic p-2 rounded ${className} ${
        disabled ? "cursor-not-allowed opacity-65" : ""
      }`}
      disabled={disabled}
      onClick={onClick}
    >
      {label}
    </button>
  );
}
