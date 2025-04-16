import React from "react";
import MostPopularCard from "@/components/module/MostPopularCard";

const MostPopular = () => {
  return (
    <section className="bg-primary py-10 lg:py-24">
      <div className="container">
        <h1 className="font-medium text-2xl md:text-3xl lg:text-[40px]">Most Popular Vacancies</h1>
        <div className="grid gap-y-4 gap-x-2 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-8 lg:mt-14 md:gap-y-6 lg:gap-y-8">
          <MostPopularCard count="45,094" title="Anesthesiologists" />
          <MostPopularCard count="50,364" title="Surgeons" />
          <MostPopularCard count="4,339" title="Obstetricians-Gynecologists" />
          <MostPopularCard count="20,07" title="Orthodontists" />
          <MostPopularCard count="43,359" title="Maxillofacial Surgeons" />
          <MostPopularCard count="18,599" title="Software Developer" />
          <MostPopularCard count="28,200" title="Psychiatrists" />
          <MostPopularCard count="50,963" title="Data Scientist" />
          <MostPopularCard count="16,627" title="Financial Manager" />
          <MostPopularCard count="74,875" title="Management Analysis" />
          <MostPopularCard count="61,391" title="IT Manager" />
          <MostPopularCard count="93,046" title="Operations Research Analysis" />
        </div>
      </div>
    </section>
  );
};

export default MostPopular;
