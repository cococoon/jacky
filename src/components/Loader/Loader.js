import React, { Component } from "react";
import anime from "animejs";

const loader = anime;

export default class Loader extends Component {
  //TODO implement animejs
  componentDidMount() {
    loader({
      targets: "path",
      strokeDashoffset: [loader.setDashoffset, 0],
      easing: "easeInOutSine",
      duration: 1000,
      delay: function(el, i) {
        return i * 500;
      },
      direction: "alternate",
      loop: true
    });
  }

  render() {
    return (
      <div>
        <p>Loading...</p>
      </div>
    );
  }
}
