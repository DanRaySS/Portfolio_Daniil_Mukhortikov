import classNames from "classnames";
import cls from "./Avatar.module.scss";

interface IAvatarProps {
  className?: string;
}

export const Avatar = ({ className }: IAvatarProps) => {
  return (
    <div className={classNames(cls.Avatar, {}, [className])}>
        <img className={cls.Avatar__img} src="/avatar.jpg" alt="Аватарка Мухортикова Д. А." />
    </div>
  );
};
