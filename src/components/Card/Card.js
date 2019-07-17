import React from "react";
import "./Card.scss";
import Former from "../Form/Former";
import Graphic from "../Graphic/Graphic";
// import anime from "animejs";

// // let animate = anime;

export default function Card(props) {
  // CAN'T GET IT WORKING :-(
  // let playing = false;

  // const turnCard = () => {
  //   console.log("card clicked");
  //   if (playing) {
  //     return;
  //   }
  //   playing = true;

  //   animate({
  //     targets: ".card",
  //     scale: [{ value: 1 }, { value: 1.4 }, { value: 1, delay: 250 }],
  //     rotateY: { value: "+=180", delay: 200 },
  //     easing: "easeInOutSine",
  //     duration: 400,
  //     complete: function(anim) {
  //       playing = false;
  //     }
  //   });
  // };

  return (
    <div className="card-container" style={{ zIndex: "20" }}>
      <div className="card">
        <Graphic />
        <Former handleGuessResponse={props.handleGuessResponse} />
      </div>
    </div>
  );
}
