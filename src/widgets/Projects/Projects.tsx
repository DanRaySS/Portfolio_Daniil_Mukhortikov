import classNames from "classnames";
import { useEffect, useRef, useState } from "react";
import { EFontSize } from "shared/types/types";
import { Label } from "shared/ui/Label/Label";
import { SubTitle } from "shared/ui/SubTitle/SubTitle";
import { Text } from "shared/ui/Text/Text";
import cls from "./Projects.module.scss";

interface IProjectsProps {
    className?: string;
}

const aikidoImages = [
    "/aikido_auth.png",
    "/aikido_votes.png",
    "/aikido_create_vote.png",
    "/aikido_create_question.png",
    "/aikido_account.png",
];

export const Projects = ({ className }: IProjectsProps) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const sliderRef = useRef<HTMLLIElement>(null);

    useEffect(() => {
        if (isPaused || !isVisible || document.hidden) return;

        const interval = setInterval(() => {
            setCurrentIndex((prev) =>
                prev === aikidoImages.length - 1 ? 0 : prev + 1
            );
        }, 3000); // каждые 3 секунды

        return () => clearInterval(interval);
    }, [isPaused, isVisible]);

    useEffect(() => {
        const handleVisibilityChange = () => {
            if (document.hidden) {
                setIsPaused(true);
            } else {
                setIsPaused(false);
            }
        };
        document.addEventListener("visibilitychange", handleVisibilityChange);
        return () =>
            document.removeEventListener("visibilitychange", handleVisibilityChange);
    }, []);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    setIsVisible(entry.isIntersecting);
                });
            },
            {
                threshold: 0.1,
            }
        );

        if (sliderRef.current) {
            observer.observe(sliderRef.current);
        }

        return () => {
            if (sliderRef.current) {
                // eslint-disable-next-line react-hooks/exhaustive-deps
                observer.unobserve(sliderRef.current);
            }
        };
    }, []);

    return (
        <section className={classNames(cls.Projects, {}, [className])} id="projects">
            <SubTitle fontSize={EFontSize.L} className={cls.GradientTitle}>
                Проекты
            </SubTitle>
            <ul role="list" className={cls.ProjectsList}>
                <li className={cls.ProjectsList__item} title='Вёрстка сайта "Euclid"'>
                    <a className={cls.Link} href="https://github.com/DanRaySS/Euclid" target="_blank" rel="noopener noreferrer">
                        <img className={cls.Thumbnail} src="/euclid.png" alt="Превью вёрстки" />
                        <div className={cls.Extra}>
                            <Text className={cls.Thumbnail__span} fontSize={EFontSize.SMALL}>Ссылка на GitHub</Text>
                            <Label className={cls.Thumbnail__label} fontSize={EFontSize.LABEL}>Вёрстка сайта Euclid</Label>
                        </div>
                    </a>
                </li>
                <li className={cls.ProjectsList__item} title='Клиентская часть сервиса "Конструктор карт в indoor-навигации"'>
                    <a className={cls.Link} href="https://github.com/Eternal-Encoders/Constructor_Renderer" target="_blank" rel="noopener noreferrer">
                        <img className={cls.Thumbnail} src="/constructor_renderer.png" alt="Превью сервиса" />
                        <div className={cls.Extra}>
                            <Text className={cls.Thumbnail__span} fontSize={EFontSize.SMALL}>Ссылка на GitHub</Text>
                            <Label className={cls.Thumbnail__label} fontSize={EFontSize.LABEL}>Клиентский конструктор</Label>
                        </div>
                    </a>
                </li>
                <li className={cls.ProjectsList__item} title='Фриланс вёрстка сайта "Знак качества Premium Zirconia"'>
                    <a className={cls.Link} href="https://github.com/DanRaySS/Premium_Zirconia" target="_blank" rel="noopener noreferrer">
                        <img className={cls.Thumbnail} src="/premium_zirconia.png" alt="Превью вёрстки" />
                        <div className={cls.Extra}>
                            <Text className={cls.Thumbnail__span} fontSize={EFontSize.SMALL}>Ссылка на GitHub</Text>
                            <Label className={cls.Thumbnail__label} fontSize={EFontSize.LABEL}>Фриланс вёрстка сайта</Label>
                        </div>
                    </a>
                </li>
                <li
                    className={cls.ProjectsList__item}
                    title='Клиентский сервис "Aikido" для голосований внутри организации'
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                >
                    <a
                        className={cls.Link}
                        href="https://github.com/aikido-urfu/aikido-web-core"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <div className={cls.SliderWrapper}>
                            <div
                                className={cls.SliderTrack}
                                style={{
                                    transform: `translateX(-${currentIndex * 100}%)`,
                                }}
                            >
                                {aikidoImages.map((src, idx) => (
                                    <img
                                        key={idx}
                                        className={cls.Thumbnail}
                                        src={src}
                                        alt={`Превью сервиса ${idx}`}
                                    />
                                ))}
                            </div>
                        </div>
                        <div className={cls.Extra}>
                            <Text className={cls.Thumbnail__span} fontSize={EFontSize.SMALL}>Ссылка на GitHub</Text>
                            <Label className={cls.Thumbnail__label} fontSize={EFontSize.LABEL}>Сервис для голосований</Label>
                        </div>
                    </a>
                </li>
                <li className={cls.ProjectsList__item} title='Мобильное приложение "УрФУ Навигатор"'>
                    <a className={cls.Link} href="https://github.com/Eternal-Encoders/UrfuNavigator-mobile" target="_blank" rel="noopener noreferrer">
                        <img className={cls.Thumbnail} src="/urfu_navigator_mobile.png" alt="Лого" />
                        <div className={cls.Extra}>
                            <Text className={cls.Thumbnail__span} fontSize={EFontSize.SMALL}>Ссылка на GitHub</Text>
                            <Label className={cls.Thumbnail__label} fontSize={EFontSize.LABEL}>Моб. прил. "УрФУ Навигатор"</Label>
                        </div>
                    </a>
                </li>
                <li className={cls.ProjectsList__item} title='Серверная часть сервиса по отправке уведомлений'>
                    <a className={cls.Link} href="https://github.com/DanRaySS/Notification-Service" target="_blank" rel="noopener noreferrer">
                        <img className={cls.Thumbnail} src="/notification.png" alt="Превью " />
                        <div className={cls.Extra}>
                            <Text className={cls.Thumbnail__span} fontSize={EFontSize.SMALL}>Ссылка на GitHub</Text>
                            <Label className={cls.Thumbnail__label} fontSize={EFontSize.LABEL}>Сервис отправки уведомле...</Label>
                        </div>
                    </a>
                </li>
            </ul>
        </section>
    );
};
