import { Company } from "@/components/company/Company";
import Header from "@/components/header/Header";
import { Hero } from "@/components/hero/Hero";
import { OurSevices } from "@/components/our-services/OurSevices";
import { Spain } from "@/components/spain/Spain";
import { WhyChooseUs } from "@/components/why-choose-us/WhyChooseUs";

export default function Home() {
    return (
        <div className="flex flex-col bg-white p-0 m-0">
            <Header />
            <Hero />
            <Company />
            <Spain />
            <OurSevices />
            <WhyChooseUs />
        </div>
    );
}
