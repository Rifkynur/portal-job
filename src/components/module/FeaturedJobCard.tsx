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
    <div className="p-2 border border-gray-400 rounded-md flex flex-col gap-3">
      <div className="flex items-center gap-2">
        <img src={`/companyIcon/${image}.png`} alt="company icon" className="size-10" />
        <div className="flex flex-col gap-1">
          <h4 className="font-medium flex items-center gap-2 text-xs">
            {title} <span className="text-[8px] text-bg-blue bg-primary-400 p-1 rounded-full">{status}</span>
          </h4>
          <div className="flex text-xs items-center gap-2">
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
      <div className="flex gap-2 ms-auto">
        <div className="text-purple-600  p-2 rounded-lg transition-all duration-200 hover:text-bg-blue hover:bg-primary-100">
          <CiBookmark />
        </div>
        <Button size="sm" variant="secondary" icon={<FaArrowRight />}>
          Apply Now
        </Button>
      </div>
    </div>
  );
};

export default FeaturedJobCard;
