import { Button } from "@/components/ui/button";
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { IoCloseSharp } from "react-icons/io5";

export function CustomDrawer() {
    const t = useTranslations("Header");

    return (
        <Drawer direction="right">
            <DrawerTrigger asChild className="p-2 bg-[#F7F5F2] rounded-xl shadow-md">
                <HiOutlineMenuAlt2 size={45} color="#917355" className="p-2 " />
            </DrawerTrigger>
            <DrawerContent>
                <DrawerHeader className="px-4 py-2 mt-4">
                    <DrawerTitle className="text-xl font-semibold">
                        Menu
                    </DrawerTitle>
                    <DrawerClose asChild className="p-0">
                        <button className="bg-transparent absolute top-5 right-5 p-0">
                            <IoCloseSharp size={25} color="black" />
                        </button>
                    </DrawerClose>
                </DrawerHeader>
                <nav className="px-4 py-2">
                    <ul className="flex flex-col gap-4">
                        <Link href="/docs">{t("nav_home")}</Link>
                        <Link href="/docs/installation">
                            {t("nav_our_projects")}
                        </Link>
                        <Link href="/docs/primitives/typography">
                            {t("nav_our_services")}
                        </Link>
                        <Link href="/docs/primitives/typography">
                            {t("nav_contact_us")}
                        </Link>
                    </ul>
                </nav>
                <DrawerFooter>
                    <Button>Submit</Button>
                </DrawerFooter>
            </DrawerContent>
        </Drawer>
    );
}
