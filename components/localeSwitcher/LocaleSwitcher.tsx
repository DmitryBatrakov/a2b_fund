"use client";

import { usePathname, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDownIcon } from "lucide-react";

const LOCALES = ["en", "ru", "ua", "es"] as const;

const LOCALE_LABELS: Record<string, string> = {
    en: "EN",
    ru: "RU",
    ua: "UA",
    es: "ES",
};

export function LocaleSwitcher() {
    const pathname = usePathname();
    const router = useRouter();

    const localeFromPath = pathname.match(/^\/([a-z]{2})/)?.[1] ?? "en";
    const displayLocale = LOCALES.includes(
        localeFromPath as (typeof LOCALES)[number]
    )
        ? localeFromPath
        : "en";

    const switchLocale = (newLocale: string) => {
        const newPath = pathname.replace(/^\/[a-z]{2}/, `/${newLocale}`);
        router.replace(newPath);
    };

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button
                    variant="outline"
                    className="min-w-12 gap-1 bg-[#F7F5F2] rounded-xl shadow-md border-[#917355]/20 hover:bg-[#F7F5F2]/90"
                >
                    <span>
                        {LOCALE_LABELS[displayLocale] ??
                            displayLocale.toUpperCase()}
                    </span>
                    <ChevronDownIcon className="size-4" />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start">
                {LOCALES.map((loc) => (
                    <DropdownMenuItem
                        key={loc}
                        onClick={() => switchLocale(loc)}
                        className={
                            loc === displayLocale
                                ? "bg-[#917355]/20 font-medium"
                                : ""
                        }
                    >
                        {LOCALE_LABELS[loc]}
                    </DropdownMenuItem>
                ))}
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
