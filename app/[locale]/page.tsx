import { Company } from "@/components/company/Company";
import Header from "@/components/header/Header";
import { Hero } from "@/components/hero/Hero";

export default function Home() {
    return (
        <div className="flex flex-col bg-[#F7F5F2] p-0 m-0">
            <Header />
            <Hero />
            <Company />
        </div>
    );
}
