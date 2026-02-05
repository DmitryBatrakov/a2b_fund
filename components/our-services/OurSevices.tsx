import { useTranslations } from "next-intl";
import { Search, Scale, Languages, Building2 } from "lucide-react";

const services = [
    { key: "selection", icon: Search },
    { key: "legal", icon: Scale },
    { key: "translation", icon: Languages },
    { key: "management", icon: Building2 },
] as const;

export const OurSevices = () => {
    const t = useTranslations("OurServices");

    return (
        <section className="py-10 md:py-20 min-h-screen md:min-h-0 ">
            <div className="container mx-auto px-4">
                <h2 className="font-heading text-4xl md:text-5xl font-semibold text-[#917355] text-center mb-16">
                    {t("title")}
                </h2>

                <div className="grid md:grid-cols-2 gap-6">
                    {services.map(({ key, icon: Icon }) => (
                        <div
                            key={key}
                            className="rounded-xl p-6 shadow-sm border border-[#91735556]"
                        >
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                                    <Icon
                                        className="w-5 h-5 text-primary"
                                        color="#917355"
                                    />
                                </div>
                                <h3 className="font-heading text-xl font-semibold text-foreground">
                                    {t(`${key}.title`)}
                                </h3>
                            </div>
                            <p className="text-[#968c81]">
                                {t(`${key}.description`)}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
