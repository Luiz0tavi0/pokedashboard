import { ReactNode } from "react";

type FontSize = "lg" | "slg" | "md" | "sm";

export interface IFontSizeTypes {
  fontSize?: FontSize;
}

interface iBaseTitleProps extends IFontSizeTypes {
  children: ReactNode;
  className?: string;
  tag: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  fontWeight: 400 | 700;
}
const BaseTitle = ({ children, className, tag: Tag }: iBaseTitleProps) => (
  <Tag className={className}>{children}</Tag>
);

export default BaseTitle;
