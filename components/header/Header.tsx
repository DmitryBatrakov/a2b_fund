"use client";

import { CustomDrawer } from "../drawer/Drawer";
import { LocaleSwitcher } from "../localeSwitcher/LocaleSwitcher";

export default function Header() {
    return (
        <header className="fixed top-5 left-0 z-10 flex items-center justify-between px-2 w-full">
            <CustomDrawer />
            <LocaleSwitcher />
        </header>
    );
}
