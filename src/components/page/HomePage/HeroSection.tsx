import React from "react";
import Button from "@/components/base/Button";
import { CiSearch, CiLocationOn } from "react-icons/ci";
import HeroCard from "@/components/module/HeroCard";
import { LuBriefcaseBusiness, LuUsersRound } from "react-icons/lu";
import { BiBuildings } from "react-icons/bi";

const HeroSection = () => {
  return (
    <section className="bg-primary-100 py-10 lg:py-28">
      <div className="container flex flex-col-reverse gap-2 md:flex-row md:items-center lg:justify-between">
        <div className="max-w-[628px] flex flex-col gap-3 lg:gap-6">
          <h1 className="font-bold text-2xl lg:text-6xl lg:leading-14">Find a job that suits your interest & skills.</h1>
          <p className="max-w-[536px] text-sm text-text-secondary text-shadow-lg/20 text-shadow-black lg:text-lg lg:leading-7">
            Aliquam vitae turpis in diam convallis finibus in at risus. Nullam in scelerisque leo, eget sollicitudin velit bestibulum.
          </p>
          <div className="bg-primary shadow-md flex items-center rounded p-2 text-[10px] justify-center lg:px-6 lg:py-3 lg:text-base lg:justify-between">
            <div className="flex items-center gap-1 text-text-secondary lg:gap-3 lg:py-4 ">
              <CiSearch className="text-bg-blue" />
              <input type="text" name="" id="" placeholder="Job,Title, Keyword..." className="focus:border-none focus:outline-none" />
            </div>
            <div className="flex items-center gap-1 text-text-secondary lg:gap-3 lg:py-4 ">
              <CiLocationOn className="text-bg-blue" />
              <input type="text" placeholder="Your Location" className="focus:border-none focus:outline-none" />
            </div>
            <Button variant="primary" size="md">
              Find Job
            </Button>
          </div>
          <p className=" text-[10px] lg:text-[14px] font-medium">
            <span className="text-text-secondary">Suggestion:</span> Designer, Programing, <span className="text-bg-blue">Digital Marketing, </span>Video, Animation.
          </p>
        </div>
        <div className="max-w-[492]">
          <img src="/Illustration.png" alt="hero" className="w-full object-cover" />
        </div>
      </div>
      <div className="mt-8 container grid grid-cols-2 md:grid-cols-4 gap-2 lg:gap-6 lg:mt-28 ">
        <HeroCard title="Live Job" count={"1,75,325"} icon={<LuBriefcaseBusiness />} />
        <HeroCard title="Companies" count={"97,354"} icon={<BiBuildings />} />
        <HeroCard title="Candidates" count={"38,47,154"} icon={<LuUsersRound />} />
        <HeroCard title="New Jobs" count={"7,532"} icon={<LuBriefcaseBusiness />} />
      </div>
    </section>
  );
};

export default HeroSection;
