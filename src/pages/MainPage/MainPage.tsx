import classNames from "classnames";
import { Footer } from "widgets/Footer/Footer";
import { Header } from "widgets/Header/Header";
import { Main } from "widgets/Main/Main";
import cls from "./MainPage.module.scss";

interface IMainPageProps {
  className?: string;
}

export const MainPage = ({ className }: IMainPageProps) => {
  return (
    <div className={classNames(cls.MainPage, {}, [className])}>
      <h1 style={{ position: 'absolute', left: '-99999px' }}>Мухортиков Даниил Александрович - FullStack-разработчик, специализируюсь на Frontend.</h1>
      <Header className={cls.Header} />
      <Main className={cls.Container} />
      <Footer className={cls.Footer} />
    </div>
  );
};
