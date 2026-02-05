"use client"

import { useState, useRef } from "react";
import { useTranslations, useLocale } from "next-intl";
import { useInView } from "@/lib/use-in-view";

export const InvestmentLifecycle = () => {
    const locale = useLocale();
    const t = useTranslations("OurProjects");
    const sectionRef = useRef<HTMLElement>(null);
    const isInView = useInView(sectionRef, { once: true, amount: 0.4 });

    return (
        <section 
            ref={sectionRef} 
            key={locale}
            className="py-10 md:py-20 bg-[#F7F5F2]"
        >
            <div>
                
            </div>
        </section>
    );
};
