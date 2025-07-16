import classNames from "classnames";
import { Navigation } from "shared/ui/Navigation/Navigation";
import cls from "./Header.module.scss";

interface IHeaderProps {
  className?: string;
}

export const Header = ({ className }: IHeaderProps) => {
  return (
    <header className={classNames(cls.Header, {}, [className])}>
        <div className={cls.Header__container}>
          <div className={cls.Header__logo}>
            DanRay
          </div>
        <Navigation/>
        </div>
    </header>
  );
};
