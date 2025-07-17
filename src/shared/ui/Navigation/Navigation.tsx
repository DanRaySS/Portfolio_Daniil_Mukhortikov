import classNames from "classnames";
import cls from "./Navigation.module.scss";

interface INavigationProps {
  className?: string;
}

export const Navigation = ({ className }: INavigationProps) => {
  return (
    <div className={classNames(cls.Navigation, {}, [className])}>
        <ul className={cls.Navigation__list} role="list">
            <li className={cls.Navigation__item}><a className={cls.Navigation__link} href="#home">Домашняя страница</a></li>
            <li className={cls.Navigation__item}><a className={cls.Navigation__link} href="#projects">Проекты</a></li>
            <li className={cls.Navigation__item}><a className={cls.Navigation__link} href="#experience">Опыт</a></li>
            <li className={cls.Navigation__item}><a className={cls.Navigation__link} href="#contact">Контакты</a></li>
        </ul>
    </div>
  );
};
