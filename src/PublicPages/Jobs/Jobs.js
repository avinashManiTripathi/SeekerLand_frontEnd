import React from "react";
import JobCards from "../../Component/JobCards";
import { jobsData } from "../../jobsJSON";

import SideBar from "../../Layout/SideBar/SideBar";

import {
  JobsbyCategory,
  JobsInTopLocations,
  QuickLink,
} from "../../SiideBarJSON";
import "./jobs.css";

const Jobs = (props) => {
  return (
    <div className="wrapper">
      <div className="container mt-5 ">
        <div className="row ">
          <div className="col-md-3 mt-5">
            <SideBar data={QuickLink} />
            <SideBar data={JobsbyCategory} />
            <SideBar data={JobsInTopLocations} />
          </div>
          <div className="col-md-9 mt-5">
            <JobCards data={jobsData} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jobs;
