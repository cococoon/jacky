import React, { Component } from "react";
import anime from "animejs";

const animeren = anime;

export default class Thanks extends Component {
  componentDidMount() {
    animeren({
      targets: "path",
      strokeDashoffset: [animeren.setDashoffset, 0],
      easing: "easeInOutSine",
      duration: 3000,
      delay: function(el, i) {
        return i * 500;
      },
      direction: "alternate",
      loop: false
    });
  }

  render() {
    return (
      <div>
        <svg
          style={{ width: "100%", maxWidth: "690px" }}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 109.94 28.44"
        >
          <g stroke="#000" strokeWidth="0.5" fill="none">
            <title>thanks</title>
            <path
              d="M64.26,61A2.53,2.53,0,0,1,64,59.7c0-.79.05-1.76.14-2.91l.07-.94.08-1.91c0-.84-.09-2.71-.26-5.61s-.25-4.78-.25-5.62c0-.07,0-.21,0-.41s0-.53,0-1,0-1.07,0-1.76a9.42,9.42,0,0,0-.36-3.35,9.13,9.13,0,0,0-.93.11l-1,.07a1.35,1.35,0,0,1-.83-.27.83.83,0,0,1-.36-.7c0-.29.29-.54.87-.76a17.94,17.94,0,0,1,4.28-.61C66.29,34,66.78,34,67,34a1.21,1.21,0,0,1,.79.29.92.92,0,0,1,.05,1.42A1.11,1.11,0,0,1,67,36l-.65,0a6.32,6.32,0,0,0-.65,0h-.36a42.82,42.82,0,0,1,.25,4.42l0,2.31c0,.69,0,1.47,0,2.34q0,1.73.15,4.14.18,3,.18,4.14c0,.91,0,2,.14,3.24s.14,2.35.14,3.24c0,1.17-.34,1.76-1,1.76A1,1,0,0,1,64.26,61Z"
              transform="translate(-60.32 -33.6)"
            />
            <path
              d="M77,55.31l0-2.05,0-1.66v-.47a4.52,4.52,0,0,0,0-.68.3.3,0,0,0-.11-.18.3.3,0,0,1-.11-.18v0a1.85,1.85,0,0,1-.65.08A5.57,5.57,0,0,1,75.08,50l-1.15-.18v4.14c0,.63,0,1.61.11,3s.11,2.31.11,3a1.54,1.54,0,0,1-.29.93.89.89,0,0,1-.76.4c-.45,0-.78-.45-1-1.33a18.1,18.1,0,0,1-.29-3.57l.07-2.91c0-.82,0-1.68,0-2.6V49.66a4.08,4.08,0,0,0,0-.76v-.18L72,46.63c0-.91,0-2.26-.11-4.06s-.1-3.16-.1-4.07a1.12,1.12,0,0,1,.28-.76,1,1,0,0,1,.72-.32c.77,0,1.16.72,1.16,2.16L73.89,44c0,1.35-.07,2.85-.07,4.5a7.08,7.08,0,0,0,2,.18H77.1a1.29,1.29,0,0,0,.07-.43c0-1.15-.07-2.86-.22-5.11S76.7,39.35,76.7,38a.85.85,0,0,1,.31-.67,1.07,1.07,0,0,1,.74-.27,2.3,2.3,0,0,1,.72.18l.32.15q0,5.11.36,13.64l.32,9.11a.93.93,0,0,1-.37.79,1.46,1.46,0,0,1-.89.29Q77,61.25,77,55.31Z"
              transform="translate(-60.32 -33.6)"
            />
            <path
              d="M89.66,61.32a1,1,0,0,1-.39-.93,31,31,0,0,0-.36-3.68L88.76,56l-3.56-.54c-.15.55-.35,1.67-.61,3.35a5.13,5.13,0,0,1-.69,2.34.88.88,0,0,1-.72.32,1.28,1.28,0,0,1-.79-.27.81.81,0,0,1-.36-.67l.07-.18,0-.14a161.94,161.94,0,0,0,3.6-18.25c0-.1,0-.26,0-.49s0-.56.08-1c.07-.89.15-1.59.23-2.12a2.74,2.74,0,0,1,.41-1.19h1.23a1.6,1.6,0,0,1,.86.23.76.76,0,0,1,.36.67,63.34,63.34,0,0,0,.76,8.14,70.47,70.47,0,0,1,.72,7.77,8.27,8.27,0,0,0,.18,1.12,6.64,6.64,0,0,1,.18,1.08q0,.26.36,2.16a16.85,16.85,0,0,1,.32,2.23v0a.94.94,0,0,1-.57,1A2.33,2.33,0,0,1,89.66,61.32Zm-1.26-8a76.5,76.5,0,0,0-.57-8.28l-.36-3.74c-1,5.64-1.74,9.9-2.13,12.78a9.13,9.13,0,0,0,3.17.57A7,7,0,0,1,88.4,53.33Z"
              transform="translate(-60.32 -33.6)"
            />
            <path
              d="M103.74,61.12a1.63,1.63,0,0,1-.33-.81l-.21-.68v-.18q0-1.19-2.47-8.1T96.86,41.13v18.1l.15.26.14.25a.72.72,0,0,1,.11.36,1.07,1.07,0,0,1-.33.79,1,1,0,0,1-.79.32c-.77,0-1.15-.73-1.15-2.19l0-6.16q0-2.78,0-6.19c0-.77,0-1.88.11-3.35s.1-2.63.1-3.35a3.17,3.17,0,0,1,1.3-2.66v.22a1.17,1.17,0,0,1,.29-.08c.55,0,1.24,1,2.09,2.88a50.48,50.48,0,0,1,1.81,4.86c.54,1.71,1.26,4.13,2.15,7.28l.36,1.29c.55,2,1,3.34,1.26,4.18q.72-7.74.72-18.29v-.47a2.29,2.29,0,0,1,0-.47c0-.72.29-1.08.86-1.08a.9.9,0,0,1,.78.4,1.75,1.75,0,0,1,.27,1v2.7q-.08,5.53-.43,12t-.87,7.31a7.82,7.82,0,0,1-1.29.29A.82.82,0,0,1,103.74,61.12Z"
              transform="translate(-60.32 -33.6)"
            />
            <path
              d="M118.53,60.06a39.43,39.43,0,0,1-2.77-8.89c-.26-1.13-.48-2.17-.65-3.13a13.92,13.92,0,0,0-1.29,6.26V61c0,.55-.24.83-.72.83a1.27,1.27,0,0,1-.89-.31,1.08,1.08,0,0,1-.34-.84V49.73q0-1.59.36-5.83c.24-2.47.36-4.42.36-5.83a1,1,0,0,1,1-.69,1.07,1.07,0,0,1,.79.33,1,1,0,0,1,.32.79v.11c-.31.52-.46,2.71-.46,6.55v1.29l1.33-2.62c.81-1.71,1.58-3.17,2.3-4.4s1.16-1.8,1.48-1.8a1.87,1.87,0,0,1,1,.26.79.79,0,0,1,.41.72l-.86,1.44q-2.7,4.35-3,5,0,.6,0,1.08l0,1.08A25.16,25.16,0,0,0,118.08,53a28.14,28.14,0,0,0,2.07,5.6l.47.65a2.93,2.93,0,0,1,.69,1.66.86.86,0,0,1-.31.66,1,1,0,0,1-.7.27C119.74,61.86,119.16,61.26,118.53,60.06Z"
              transform="translate(-60.32 -33.6)"
            />
            <path
              d="M132.93,61q.4-.75.4-6.12a22.56,22.56,0,0,0-.18-2.73l-.11-1c-.07-.65-.11-1.14-.11-1.47v-.94c-.24-.6-.68-1.72-1.31-3.35s-1.15-3-1.53-4.1a9.64,9.64,0,0,1-.69-2.59v-.18l.83-.62c.41,0,.84.58,1.3,1.59a33.72,33.72,0,0,1,1.28,3.81c.46,1.66.7,2.54.7,2.63.09-.26.29-1.16.57-2.7a38.85,38.85,0,0,1,1-4.07c.4-1.17.82-1.76,1.26-1.76a1,1,0,0,1,.63.22.65.65,0,0,1,.27.54,19.58,19.58,0,0,1-1,5.18,21.23,21.23,0,0,0-1.08,5.26V59.34c0,1.61-.4,2.41-1.19,2.41C133.53,61.75,133.2,61.49,132.93,61Z"
              transform="translate(-60.32 -33.6)"
            />
            <path
              d="M143.66,61.34a4.51,4.51,0,0,1-1.3-1.6A14.5,14.5,0,0,1,141.07,55a35.26,35.26,0,0,1-.33-4.72,7.06,7.06,0,0,1,0-.72v-.64c0-.12,0-.18,0-.18V48l0-2.52c0-.77.12-2,.29-3.67a12.1,12.1,0,0,1,.83-3.35,2.69,2.69,0,0,1,.64-1.1,1.3,1.3,0,0,1,.9-.38,6.38,6.38,0,0,1,2.6.52A5.62,5.62,0,0,1,148,39a8.06,8.06,0,0,1,1.22,2.22,12.41,12.41,0,0,1,.72,2.79,21.64,21.64,0,0,1,.22,3.2v.29c0,.74,0,1.41,0,2l0,2.06q0,10.36-4.82,10.36A2.79,2.79,0,0,1,143.66,61.34Zm2.77-1.44a3.34,3.34,0,0,0,.83-1.42,14.09,14.09,0,0,0,.83-4c.12-1.23.18-2.28.18-3.17,0-1.08-.09-2.5-.25-4.25s-.22-3.23-.22-4.14v-.65a3.88,3.88,0,0,0-.92-2.37,2.6,2.6,0,0,0-2.07-1,1.64,1.64,0,0,0-1.62,1.4,9.63,9.63,0,0,0-.36,2.88c0,.46,0,.84,0,1.16v1L142.8,47c-.05.51-.08,1.06-.08,1.66,0,1.3,0,2.58.11,3.85a32.49,32.49,0,0,0,.72,5.26c.39,1.77.95,2.66,1.69,2.66A1.66,1.66,0,0,0,146.43,59.9Z"
              transform="translate(-60.32 -33.6)"
            />
            <path
              d="M156.44,61.41a3,3,0,0,1-1.12-1.1,9.31,9.31,0,0,1-1.11-3.42,26.45,26.45,0,0,1-.25-4c-.08-2.59-.11-5.76-.11-9.5l0-2.77a6.09,6.09,0,0,1,0-.72c-.05-.91-.08-1.47-.08-1.66.22-.5.47-.75.76-.75s.54.21.77.64a3,3,0,0,1,.35,1.41v9.79a37.44,37.44,0,0,0,.25,3.82c.17,2,.25,3.24.25,3.81,0,1.78.76,2.67,2.27,2.67q2.6,0,2.59-19.37V38a1.06,1.06,0,0,1,0-.29.86.86,0,0,1,.2-.63,1.13,1.13,0,0,1,.78-.2,1,1,0,0,1,.73.27,1.24,1.24,0,0,1,.35.63,7.4,7.4,0,0,1,0,.83c0,.38,0,1-.11,1.84a14.27,14.27,0,0,0-.14,1.8,12.94,12.94,0,0,1-.07,1.47l-.07,1.51v.29a1.69,1.69,0,0,1,0,.33q0,16-4.64,16A3.18,3.18,0,0,1,156.44,61.41Z"
              transform="translate(-60.32 -33.6)"
            />
            <path
              d="M167.44,61.65a1.38,1.38,0,0,1-.38-1,1.63,1.63,0,0,1,.43-1.13,1.38,1.38,0,0,1,1-.49,1.35,1.35,0,0,1,1.06.49,1.87,1.87,0,0,1,.41,1.24c0,.84-.59,1.26-1.76,1.26A1.11,1.11,0,0,1,167.44,61.65Zm.77-6.66a9.25,9.25,0,0,1-.32-2.78c0-.43,0-1.24.07-2.44,0-.89.07-1.88.07-3l-.07-5.9-.07-5.9a1.24,1.24,0,0,1,.47-1,1.52,1.52,0,0,1,1-.42.86.86,0,0,1,.61.25.88.88,0,0,1,.25.65q0,3.16-.36,8.61-.39,6-.39,8.6c0,1.27,0,2.19-.06,2.75a3.56,3.56,0,0,1-.18,1.14.41.41,0,0,1-.37.29Q168.54,55.89,168.21,55Z"
              transform="translate(-60.32 -33.6)"
            />
          </g>
        </svg>
      </div>
    );
  }
}