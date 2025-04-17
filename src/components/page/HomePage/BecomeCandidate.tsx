import React from "react";
import BecomeCandidateCard from "@/components/module/BecomeCandidateCard";

const BecomeCandidate = () => {
  return (
    <section className="container bg-primary py-10 lg:py-28 flex flex-col gap-4 items-center justify-center md:flex-row lg:gap-6">
      <BecomeCandidateCard type="Employers" />
      <BecomeCandidateCard type="Candidate" />
    </section>
  );
};

export default BecomeCandidate;
