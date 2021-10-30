import React from "react";
import { Link } from "react-router-dom";
import "./SideBar.css";

const SideBar = ({ data }) => {
  return (
    <div className="quick-links-wrapper bg-white shadow p-2">
      <h2>{data.title}</h2>
      <div className="quick-links-inner">
        {data &&
          data.links.map((links) => {
            return (
              <p key={links.id}>
                <Link to="#" className="quick-links-inner-links">
                  {links.name}
                </Link>
              </p>
            );
          })}
      </div>
    </div>
  );
};

export default SideBar;
