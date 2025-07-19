import classNames from "classnames";
import { EFontSize } from "shared/types/types";
import { Avatar } from "shared/ui/Avatar/Avatar";
import { Button } from "shared/ui/Button/Button";
import { SubTitle } from "shared/ui/SubTitle/SubTitle";
import { Text } from "shared/ui/Text/Text";
import { Projects } from "widgets/Projects/Projects";
import cls from "./Main.module.scss";

interface IMainProps {
    className?: string;
}

export const Main = ({ className }: IMainProps) => {
    return (
        <main className={classNames(cls.Main, [className])} id="home">
            <Avatar className={cls.Avatar} />
            <SubTitle className={cls.GradientTitle} fontSize={EFontSize.EXTRA}>
                <strong>FullStack-разработчик</strong>,
                специализируюсь на <strong className={cls.GradientTitle__specialization}>
                    Frontend.
                </strong>
            </SubTitle>
            <Text fontSize={EFontSize.LIGHT} className={cls.SubTitle}>
                Привет! Я Даниил Мухортиков, fullstack‑разработчик с опытом более 4 лет.
                Занимаюсь разработкой удобных, масштабируемых сервисов на React, NestJS и Flutter.
            </Text>
            <div className={cls.Buttons}>
                <a href="https://t.me/danilmux" target="_blank" rel="noopener noreferrer">
                    <Button variant="fill" style={{ marginRight: '18px' }}>
                        <Text fontSize={EFontSize.SEMIBOLD}>Связаться</Text>
                    </Button>
                </a>
                <a href="https://disk.yandex.ru/i/aNeQyQwDBNjsMw">
                    <Button variant="outline">
                        <Text fontSize={EFontSize.SEMIBOLD}>Скачать резюме</Text>
                    </Button>
                </a>
            </div>
            <SubTitle className={cls.Experience} fontSize={EFontSize.SEMIBOLD} >
                Мой стек технологий
            </SubTitle>
            <ul role="list" className={cls.Stack}>
                <li className={cls.Stack__item}>
                    <img className={cls.Icon} src="/html5.svg" alt="HTML" title="HTML" />
                    <img className={cls.Icon} src="/css3.svg" alt="CSS" title="CSS" />
                    <img className={cls.Icon} src="/js.svg" alt="JavaScript" title="JavaScript" />
                    <img className={cls.Icon} src="/typescript.svg" alt="TypeScript" title="TypeScript" />
                    <img className={cls.Icon} src="/react.svg" alt="React" title="React" />
                    <img className={cls.Icon} src="/nestjs.svg" alt="NestJS" title="NestJS" />
                    <img className={cls.Icon} src="/flutter.svg" alt="Flutter" title="Flutter" />
                </li>
            </ul>
            <Projects />
        </main>
    );
};
