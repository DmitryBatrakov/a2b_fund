import NavButton from "../nav-button/NavButton";

export default function Header() {
    return (
        <header className="w-full shrink-0 relative z-10 bg-[#F7F5F2] h-14">
            <nav className="w-full h-full absolute top-0 left-0 flex justify-between items-center p-2">
                <div className=" flex justify-center items-center px-2">
                    <NavButton />
                </div>
                <div className="flex justify-center items-center px-2">
                    <span>logo</span>
                </div>
            </nav>
        </header>
    );
}
