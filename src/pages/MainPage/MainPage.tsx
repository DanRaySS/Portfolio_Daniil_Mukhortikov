import classNames from "classnames";
import { Avatar } from "shared/ui/Avatar/Avatar";
import { Button } from "shared/ui/Button/Button";
import { SubTitle } from "shared/ui/SubTitle/SubTitle";
import { Title } from "shared/ui/Title/Title";
import { Header } from "widgets/Header/Header";
import cls from "./MainPage.module.scss";

interface IMainPageProps {
  className?: string;
}

export const MainPage = ({ className }: IMainPageProps) => {
  return (
    <div className={classNames(cls.MainPage, {}, [className])}>
      <h1 style={{ position: 'absolute', left: '-99999px' }}>Мухортиков Даниил Александрович - FullStack-разработчик, специализируюсь на Frontend.</h1>
      <Header className={cls.Header} />
      <main className={cls.Container} id="home">
        <Avatar className={cls.Avatar} />
        <Title className={cls.Title} />
        <SubTitle className={cls.SubTitle} />
        <div style={{ display: 'flex', marginBottom: '88px' }}>
          <a href="https://t.me/danilmux" target="_blank" rel="noopener noreferrer">
            <Button variant="fill" style={{ marginRight: '18px' }}>Связаться</Button>
          </a>
          <Button variant="outline">Скачать резюме</Button>
        </div>
      </main>
    </div>
  );
};
