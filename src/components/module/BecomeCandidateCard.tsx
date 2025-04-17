import React from "react";
import Button from "../base/Button";
import { FaArrowRight } from "react-icons/fa";
import { clsx } from "clsx";

type BecomeCandidateCardProps = {
  type: "Employers" | "Candidate";
};

const BecomeCandidateCard = ({ type }: BecomeCandidateCardProps) => {
  const baseStyle: Record<BecomeCandidateCardProps["type"], string> = {
    Employers: "bg-bg-blue text-primary",
    Candidate: "bg-primary-100 text-text-secondary",
  };
  return (
    <div className={clsx(baseStyle[type], "rounded-md p-4 flex flex-col items-start gap-3 lg:p-[50px] lg:w-[648px] lg:gap-5")}>
      <h4 className={`font-medium ${type === "Employers" ? "text-primary" : "text-black"} text-xl lg:text-3xl`}>Become a {type}</h4>
      <p className="max-w-[312px] lg:text-sm leading-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras cursus a dolor convallis efficitur.</p>
      <Button icon={<FaArrowRight />} variant={type === "Employers" ? "secondary" : "primary"} size="md">
        {" "}
        Register Now
      </Button>
    </div>
  );
};

export default BecomeCandidateCard;
