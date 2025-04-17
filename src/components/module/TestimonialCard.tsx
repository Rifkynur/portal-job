import React from "react";
import { SplideSlide } from "@splidejs/react-splide";

type TestimonialCardProps = {
  icon: string;
  desc: string;
  name: string;
  job: string;
};
const TestimonialCard = ({ desc, icon, job, name }: TestimonialCardProps) => {
  return (
    <SplideSlide className="bg-primary p-2 rounded-md h-40 flex flex-col justify-between lg:p-6 lg:h-[300px]">
      <div className="flex flex-col gap-2">
        <div className="flex">
          <img src="/star.png" alt="star" className="size-6" />
          <img src="/star.png" alt="star" className="size-6" />
          <img src="/star.png" alt="star" className="size-6" />
          <img src="/star.png" alt="star" className="size-6" />
          <img src="/star.png" alt="star" className="size-6" />
        </div>
        <p className="text-text-secondary-100 text-xs lg:text-base">{desc}</p>
      </div>
      <div className="flex justify-between">
        <div className="flex items-center gap-2 ">
          <div className="size-10 lg:size-12">
            <img src={`/users/${icon}.png`} alt="user" className="object-cover" />
          </div>
          <div>
            <h4 className="text-sm font-medium lg:text-base">{name}</h4>
            <p className="text-xs text-text-secondary-100 lg:text-sm">{job}</p>
          </div>
        </div>
        <div className="size-8 lg:size-12">
          <img src="/Quote.png" alt="user" className="object-cover" />
        </div>
      </div>
    </SplideSlide>
  );
};

export default TestimonialCard;
