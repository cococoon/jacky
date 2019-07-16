import React, { Component } from "react";
import anime from "animejs";

import "./Loader.scss";

const loader = anime;

export default class Loader extends Component {
  //TODO implement animejs
  componentDidMount() {
    this.animate();
  }

  animate = () => {
    loader({
      targets: ".el",
      translateY: [0, -50, 0],
      delay: anime.stagger(100),
      easing: "spring(1, 80, 10, 0)",
      duration: 2000,
      // direction: "alternate",
      loop: true
    });
  };

  render() {
    return (
      <div className="loader-container">
        <div className="circle el" />
        <div className="circle el" />
        <div className="circle el" />
        <div className="circle el" />
        <div className="circle el" />
      </div>
    );
  }
}
