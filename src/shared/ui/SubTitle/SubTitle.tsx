import classNames from "classnames";
import cls from "./SubTitle.module.scss";

interface ISubTitleProps {
  className?: string;
}

export const SubTitle = ({ className }: ISubTitleProps) => {
  return (
    <h2 className={classNames(cls.SubTitle, {}, [className])}>
      Привет! Я Даниил Мухортиков, fullstack‑разработчик с опытом более 4 лет. 
      Занимаюсь разработкой удобных, масштабируемых сервисов на React, NestJS и Flutter.
    </h2>
  );
};
