import React, { ReactNode } from "react";

type WorkProccessProps = {
  icon: ReactNode;
  title: string;
  desc: string;
};

const WorkproccessCard = ({ icon, title, desc }: WorkProccessProps) => {
  return (
    <div className="group flex flex-col justify-between items-center gap-2 rounded-md p-2 transition-all duration-200 hover:bg-primary lg:gap-6 lg:p-6">
      <div className="p-4 rounded-full bg-primary text-bg-blue text-lg group-hover:bg-bg-blue group-hover:text-primary lg:text-[32px] lg:p-5">{icon}</div>
      <div className="flex flex-col text-center gap-2 lg:gap-3.5">
        <h3 className="font-medium text-base lg:text-lg">{title}</h3>
        <p className="text-xs max-w-64 text-center text-text-secondary-100 lg:text-sm">{desc}</p>
      </div>
    </div>
  );
};

export default WorkproccessCard;
