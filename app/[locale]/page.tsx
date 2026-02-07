import { InvestmentLifecycle } from "@/components/investment-lifecycle/InvestmentLifecycle";
import { Company } from "@/components/company/Company";
import { ContactForn } from "@/components/contact-form/ContactForn";
import { Footer } from "@/components/footer/Footer";
import { RiskManagement } from "@/components/risk-management/RiskManagement";
import Header from "@/components/header/Header";
import { Hero } from "@/components/hero/Hero";
import { OurPartners } from "@/components/our-partners/OurPartners";
import { OurProjects, type Project } from "@/components/our-projects/OurProjects";
import { OurTeam } from "@/components/our-team/OurTeam";
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
            <RiskManagement />
            <OurTeam />
            <ContactForn />
            <Footer />
        </div>
    );
}
