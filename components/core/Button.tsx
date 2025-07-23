export type ButtonProps = {
  label: string;
  onClick?: () => void;
  className?: string | undefined;
};

export default function Button({ label, onClick, className }: ButtonProps) {
  return (
    <button
      className={`bg-[#E73D1E] text-white p-3 rounded ${className}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
}
