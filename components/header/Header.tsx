import NavButton from "../nav-button/NavButton";

export default function Header() {
    return (
        <header className="w-full shrink-0 relative z-10">
            <nav className="w-full absolute top-0 left-0">
                <div className=" bg-[#F7F5F2] flex justify-between items-center p-3">
                    <div className="mt-2 flex justify-center items-center">
                        <NavButton />
                    </div>
                    <div className="flex justify-center items-center">
                        <span>logo</span>
                    </div>
                </div>
            </nav>
        </header>
    );
}
