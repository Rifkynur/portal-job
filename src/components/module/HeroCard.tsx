import React, { ReactNode } from "react";
type HeroCardProps = {
  count: string | number;
  title: string;
  icon: ReactNode;
};

const HeroCard = (props: HeroCardProps) => {
  return (
    <div className="bg-primary p-2 shadow-card-shadow flex items-center rounded gap-3 cursor-pointer transition-all duration-300 hover:scale-110 group lg:p-5">
      <div className="p-3 bg-primary-200 rounded text-base text-bg-blue group-hover:bg-bg-blue group-hover:text-primary transition-all duration-300 lg:text-[40px] lg:p-4">{props.icon}</div>
      <div className="flex flex-col lg:gap-2">
        <h2 className="text-sm font-medium lg:text-2xl">{props.count}</h2>
        <p className="text-xs text-text-secondary-100 lg:text-base">{props.title}</p>
      </div>
    </div>
  );
};

export default HeroCard;
