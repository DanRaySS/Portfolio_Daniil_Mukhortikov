import classNames from "classnames";
import { EFontSize } from "shared/types/types";
import { SubTitle } from "shared/ui/SubTitle/SubTitle";
import cls from "./Experience.module.scss";

interface IExperienceProps {
    className?: string;
}

export const Experience = ({ className }: IExperienceProps) => {
    return (
        <section className={classNames(cls.Experience, {}, [className])} id="experience">
            <SubTitle fontSize={EFontSize.L} className={cls.GradientTitle}>
                Опыт
            </SubTitle>
        </section>
    );
};
