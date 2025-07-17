import classNames from "classnames";
import cls from "./Button.module.scss";

interface IButtonProps {
    className?: string;
    variant: 'fill' | 'outline';
    children: React.ReactNode;
    style?: React.CSSProperties;
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export const Button = ({ className, variant, children, style, onClick }: IButtonProps) => {

    return (
        <button 
        style={style} 
        className={classNames(cls.Button, cls[variant], [className])}
        onClick={onClick}
        >
            {children}
        </button>
    );
};
