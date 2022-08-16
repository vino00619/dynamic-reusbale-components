import React from "react";
import "./ExperienceItem.css";

const ExperienceItem = (props) => {
  const { companyName, title, jobDescription, startDate, endDate } =
    props.experience;

  return (
    <div className="experince-item__root">
      <div className="experince-item__top">
        <span>{companyName}</span>
        <span>{title}</span>
      </div>
      <span>{jobDescription}</span>

      <div className="experince-item__dates">
        <span>{startDate}</span>
        <span>-</span>
        <span>{endDate}</span>
      </div>
    </div>
  );
};

export default ExperienceItem;
