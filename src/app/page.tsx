import HeroSection from "@/components/page/HomePage/HeroSection";
import MostPopular from "@/components/page/HomePage/MostPopular";
import PopularCategory from "@/components/page/HomePage/PopularCategory";
import WorkProccess from "@/components/page/HomePage/WorkProccess";
import FeaturedJob from "@/components/page/HomePage/FeaturedJob";
import TopCompanies from "@/components/page/HomePage/TopCompanies";
import ClientTestimonial from "@/components/page/HomePage/ClientTestimonial";
import BecomeCandidate from "@/components/page/HomePage/BecomeCandidate";

export default function Home() {
  return (
    <>
      <HeroSection />
      <MostPopular />
      <WorkProccess />
      <PopularCategory />
      <FeaturedJob />
      <TopCompanies />
      <ClientTestimonial />
      <BecomeCandidate />
    </>
  );
}
