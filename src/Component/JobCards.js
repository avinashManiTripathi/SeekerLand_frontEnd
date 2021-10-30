import React from "react";
import { useHistory } from "react-router";

const JobCards = ({ data }) => {
  const history = useHistory();
  const handleOnClickJobCard = () => {
    history.push("/job-details");
  };
  return (
    <div>
      {data &&
        data.map((data) => {
          return (
            <div
              className="bg-white shadow job-card-wrapper "
              onClick={() => handleOnClickJobCard(data.id)}
            >
              <div className="job-card-inner">
                <h2>{data.title}</h2>
                <h3>{data.companyName}</h3>
                <div className="job-card-svl">
                  <span>
                    {" "}
                    <i className="fa fa-inr"></i>120000
                  </span>
                  <span>
                    {" "}
                    <i className="fa fa-user"></i>25
                  </span>
                  <span>
                    {" "}
                    <i className="fa fa-map-marker"></i>
                    {data.location}
                  </span>
                </div>
                <p>
                  Skills :
                  {data.skills &&
                    data.skills.map((skills) => {
                      return <span>java </span>;
                    })}
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
          );
        })}
    </div>
  );
};

export default JobCards;
