import React, { ReactNode } from "react";

type PopularCategoryCardPops = {
  icon: ReactNode;
  title: string;
  count: number;
};
const PopularCategoryCard = ({ icon, title, count }: PopularCategoryCardPops) => {
  return (
    <div className="flex items-center gap-2 p-1 rounded-md group transition-all duration-200 hover:shadow-card-shadow md:px-2 lg:p-6 lg:gap-4">
      <div className="rounded bg-primary-400 p-[10px] text-bg-blue transition-all duration-200 group-hover:bg-bg-blue group-hover:text-primary md:p-4 md:text-lg lg:p-4 lg:text-[32px]">{icon}</div>
      <div className="flex flex-col gap-1 md:gap-2 ">
        <h3 className="text-xs font-medium md:text-sm lg:text-lg group-hover:text-bg-blue">{title}</h3>
        <p className="text-text-secondary text-[10px] md:text-xs lg:text-sm">{count} Open Position</p>
      </div>
    </div>
  );
};

export default PopularCategoryCard;
