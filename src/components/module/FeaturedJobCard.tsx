import React, { ReactNode } from "react";
import { IoLocationOutline } from "react-icons/io5";
import { FaDollarSign } from "react-icons/fa";
import { CiCalendar } from "react-icons/ci";
import Button from "../base/Button";
import { CiBookmark } from "react-icons/ci";
import { FaArrowRight } from "react-icons/fa6";

type FeaturedJobCardProps = {
  image: string;
  title: string;
  location: string;
  status: string;
  salary: string;
};

const FeaturedJobCard = ({ image, location, salary, status, title }: FeaturedJobCardProps) => {
  return (
    <div className="p-2 border border-primary-50 rounded-md flex flex-col gap-3 md:p-4 md:items-center md:flex-row lg:p-8 transition-all duration-200 group hover:shadow-card-shadow">
      <div className="flex items-center gap-2 lg:gap-5">
        <img src={`/companyIcon/${image}.png`} alt="company icon" className="size-10 md:size-14 lg:size-[68px]" />
        <div className="flex flex-col gap-1 md:gap-3 lg:gap-4">
          <h4 className="font-medium flex items-center gap-2 text-xs md:text-base lg:text-xl">
            {title} <span className="text-[8px] text-bg-blue bg-primary-400 p-1 rounded-full">{status}</span>
          </h4>
          <div className="flex text-xs text-text-secondary items-center gap-2 md:text-sm">
            <div className="flex items-center gap-1 ">
              <IoLocationOutline />
              <span>{location}</span>
            </div>
            <div className="flex items-center gap-1 ">
              <FaDollarSign />
              <span>{salary}</span>
            </div>
            <div className="flex items-center gap-1 ">
              <CiCalendar />
              <span>4 Days Remaining</span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-2 ms-auto md:items-center">
        <div className="text-purple-600  p-2 rounded-lg transition-all duration-200 hover:text-bg-blue hover:bg-primary-100 md:text-2xl lg:p-3 ">
          <CiBookmark />
        </div>
        <div>
          <Button variant="secondary" icon={<FaArrowRight />}>
            Apply Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FeaturedJobCard;
