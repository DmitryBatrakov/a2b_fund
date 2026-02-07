"use client";

import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer";
import { useTranslations } from "next-intl";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { IoCloseSharp } from "react-icons/io5";

const ANCHOR_ITEMS = [
    { id: "company", labelKey: "nav_home" },
    { id: "projects", labelKey: "nav_our_projects" },
    { id: "services", labelKey: "nav_our_services" },
    { id: "contact", labelKey: "nav_contact_us" },
] as const;

function scrollToSection(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

export function CustomDrawer() {
    const t = useTranslations("Header");

    return (
        <Drawer direction="left">
            <DrawerTrigger asChild className="p-2 bg-[#F7F5F2] rounded-xl shadow-md">
                <HiOutlineMenuAlt2 size={45} color="#917355" className="p-2" />
            </DrawerTrigger>
            <DrawerContent>
                <DrawerHeader className="px-4 py-2 mt-4">
                    <DrawerTitle className="text-xl font-semibold">
                        {t("menu_title")}
                    </DrawerTitle>
                    <DrawerClose asChild className="p-0">
                        <button className="bg-transparent absolute top-5 right-5 p-0" aria-label="Close">
                            <IoCloseSharp size={25} color="black" />
                        </button>
                    </DrawerClose>
                </DrawerHeader>
                <nav className="px-4 py-2">
                    <ul className="flex flex-col gap-4">
                        {ANCHOR_ITEMS.map(({ id, labelKey }) => (
                            <li key={id}>
                                <DrawerClose asChild>
                                    <button
                                        type="button"
                                        className="text-left text-base font-medium text-foreground hover:text-[#917355] transition-colors w-full py-1"
                                        onClick={() => scrollToSection(id)}
                                    >
                                        {t(labelKey)}
                                    </button>
                                </DrawerClose>
                            </li>
                        ))}
                    </ul>
                </nav>
            </DrawerContent>
        </Drawer>
    );
}
