import classNames from "classnames";
import { EFontSize } from "shared/types/types";
import { Text } from "../Text/Text";
import cls from "./Messenger.module.scss";

interface IMessengerProps {
    className?: string;
}

export const Messenger = ({ className }: IMessengerProps) => {
    return (
        <div className={classNames(cls.Messenger, {}, [className])}>
            <img className={cls.Messenger__image} src="/telegram.svg" alt="Иконка телеграмма" />
            <a style={{color: 'inherit'}} href="https://t.me/danilmux"><Text fontSize={EFontSize.MINILIGHTBOLDER}>@danilmux</Text></a>
        </div>
    );
};
