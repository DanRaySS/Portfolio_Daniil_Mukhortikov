import classNames from "classnames";
import { Avatar } from "shared/ui/Avatar/Avatar";
import { Header } from "widgets/Header/Header";
import cls from "./MainPage.module.scss";

interface IMainPageProps {
  className?: string;
}

export const MainPage = ({ className }: IMainPageProps) => {
  return (
    <div className={classNames(cls.MainPage, {}, [className])}>
      <Header className={cls.Header} />
      <Avatar className={cls.Avatar} />
      <span>I do code and
        make content about it!</span>
    </div>
  );
};
