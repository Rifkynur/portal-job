import Button from "@/components/base/Button";
import React from "react";
import { FaArrowRight } from "react-icons/fa";
import FeaturedJobCard from "@/components/module/FeaturedJobCard";

const FeaturedJob = () => {
  return (
    <section className="bg-primary py-10 lg:py-24">
      <div className="container">
        <div className="flex justify-between items-end">
          <h3 className="font-medium text-2xl md:text-3xl lg:text-[40px]">Featured Job</h3>
          <Button variant="secondaryOutline" icon={<FaArrowRight />} size={"sm"}>
            View All
          </Button>
        </div>
        <div className="mt-8 grid grid-cols-1 gap-4 md:gap-6">
          <FeaturedJobCard image="apple" location="Australia" salary="34K" status="Contract Base" title="Senior UI/UX" />
          <FeaturedJobCard image="upwork" location="China" salary="40K" status="Full Time" title="Senior UI/UX" />
          <FeaturedJobCard image="figma" location="Canada" salary="50K" status="Full Time" title="Senior UI/UX" />
          <FeaturedJobCard image="ulink" location="United State" salary="74K" status="Contract Base" title="Senior UI/UX" />
          <FeaturedJobCard image="facebook" location="Germany" salary="14K" status="Internship" title="Senior UI/UX" />
          <FeaturedJobCard image="google" location="France" salary="44K" status="Full Time" title="Senior UI/UX" />
        </div>
      </div>
    </section>
  );
};

export default FeaturedJob;
