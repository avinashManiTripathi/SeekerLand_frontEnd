import React from "react";
import './index.css'

import { Link } from "react-router-dom";
import {
  MyAccountEducationCard,
  MyAccountExperienceCard,
  MyAccountJobPreferencesCard,
  MyAccountPersonalDetailsCard,
  MyAccountProfileSummaryCard,
  MyAccountProjectsCard,
  MyAccountSkillCard,
  MyAccountSkillTableCard,
  MyAccountUploadResmeCard,
} from "./AccountPages/index";
import UserProfileCard from "./AccountPages/UserProfileCard";
import SideBar from "../Layout/SideBar/SideBar";
import { QuickLink } from "../SiideBarJSON";

const MyAccount = (props) => {
  return (
    <div className="container ">
    

      <div className="row">
        <div className="col-md-3 mt-5 ">
          <UserProfileCard />
          <SideBar data={QuickLink} />
        </div>
        <div className="col-md-9  "
         style={{
           marginTop:"27px"         }}>

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
          <div className="mt-2">
            <MyAccountUploadResmeCard />
          </div>
          <div className="mt-2">
            <MyAccountProfileSummaryCard />
          </div>
          <div className="mt-2">
            <MyAccountSkillCard />
          </div>
          <div className="mt-2">
            <MyAccountEducationCard />
          </div>
          <div className="mt-2">
            <MyAccountExperienceCard />
          </div>
          <div className="mt-2">
            <MyAccountProjectsCard />
          </div>
          <div className="mt-2">
            <MyAccountJobPreferencesCard />
          </div>
          <div className="mt-2">
            <MyAccountPersonalDetailsCard />
          </div>
          <div className="mt-2">
            <MyAccountSkillTableCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyAccount;
