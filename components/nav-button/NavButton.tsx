import Link from "next/link";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

import { RxHamburgerMenu } from "react-icons/rx";

import {useTranslations} from 'next-intl';

export default function NavButton() {

    const t = useTranslations('Header');

    return (
        <NavigationMenu>
            <NavigationMenuList>
                <NavigationMenuItem>
                    <NavigationMenuTrigger className="bg-transparent">
                        <RxHamburgerMenu size={30} color="#363636" />
                    </NavigationMenuTrigger>
                    <NavigationMenuContent className="w-80 bg-whit">
                        <ul className="w-full p-2 text-[#3b2000]">
                            <ListItem href="/docs" title={t('nav_home')}>
                                {t('nav_home_description')}
                            </ListItem>
                            <ListItem
                                href="/docs/installation"
                                title={t('nav_our_projects')}
                            >
                                {t('nav_our_projects_description')}
                            </ListItem>
                            <ListItem
                                href="/docs/primitives/typography"
                                title={t('nav_our_services')}
                            >
                                {t('nav_our_services_description')}
                            </ListItem>
                            <ListItem
                                href="/docs/primitives/typography"
                                title={t('nav_contact_us')}
                            >
                                {t('nav_contact_us_description')}
                            </ListItem>
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    );
}

function ListItem({
    title,
    children,
    href,
    ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
    return (
        <li {...props}>
            <NavigationMenuLink asChild>
                <Link href={href}>
                    <div className="flex flex-col gap-1 text-sm">
                        <div className="leading-none font-medium">{title}</div>
                        <div className="text-[#7A7A7A] line-clamp-2 ml-1">
                            {children}
                        </div>
                    </div>
                </Link>
            </NavigationMenuLink>
        </li>
    );
}
