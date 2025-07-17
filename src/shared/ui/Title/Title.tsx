import classNames from "classnames";
import cls from "./Title.module.scss";

interface ITitleProps {
  className?: string;
}

export const Title = ({ className }: ITitleProps) => {
  return (
    <h2 className={classNames(cls.Title, {}, [className])}>
      <strong>FullStack-разработчик</strong>, специализируюсь на <strong className={cls.Title__specialization}>Frontend.</strong>
    </h2>
  );
};
