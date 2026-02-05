import { InvestmentLifecycle } from "@/components/InvestmentLifecycle/InvestmentLifecycle";
import { Company } from "@/components/company/Company";
import Header from "@/components/header/Header";
import { Hero } from "@/components/hero/Hero";
import { OurPartners } from "@/components/our-partners/OurPartners";
import { OurProjects, type Project } from "@/components/our-projects/OurProjects";
import { OurSevices } from "@/components/our-services/OurSevices";
import { Spain } from "@/components/spain/Spain";
import { WhyChooseUs } from "@/components/why-choose-us/WhyChooseUs";

export default function Home() {
    // TODO: загружать проекты из БД и передавать в OurProjects
    const projects: Project[] = [];

    return (
        <div className="flex flex-col bg-white p-0 m-0">
            <Header />
            <Hero />
            <Company />
            <Spain />
            <OurSevices />
            <WhyChooseUs />
            <OurProjects projects={projects} />
            <OurPartners />
            <InvestmentLifecycle />
        </div>
    );
}
