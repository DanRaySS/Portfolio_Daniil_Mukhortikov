import classNames from "classnames";
import { Header } from "widgets/Header/Header";
import cls from "./MainPage.module.scss";

interface IMainPageProps {
  className?: string;
}

export const MainPage = ({ className }: IMainPageProps) => {
  return (
    <div className={classNames(cls.MainPage, {}, [className])}>
      <Header className={cls.Header}/>
    </div>
  );
};
