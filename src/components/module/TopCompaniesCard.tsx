import React from "react";
import { IoLocationOutline } from "react-icons/io5";
import Button from "../base/Button";

type TopCompaniesCardProps = {
  icon: string;
  title: string;
  location: string;
};

const TopCompaniesCard = ({ icon, title, location }: TopCompaniesCardProps) => {
  return (
    <div className="border border-primary-50 rounded-md p-2 flex flex-col gap-2 transition-all duration-200 hover:shadow-card-shadow lg:p-8 lg:gap-8">
      <div className="flex items-center gap-2">
        <div className="size-12 lg:size-14">
          <img src={`/companyIcon/${icon}.png`} alt="company icon" />
        </div>
        <div className="flex flex-col gap-2">
          <h4 className="font-medium text-sm lg:text-lg">{title} </h4>
          <div className="flex text-xs gap-1 text-text-secondary-100 lg:text-sm">
            <IoLocationOutline />
            <p>{location}</p>
          </div>
        </div>
      </div>
      <div>
        <Button variant="secondary" size="full" className="text-sm">
          Open Position
        </Button>
      </div>
    </div>
  );
};

export default TopCompaniesCard;
