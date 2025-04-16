import HeroSection from "@/components/page/HomePage/HeroSection";
import MostPopular from "@/components/page/HomePage/MostPopular";
import PopularCategory from "@/components/page/HomePage/PopularCategory";
import WorkProccess from "@/components/page/HomePage/WorkProccess";
import FeaturedJob from "@/components/page/HomePage/FeaturedJob";

export default function Home() {
  return (
    <>
      <HeroSection />
      <MostPopular />
      <WorkProccess />
      <PopularCategory />
      <FeaturedJob />
    </>
  );
}
