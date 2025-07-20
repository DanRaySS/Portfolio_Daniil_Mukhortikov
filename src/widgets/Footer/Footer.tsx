import classNames from "classnames";
import { EFontSize } from "shared/types/types";
import { Email } from "shared/ui/Email/Email";
import { Messenger } from "shared/ui/Messenger/Messenger";
import { SubTitle } from "shared/ui/SubTitle/SubTitle";
import { Text } from "shared/ui/Text/Text";
import cls from "./Footer.module.scss";

interface IFooterProps {
  className?: string;
}

export const Footer = ({ className }: IFooterProps) => {
  return (
    <footer className={classNames(cls.Footer, {}, [className])} id="contacts">
      <div className={cls.Footer__container}>
        <SubTitle fontSize={EFontSize.BOLD} className={cls.Footer__title}>
          Контакты
        </SubTitle>
        <Text fontSize={EFontSize.MINILIGHT} className={cls.Footer__span}>
          Fullstack‑разработчик с 4-летним&nbsp;опытом в&nbsp;создании надёжных и масштабируемых веб и мобильных приложений. Уверенно работаю как с фронтендом (React,&nbsp;TypeScript), так и с бэкендом (Node.js,&nbsp;NestJS, PostgreSQL), а также развиваюсь в мобильной разработке на&nbsp;Flutter.
        </Text>
        <ul role="list" className={cls.CommunicationList}>
          <li><Email className={cls.Email} /></li>
          <li><Messenger className={cls.Messenger} /></li>
        </ul>
        <ul role="list" className={cls.SocialList}>
          <li className={cls.SocialList__item}>
            <a
              className={cls.SocialList__link}
              href="https://github.com/DanRaySS"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className={cls.SocialList__image} src="/github_white.svg" alt="Иконка GitHub" />
            </a>
          </li>
          <li className={cls.SocialList__item}>
            <a
              className={cls.SocialList__link}
              href="https://www.rustore.ru/catalog/developer/ge1mjz"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className={cls.SocialList__image} src="/rustore.svg" alt="Иконка RuStore" />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};
