import React from "react";
import TopCompaniesCard from "@/components/module/TopCompaniesCard";

const TopCompanies = () => {
  return (
    <section className="bg-primary py-10 lg:py-24">
      <div className="container">
        <h2 className="font-medium text-2xl md:text-3xl lg:text-[40px]">Top Companies</h2>
        <div className="grid grid-cols-2 gap-2 mt-8 md:mt-12 md:grid-cols-3 lg:grid-cols-4 lg:gap-6">
          <TopCompaniesCard location="United State" title="Dribble" icon="figma" />
          <TopCompaniesCard location="Canada" title="Upwork" icon="upwork" />
          <TopCompaniesCard location="United State" title="Apple" icon="apple" />
          <TopCompaniesCard location="China" title="Ulink" icon="ulink" />
          <TopCompaniesCard location="United State" title="Facebook" icon="facebook" />
          <TopCompaniesCard location="Canada" title="Google" icon="google" />
          <TopCompaniesCard location="United State" title="Freepik" icon="freepik" />
          <TopCompaniesCard location="France" title="Slack" icon="slack" />
        </div>
      </div>
    </section>
  );
};

export default TopCompanies;
