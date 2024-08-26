import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "BTech CSE Student At Graphic Era Hill University",
          "Student Developer",
          "Enthusiastic Coder",
          "Aspiring Software Developer",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
