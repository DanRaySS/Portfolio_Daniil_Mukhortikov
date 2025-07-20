import classNames from "classnames";
import { EFontSize } from "shared/types/types";
import cls from "./Text.module.scss";

interface ITextProps {
  className?: string;
  children: React.ReactNode;
  fontSize?: EFontSize;
}

export const Text = ({ className, children, fontSize }: ITextProps) => {

  if (!fontSize) {
    fontSize = EFontSize.L;
  }

  return (
    <div className={classNames(cls.Text, cls[fontSize], [className])}>
      {children}
    </div>
  );
};
