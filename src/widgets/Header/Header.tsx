import classNames from "classnames";
import { useCallback, useState } from "react";
import { EFontSize } from "shared/types/types";
import { Navigation } from "shared/ui/Navigation/Navigation";
import { SubTitle } from "shared/ui/SubTitle/SubTitle";
import cls from "./Header.module.scss";

interface IHeaderProps {
  className?: string;
}

export const Header = ({ className }: IHeaderProps) => {
  const [isBurgerActive, setIsBurgerActive] = useState(false);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onBurgerClicked = useCallback((e: any) => {
    setIsBurgerActive(!isBurgerActive);
  }, [isBurgerActive, setIsBurgerActive]);

  return (
    <header className={classNames(cls.Header, {}, [className])}>
      <div className={cls.Header__container}>
        <div className={cls.Header__logo}>
          {/* <SubTitle fontSize={EFontSize.BOLD}>DanRay</SubTitle> */}
          {/* <img className={cls.Logo} src="/logo.svg" alt="Лого DanRay" /> */}
          DanRay
        </div>
        <Navigation onBurgerClicked={onBurgerClicked} isBurgerActive={isBurgerActive} />
      </div>
      <div className={classNames(
        cls.Header__mobileNav,
        isBurgerActive
          ? cls['Header__mobileNav_active']
          : undefined)}
      >
        <ul className={cls.NavigationMobile__list} role="list">
          <li className={cls.NavigationMobile__item}>
            <a className={cls.NavigationMobile__link} href="#home">
              <SubTitle fontSize={EFontSize.MINILIGHTBOLDER} className={cls.NavigationMobile__text}>Главная</SubTitle>
            </a>
          </li>
          <li className={cls.NavigationMobile__item}>
            <a className={cls.NavigationMobile__link} href="#projects">
              <SubTitle fontSize={EFontSize.MINILIGHTBOLDER} className={cls.NavigationMobile__text}>Проекты</SubTitle>
            </a>
          </li>
          {/* <li className={cls.NavigationMobile__item}><a className={cls.NavigationMobile__link} href="#experience">Опыт</a></li> */}
          <li className={cls.NavigationMobile__item}>
            <a className={cls.NavigationMobile__link} href="#contacts">
              <SubTitle fontSize={EFontSize.MINILIGHTBOLDER} className={cls.NavigationMobile__text}>Контакты</SubTitle>
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};
