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
            <SubTitle className={classNames(cls.Main__title, cls.GradientTitle)} fontSize={EFontSize.EXTRA}>
                <strong style={{whiteSpace: 'nowrap'}}>FullStack-разработчик</strong>,
                специализируюсь на <strong className={cls.GradientTitle__specialization}>
                    Frontend.
                </strong>
            </SubTitle>
            <Text fontSize={EFontSize.LIGHT} className={cls.SubTitle}>
                Привет! Я Даниил Мухортиков, fullstack‑разработчик с опытом более 4&nbsp;лет.
                Занимаюсь разработкой удобных, масштабируемых сервисов на React, NestJS&nbsp;и&nbsp;Flutter.
            </Text>
            <div className={cls.Buttons}>
                <a href="https://t.me/danilmux" target="_blank" rel="noopener noreferrer" style={{display: 'block', marginRight: '18px'}}>
                    <Button variant="fill" className={cls.Buttons__item}>
                        <Text fontSize={EFontSize.SEMIBOLD} className={cls.Buttons__text}>Связаться</Text>
                    </Button>
                </a>
                <a href="https://disk.yandex.ru/i/aNeQyQwDBNjsMw" target="_blank" rel="noopener noreferrer" style={{display: 'block'}}>
                    <Button variant="outline" className={cls.Buttons__item}>
                        <Text fontSize={EFontSize.SEMIBOLD} className={cls.Buttons__text}>Скачать&nbsp;резюме</Text>
                    </Button>
                </a>
            </div>
            <SubTitle className={cls.Experience} fontSize={EFontSize.SEMIBOLD} >
                Мой стек технологий
            </SubTitle>
            <ul role="list" className={cls.Stack}>
                <li className={cls.Stack__item}>
                    <img className={cls.Icon} src="/html5.svg" alt="Иконка HTML" title="HTML" />
                </li>
                <li className={cls.Stack__item}>
                    <img className={cls.Icon} src="/css3.svg" alt="Иконка CSS" title="CSS" />
                </li>
                <li className={cls.Stack__item}>
                    <img className={cls.Icon} src="/js.svg" alt="Иконка JavaScript" title="JavaScript" />
                </li>
                <li className={cls.Stack__item}>
                    <img className={cls.Icon} src="/typescript.svg" alt="Иконка TypeScript" title="TypeScript" />
                </li>
                <li className={cls.Stack__item}>
                    <img className={cls.Icon} src="/react.svg" alt="Иконка React" title="React" />
                </li>
                <li className={cls.Stack__item}>
                    <img className={cls.Icon} src="/nestjs.svg" alt="Иконка NestJS" title="NestJS" />
                </li>
                <li className={cls.Stack__item}>
                    <img className={cls.Icon} src="/flutter.svg" alt="Иконка Flutter" title="Flutter" />
                </li>
            </ul>
            <Projects className={cls.Projects} />
            {/* <Experience className={cls.Experience}/> */}
        </main>
    );
};
