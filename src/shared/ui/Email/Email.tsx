import classNames from "classnames";
import { EFontSize } from "shared/types/types";
import { Text } from "../Text/Text";
import cls from "./Email.module.scss";

interface IEmailProps {
    className?: string;
}

export const Email = ({ className }: IEmailProps) => {
    return (
        <div className={classNames(cls.Email, {}, [className])}>
            <img className={cls.Email__image} src="/email.svg" alt="Иконка почты" />
            <a style={{color: 'inherit'}} href="mailto:oneclickeducationn@gmail.com&body=Привет!"><Text fontSize={EFontSize.MINILIGHTBOLDER}>oneclickeducationn@gmail.com</Text></a>
        </div>
    );
};
