import React from "react";
import "../assets/css/Members.css";
import { MembersData } from "../data";

const Members = () => {
  return (
    <section className="mambersSection">
      <div className="headingSec">
        <h1 className="__heading">New Members On Edvolve</h1>
      </div>
      <div className="members__container">
        {MembersData.map((data) => {
          return (
            <div className="member">
              <img
                src={data.image}
                alt={data.name}
              />
              <div className="memberDetails">
                <h2>{data.name}</h2>
                <p>
                  {data.description}
                </p>
                <a href="/" className="member__profile">
                  SEE PROFILE
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Members;
