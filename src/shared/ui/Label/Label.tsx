import classNames from "classnames";
import { EFontSize } from "shared/types/types";
import cls from "./Label.module.scss";

interface ILabelProps {
  className?: string;
  children: React.ReactNode;
  fontSize?: EFontSize;
}

export const Label = ({ className, children, fontSize }: ILabelProps) => {

  if (!fontSize) {
    fontSize = EFontSize.MAIN;
  }

  return (
    <h3 className={classNames(cls.Label, cls[fontSize], [className])}>
      {children}
    </h3>
  );
};
