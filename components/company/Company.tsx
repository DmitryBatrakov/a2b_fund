import { IoHammerOutline } from "react-icons/io5";
import { MdOutlineCalendarMonth } from "react-icons/md"; // 10+ лет
import { HiOutlineBuildingOffice2 } from "react-icons/hi2"; // 70+ проектов
import { BiSearchAlt } from "react-icons/bi"; // Подбор объектов
import { MdOutlineApartment } from "react-icons/md"; // Управление
import { HiOutlineShieldCheck } from "react-icons/hi2"; // Минимизация рисков
import { TbReportAnalytics } from "react-icons/tb"; // Прозрачность
import { RiHandCoinLine } from "react-icons/ri"; // Собственный капитал

import { useTranslations } from "next-intl";
import { Card, CardContent } from "@/components/ui/card";

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";

type Cards = {
    icon: React.ReactNode;
    titleKey: string;
    descKey: string;
}


const cards: Cards[] = [
    {
        icon: <MdOutlineCalendarMonth size={40} color="#917355"/>,
        titleKey: "card1.title", // 10+ лет
        descKey: "card1.description",
    },
    {
        icon: <HiOutlineBuildingOffice2 size={40} color="#917355"/>,
        titleKey: "card2.title", // 70+ проектов
        descKey: "card2.description",
    },
    {
        icon: <BiSearchAlt size={40} color="#917355"/>,
        titleKey: "card3.title", // Подбор объектов
        descKey: "card3.description",
    },
    {
        icon: <IoHammerOutline size={40} color="#917355"/>,
        titleKey: "card4.title", // Строительство
        descKey: "card4.description",
    },
    {
        icon: <MdOutlineApartment size={40} color="#917355"/>,
        titleKey: "card5.title", // Управление
        descKey: "card5.description",
    },
    {
        icon: <HiOutlineShieldCheck size={40} color="#917355"/>,
        titleKey: "card6.title", // Минимизация рисков
        descKey: "card6.description",
    },
    {
        icon: <TbReportAnalytics size={40} color="#917355"/>,
        titleKey: "card7.title", // Прозрачность
        descKey: "card7.description",
    },
    {
        icon: <RiHandCoinLine size={40} color="#917355"/>,
        titleKey: "card8.title", // Собственный капитал
        descKey: "card8.description",
    },
];

export const Company = () => {
    const t = useTranslations("Company");

    return (
        <section className="relative w-full overflow-hidden min-h-screen p-3 pt-10">
            <div className="flex flex-col gap-15 items-center justify-center">
                <div className="flex flex-col gap-4 items-center justify-center">
                    <h2 className="text-3xl font-bold">{t("titile")}</h2>
                    <p className="text-md text-center">{t("description")}</p>
                </div>
                <Carousel
                    opts={{
                        align: "start",
                        loop: false,
                    }}
                    orientation="vertical"
                    className="w-full max-w-xs h-[600px]"
                >
                    <CarouselContent className="-mt-4 h-[600px]">
                        {cards.map((card, idx) => (
                            <CarouselItem key={idx} className="pt-4 basis-1/3">
                                <Card className="w-[250px] h-[180px] px-4 py-4 w-full">
                                    <CardContent className="flex flex-col w-full h-full items-center justify-center p-0">
                                        <div className="flex flex-col items-center justify-center gap-2 text-center">
                                            <p>{card.icon}</p>
                                            <h3 className="text-lg font-bold">{t(card.titleKey)}</h3>
                                            <p className="text-md text-[#968c81]">{t(card.descKey)}</p>
                                        </div>
                                    </CardContent>
                                </Card>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
            </div>
        </section>
    );
};
