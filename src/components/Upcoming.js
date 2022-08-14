import React from "react";
import "../assets/css/Upcoming.css";
import { AiOutlineBell } from 'react-icons/ai'

const Upcoming = ({ title, Data}) => {
  return (
    <section className="UpcomingConatiner">
      <div className="sectionHeading">
        <h1>{title}</h1>
        <a href="/">See all</a>
      </div>
      <div className="containers">
        {Data.map((item) => {
          return (
            <div className="container">
              <img src={item.img} alt={item.title} className="image" />
              <div className="information">
                {item.live ? (
                  <h2>
                    <span className="live">&#128308;</span> Live Now
                  </h2>
                ) : (
                  <h2>{!item.live && item.date + ", " + item.time}</h2>
                )}
                <p className="info">{item.title}</p>
                <p className="author"> - {item.createdBy}</p>
              </div>
              {item.live && <button className="btn">Join Now</button>}
              {!item.live && <div  className="reminder">
                <AiOutlineBell className="bellIcon" />
                Remind Me
              </div>}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Upcoming;
