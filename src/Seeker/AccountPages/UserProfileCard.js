import React from "react";
import { ProgressBar } from "react-bootstrap";

const UserProfileCard = (props) => {
  return (
    <div className="user-profile-card bg-white shadow   mb-2">
      <img
        src="https://media-exp1.licdn.com/dms/image/C5103AQFed6_BRhOgyg/profile-displayphoto-shrink_200_200/0/1526668638838?e=1640217600&v=beta&t=s3ygnbkB7SK9hEoJtXR9Q8CcAnv8Idcomqy-6cfXrvw"
        className="rounded m-2"
        alt=""
      />
      <h2>Avinash Tripathi</h2>
      <p>New Delhi India</p>
      <p>Experience </p>

      <p>Java Developer at Speckyfox</p>
      <p>
        avinashtiwari0555999@gmail.com{" "}
        <span>
          <i className="fa fa-pencil" aria-hidden="true"></i>
        </span>
      </p>
      <p>
        +91 7239063647{" "}
        <span>
          <i className="fa fa-pencil" aria-hidden="true"></i>
        </span>
      </p>
      <ProgressBar animated striped className="mb-2" now="80" label="80%" />
    </div>
  );
};

export default UserProfileCard;
