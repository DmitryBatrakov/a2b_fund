import Image from "next/image";
import { Button } from "../ui/button";
import {useTranslations} from 'next-intl';

export const Hero = () => {

    const t = useTranslations('Hero');

    return (
        <section className="relative w-full overflow-hidden" style={{ height: 'calc(100vh - 3.5rem)' }}>
            <Image
                src="/assets/heroImg.jpg"
                alt="Hero background"
                fill
                priority
                className="object-cover"
            />
            {/* <div className="absolute bg-black/45 w-full h-full" /> */}
            <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/35 to-transparent" />

            <div className="absolute top-12 left-0 w-full h-full flex flex-col justify-center items-center gap-5 px-4">
                <div className="flex flex-col justify-center items-center ">
                    <h1 className="text-4xl text-center font-bold text-white">
                        A2B PRIVATE{" "}
                    </h1>
                    <h1 className="text-4xl text-center font-bold text-white">
                        EQUITY FUND
                    </h1>
                </div>
                <div className="flex flex-col justify-center items-center gap-2 w-full">
                    <h2 className="text-lg font-semibold text-[#dfd7d1] text-center">{t('h2')}</h2>
                    <h3 className="text-sm text-[#dad0c9] text-center">{t('h3')}</h3>
                </div>
                <div>
                    <Button variant="custom" className="shadow-2xl shadow-amber-50/50">{t('button')}</Button>
                </div>
                    
            </div>
        </section>
    );
};
