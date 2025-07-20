import classNames from "classnames";
import { EFontSize } from "shared/types/types";
import { SubTitle } from "../SubTitle/SubTitle";
import cls from "./Navigation.module.scss";

interface INavigationProps {
  className?: string;
  // eslint-disable-next-line
  onBurgerClicked: (e: any) => void;
  isBurgerActive: boolean;
}

export const Navigation = ({ className, isBurgerActive, onBurgerClicked }: INavigationProps) => {
  return (
    <div className={classNames(cls.Navigation, {}, [className])}>
      <ul className={cls.Navigation__list} role="list">
        <li className={cls.Navigation__item}>
          <a className={cls.Navigation__link} href="#home">
            <SubTitle fontSize={EFontSize.MAIN} className={cls.Navigation__text}>Главная</SubTitle>
          </a>
        </li>
        <li className={cls.Navigation__item}>
          <a className={cls.Navigation__link} href="#projects">
            <SubTitle fontSize={EFontSize.MAIN} className={cls.Navigation__text}>Проекты</SubTitle>
          </a>
        </li>
        {/* <li className={cls.Navigation__item}><a className={cls.Navigation__link} href="#experience">Опыт</a></li> */}
        <li className={cls.Navigation__item}>
          <a className={cls.Navigation__link} href="#contacts">
            <SubTitle fontSize={EFontSize.MAIN} className={cls.Navigation__text}>Контакты</SubTitle>
          </a>
        </li>
      </ul>
      <div className={cls.Burger} onClick={onBurgerClicked}>
        <button className={cls.Burger__button}>
          <div className={classNames(cls.Burger__icon, isBurgerActive ? cls.Burger__active : undefined)}></div>
        </button>
      </div>
    </div>
  );
};