import React from "react";
import SideBar from "../../Layout/SideBar/SideBar";
import { JobsbyCategory, JobsInTopLocations } from "../../SiideBarJSON";
import "./jobs.css";

const JobsDetails = (props) => {
  return (
    <div className="container ">
      <div className="row ">
        <div className="col-md-9 mt-5">
          <div className="bg-white shadow job-card-wrapper ">
            <div className="job-card-inner">
              <h2>Urgent Hiring For Spring Developer</h2>
              <h3>Speckyfox Technologies Pvt Ltd</h3>
              <div className="job-card-svl">
                <span> 120000</span>
                <span> 25</span>
                <span>Arjan Ghar AyaNagar New Delhi</span>
              </div>
              <p>
                Skills : <span>java </span>
                <span>Spring Boot </span>
                <span>Hibernate </span>
                <span>Php </span>
                <span>SQL </span>
                <span>CSS 3 </span>
              </p>
              <p>
                In these roles you will be responsible for: * * As an integral
                part of the NTT Data Consulting Team, the person will be
                responsible for leading the discussions with client from a
                Business perspective. *
              </p>

              <hr />
              <div className="row">
                <div className="col-md-6">
                  <p className=" d-flex justify-content-start">
                    Post On 2 Days Ago
                  </p>
                </div>
                <div className="col-md-6 d-flex justify-content-end">
                  <button className="btn btn-danger btn-apply d-flex justify-content-end">
                    Apply Job
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white shadow  job-card">
            <div className="job-card-inner">
              <h2>Description</h2>
              <p>
                Dear Candidate, Hope you are doing well in this pandemic. We
                have urgent requirements for Java Developer for one of our
                esteemed client Pan India.
              </p>
              <p>
                Dear Candidate, Hope you are doing well in this pandemic. We
                have urgent requirements for Java Developer for one of our
                esteemed client Pan India.
              </p>

              <p>
                Dear Candidate, Hope you are doing well in this pandemic. We
                have urgent requirements for Java Developer for one of our
                esteemed client Pan India.
              </p>
              <p>
                Dear Candidate, Hope you are doing well in this pandemic. We
                have urgent requirements for Java Developer for one of our
                esteemed client Pan India.
              </p>
            </div>
          </div>
          <div className="bg-white shadow  mt-3  job-card">
            <div className="job-card-inner">
              <h2>About Company</h2>
              <p>
                A pioneer in Indias IT staffing business, Future Focus Infotech
                Pvt. Ltd. (FFI) offers Strategic IT consulting and Managed
                Solutions to Technology companies. Incorporated in 1997, FFI has
                transformed over the years to become a leader in Consulting for
                myriad technologies ranging from application development using
                Open Source, Microsoft, Java and Mainframe technologies to state
                of the art SMAC technologies. A Software Development Center
                (SDC) established in 1999 caters to the growing needs of our
                International clients offering Application Support services and
                managed solutions in Quality Assurance(QA), Business
                Intelligence (BI) and Analytics. Primarily to cater3 to our
                Indian clients in their overseas projects, we have spread our
                wings to establish offices in the USA (Focus America Inc) in
                2000 and in UAE (Future Focus Infotech FZE) in 2011. Our
                subsidiaries, with clear understanding of the local milieu, have
                now the capability to service the local clients effectively. FFI
                today operates across 8 major cities in India apart from the
                overseas operations. The scale of our capabilities, offerings
                and customer engagements in the IT & ITES domain differentiates
                us from other companies in the consulting and recruitment
                vertical. FFI, ISO 9001 certified since 2005, with its focus on
                quality delivery, has not only been successful in retaining its
                major clients but also in securing additional business in new
                geographies. FFI maintains excellent relationship with its
                consultants too resulting in consistent repeat business over the
                years. Website : http://www.focusinfotech.com Year founded :
                1997
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-3 mt-5">
          <SideBar data={JobsbyCategory} />
          <SideBar data={JobsInTopLocations} />
        </div>
      </div>
    </div>
  );
};

export default JobsDetails;
