import classNames from "classnames";
import { EFontSize } from "shared/types/types";
import cls from "./SubTitle.module.scss";

interface ISubTitleProps {
  className?: string;
  children: React.ReactNode;
  fontSize?: EFontSize;
}

export const SubTitle = ({ className, children, fontSize }: ISubTitleProps) => {

  if (!fontSize) {
    fontSize = EFontSize.L;
  }

  return (
    <h2 className={classNames(cls.SubTitle, cls[fontSize], [className])}>
      {children}
    </h2>
  );
};
