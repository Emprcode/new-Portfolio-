import React from "react";
import { TypeAnimation } from "react-type-animation";

export const Header = () => {
  return (
    <div className="container ">
      <h1>Narayan Aryal</h1>
      <h6 className="text-light">
        <TypeAnimation
          sequence={[
            "Software Engineer",
            1000,
            "Full-Stack Developer",
            1000,
            "MERN Dev",
            1000,
          ]}
          //  Replacing previous Text
          style={{ fontSize: "2em" }}
          wrapper="h2"
          repeat={Infinity}
        />
      </h6>
    </div>
  );
};
