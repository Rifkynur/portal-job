import React from "react";

type MostPopularCardProps = {
  title: string;
  count: string;
};

const MostPopularCard = ({ title, count }: MostPopularCardProps) => {
  return (
    <div className="flex flex-col gap-2">
      <h3 className="font-medium text-sm lg:text-lg">{title}</h3>
      <p className="text-text-secondary-100 text-xs lg:text-base">{count} Open Positions</p>
    </div>
  );
};

export default MostPopularCard;
