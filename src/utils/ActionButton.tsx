import type { SectionId } from "@/types/type";
import { Link } from "react-scroll";

type Props = {
  children: React.ReactNode;
  to?: SectionId;
  variant: "link" | "button";
  className?: string;
};

const ActionButton = ({ children, to, variant, className }: Props) => {
  const baseStyle =
    "animate rounded-md cursor-pointer select-none px-6 py-2 md:px-10 whitespace-nowrap text-sm md:text-base";
  const linkStyle =
    className ||
    `${baseStyle} bg-secondary-500 hover:bg-indigo-400 hover:text-white`;
  const buttonStyle =
    className ||
    `${baseStyle}  bg-secondary-500 hover:bg-indigo-400 hover:text-white`;
  return variant === "link" && to ? (
    <Link to={to} className={linkStyle}>
      {children}
    </Link>
  ) : (
    <button className={buttonStyle}>{children}</button>
  );
};

export default ActionButton;
