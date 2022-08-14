import React from "react";
import '../assets/css/Stats.css'
import { StatsData } from "../data";

const Stats = () => {
  return (
    <section className="stats">
      <div className="headingSection">
        <h1>Your Stats</h1>
      </div>
      <div className="all_stats">
        {StatsData.map((item) => {
          return (
            <div className="stats_box">
              <h2>{item.val}</h2>
              <p>{item.title}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Stats;
