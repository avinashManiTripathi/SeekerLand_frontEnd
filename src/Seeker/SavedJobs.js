import React from "react";

import { Link } from "react-router-dom";
import { jobsData } from "../jobsJSON";
import UserProfileCard from "./AccountPages/UserProfileCard";
import JobCards from "../Component/JobCards";

const AppliedJobs = (props) => {
  return (
    <div className="container">
     

      <div className="row">
        <div className="col-md-3"style={{
           marginTop:"20px"
        }}>
          <UserProfileCard />
          <div className="quick-links-wrapper bg-white shadow p-2">
            <h2>Quick Links</h2>
            <div className="quick-links-inner">
              <p>
                <Link to="#" className="quick-links-inner-links">
                  Attach Resume
                </Link>
              </p>
              <p>
                <Link to="#" className="quick-links-inner-links">
                  Education Details
                </Link>
              </p>
              <p>
                <Link to="#" className="quick-links-inner-links">
                  Profile Summary
                </Link>
              </p>{" "}
              <p>
                <Link to="#" className="quick-links-inner-links">
                  Key Skills
                </Link>
              </p>
              <p>
                <Link to="#" className="quick-links-inner-links">
                  Accomplishments
                </Link>
              </p>
              <p>
                <Link to="#" className="quick-links-inner-links">
                  Work Experience
                </Link>
              </p>
              <p>
                <Link to="#" className="quick-links-inner-links">
                  Project
                </Link>
              </p>
              <p>
                <Link to="#" className="quick-links-inner-links">
                  Personal Details
                </Link>
              </p>
              <p>
                <Link to="#" className="quick-links-inner-links">
                  IT Skills
                </Link>
              </p>
              <p>
                <Link to="#" className="quick-links-inner-links">
                  Job Preferences
                </Link>
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-9" style={{
           marginTop:"40px"
        }}>
            <section className="section about-section gray-bg" id="about">
        <div className="counter">
          <div className="row">
            <div className="col-6 col-lg-3">
              <div className="count-data text-center">
                <h6 className="count h2" data-to="500" data-speed="500">
                  500
                </h6>
                <Link to="/saved_jobs" className="m-0px  font-w-600">
                  Saved Jobs
                </Link>
              </div>
            </div>
            <div className="col-6 col-lg-3">
              <div className="count-data text-center">
                <h6 className="count h2" data-to="150" data-speed="150">
                  150
                </h6>
                <Link to="/applied_jobs" className="m-0px  font-w-600">
                  Applied Jobs
                </Link>
              </div>
            </div>
            <div className="col-6 col-lg-3">
              <div className="count-data text-center">
                <h6 className="count h2" data-to="850" data-speed="850">
                  850
                </h6>
                <p className="m-0px font-w-600">Accomplishments</p>
              </div>
            </div>
            <div className="col-6 col-lg-3">
              <div className="count-data text-center">
                <h6 className="count h2" data-to="190" data-speed="190">
                  190
                </h6>
                <p className="m-0px font-w-600">Key SKills</p>
              </div>
            </div>
          </div>
        </div>
      </section>
          <div className="saved-jobs-title">
            <h2>03 Saved Job(s) </h2>
          </div>
          <div className="mt-2">
            <JobCards data={jobsData}></JobCards>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppliedJobs;
