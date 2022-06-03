import React from "react";
import { gsap } from "gsap";

const Card = ({ items }) => {
 const onEnter = ({ currentTarget }) => {
   gsap.to(currentTarget, {
     scale: 1.02,
     boxShadow:
       "rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px",
   });
 };

 const onLeave = ({ currentTarget }) => {
   gsap.to(currentTarget, {
     scale: 1,
     boxShadow: "none",
   });
 };

  return (
    <div className="section-center">
      <header>
        <h1>Articles</h1>
        <div className="view-all">VIEW ALL</div>
      </header>
      <div className="border"></div>
      <div className="wrapper">
        {items.map((item) => {
          const { id, img, date, info } = item;
          return (
            <div
              className="card"
              onMouseEnter={onEnter}
              onMouseLeave={onLeave}
              key={id}
            >
              <img src={img} alt="img" />
              <div className="card-info">
                <div className="data">{date}</div>
                <div className="info">{info}</div>
                <button className="btn">Read More</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Card;
