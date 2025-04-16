import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import PopularCategoryCard from "@/components/module/PopularCategoryCard";
import { PiPenNibBold, PiMonitorPlay, PiMusicNotesFill, PiChartBarFill, PiFirstAidKit } from "react-icons/pi";
import { FaCode } from "react-icons/fa6";
import { BsMegaphone } from "react-icons/bs";
import { LuDatabase } from "react-icons/lu";
import Button from "@/components/base/Button";

const PopularCategory = () => {
  return (
    <section className="bg-primary py-10 lg:py-24bg-primary">
      <div className="container">
        <div className="flex justify-between items-end">
          <h1 className="font-medium text-2xl md:text-3xl lg:text-[40px]">Popular Category</h1>
          <Button variant="secondaryOutline" size="sm" icon={<FaArrowRightLong />}>
            View All
          </Button>
        </div>
        <div className="mt-8 grid grid-cols-2 gap-1 gap-y-3 md:grid-cols-3 md:gap-2 lg:grid-cols-4">
          <PopularCategoryCard icon={<PiPenNibBold />} title="Graphics & Design" count={357} />
          <PopularCategoryCard icon={<FaCode />} title="Code & Programing" count={312} />
          <PopularCategoryCard icon={<BsMegaphone />} title="Digital Marketing" count={297} />
          <PopularCategoryCard icon={<PiMonitorPlay />} title="Video & Animation" count={247} />
          <PopularCategoryCard icon={<PiMusicNotesFill />} title="Music & Audio" count={204} />
          <PopularCategoryCard icon={<PiChartBarFill />} title="Account & Finance" count={167} />
          <PopularCategoryCard icon={<PiFirstAidKit />} title="Health & Care" count={125} />
          <PopularCategoryCard icon={<LuDatabase />} title="Data & Science" count={57} />
        </div>
      </div>
    </section>
  );
};

export default PopularCategory;
