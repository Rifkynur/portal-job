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
        <div className="mt-8 grid grid-cols-1 gap-4">
          <FeaturedJobCard image="apple" location="Australia" salary="34K" status="Full Time" title="Senior UI/UX" />
        </div>
      </div>
    </section>
  );
};

export default FeaturedJob;
