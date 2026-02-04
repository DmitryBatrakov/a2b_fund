import { LuBuilding2 } from "react-icons/lu";
import { HiMiniArrowTrendingUp } from "react-icons/hi2";
import { GoPeople } from "react-icons/go";
import { useTranslations } from "next-intl";
import { Card, CardContent } from "@/components/ui/card";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";

const cards = [
    {
        icon: <LuBuilding2 />,
        titleKey: "card1.title",
        descKey: "card1.description",
    },
    {
        icon: <HiMiniArrowTrendingUp />,
        titleKey: "card2.title",
        descKey: "card2.description",
    },
    {
        icon: <GoPeople />,
        titleKey: "card3.title",
        descKey: "card3.description",
    },
] as const;

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
                    }}
                    orientation="vertical"
                    className="w-full max-w-xs"
                >
                    <CarouselContent className="flex  items-center">
                        {cards.map((card, idx) => (
                            <CarouselItem key={idx} className="">
                                <Card className="w-[250px] h-[150px] ">
                                    <CardContent className="flex items-center justify-center p-2">
                                        <div className="">
                                            <div>{card.icon}</div>
                                            <div>
                                                <h3>{t(card.titleKey)}</h3>
                                                <p>{t(card.descKey)}</p>
                                            </div>
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
