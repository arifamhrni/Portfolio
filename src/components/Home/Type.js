import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Mahasiswa Teknologi Informasi, Universitas Brawijaya",
          "Extraverted, Sensing, Feeling, and Perceiving",
          "Tech-Creative Enthusiast!!",
          "Content Creator"
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
