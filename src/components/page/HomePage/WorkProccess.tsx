import React from "react";
import WorkproccessCard from "@/components/module/WorkproccessCard";
import { PiUserPlusLight, PiCloudArrowUp } from "react-icons/pi";
import { FaSearchPlus } from "react-icons/fa";
import { MdOutlineVerified } from "react-icons/md";

const WorkProccess = () => {
  return (
    <section className="bg-primary-100 py-10 lg:py-24">
      <div className="container">
        <h1></h1>
        <div className="relative grid grid-cols-2 gap-y-4 gap-x-2 lg:grid-cols-4">
          <img src="/ArrowsUp.png" alt="arrow" className="absolute object-cover w-28 translate-x-[-50%] left-1/2 md:w-56 md:-top-3 lg:top-4 lg:left-52 lg:translate-x-0 lg:w-[215.75px]" />
          <img src="/ArrowsUp.png" alt="arrow" className="hidden w-[215.75px] object-cover absolute right-52 top-4 lg:block" />
          <img src="/ArrowsDown.png" alt="arrow" className="absolute object-cover w-28 translate-x-[-50%] left-1/2 bottom-24 md:w-56 md:bottom-16 lg:w-[215.75px] lg:top-16" />
          <WorkproccessCard title="Create account" desc="Aliquam facilisis egestas sapien, nec tempor leo tristique at." icon={<PiUserPlusLight />} />
          <WorkproccessCard title="Upload CV/Resume" desc="Curabitur sit amet maximus ligula. Nam a nulla ante. Nam sodales" icon={<PiCloudArrowUp />} />
          <WorkproccessCard title="Find suitable job" desc="Phasellus quis eleifend ex. Morbi nec fringilla nibh." icon={<FaSearchPlus />} />
          <WorkproccessCard title="Apply job" desc="Curabitur sit amet maximus ligula. Nam a nulla ante, Nam sodales purus." icon={<MdOutlineVerified />} />
        </div>
      </div>
    </section>
  );
};

export default WorkProccess;
