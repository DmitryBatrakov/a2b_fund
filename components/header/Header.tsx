"use client";

import { CustomDrawer } from "../drawer/Drawer";

export default function Header() {
    return (
        <header className="fixed top-5 left-5  z-10">
            <CustomDrawer />
        </header>
    );
}
