import React, { useEffect } from "react";
import Ellie from "../Ellie.jpg";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Main = () => {
  useEffect(() => {
    gsap
      .timeline()
      .from(".anim1", {
        opacity: 0,
        duration: 1,
        y: -60,
        stagger: 0.6,
        ease: "power2",
      })
      .from(".image", { opacity: 0, x: 60, duration: 1.5, ease: "power2" });

    gsap.from(".anim2", {
      opacity: 0,
      duration: 3,
      y: -70,
      stagger: 0.6,
      scrollTrigger: {
        trigger: ".anim2",
        start: "1px 60%",
        end: "bottom 100px",
        toggleActions: "play restart resume reset",
        markers: true,
      },
      ease: "power2",
    });
  });

  return (
    <div className="main">
      <div className="page-1">
        <div className="intro">
          <h1 className="anim1">
            Bringing the gap
            <br /> between dream
            <br /> and reality
          </h1>
          <p className="anim1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
            <br />
            quae debitis voluptate iure aliquam voluptates fugiat omnis
            <br />
            consequuntur quisquam molestiae!
          </p>
          <button className="anim1">START DREAMING</button>
        </div>
        <div className="image">
          <img src={Ellie} alt="" />
        </div>
      </div>
      <div className="scroll">
        <div className="scroll-text">
          <h1 className="anim2">
            Just some text
            <br /> here for test
          </h1>
          <p className="anim2">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit
            <br />
            aliquam nostrum quidem, commodi quisquam incidunt alias? Laudantium
            <br />
            veritatis officiis vitae!
          </p>
        </div>
        <div className="image">
          <img src={Ellie} alt="" />
        </div>
      </div>
      <div className="page-3"></div>
    </div>
  );
};

export default Main;
