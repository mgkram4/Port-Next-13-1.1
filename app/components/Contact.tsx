"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Form from "./Form";

import { Player } from "@lottiefiles/react-lottie-player";
import { Reveal } from "./Reveal";

export default function Contact() {
  const [playerSize, setPlayerSize] = useState({
    width: "300px",
    height: "300px",
  });

  useEffect(() => {
    function handleResize() {
      // Set the player size based on the screen width
      if (window.innerWidth >= 768) {
        setPlayerSize({ width: "500px", height: "500px" });
      } else {
        setPlayerSize({ width: "300px", height: "300px" });
      }
    }

    // Call handleResize on initial load
    handleResize();

    // Add event listener to handle window resize
    window.addEventListener("resize", handleResize);

    // Clean up the event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="min-h-screen bg-aboutMe bg-cover flex flex-col justify-center items-center p-4 ">
      <div className="flex md:flex-row flex-col items-center justify-center mb-4">
        <div className="flex justify-center items-center border-grey border-2 bg-white p-8 rounded-xl py-2">
          <Reveal>
            <Form />
          </Reveal>
        </div>
        {/* Lottie Player */}

        <div className="flex items-center justify-center p-4 my-4 ">
          <Reveal>
            <Player
              autoplay
              loop
              src="./contact.json"
              style={{ ...playerSize, maxWidth: "100%" }}
            />
          </Reveal>
        </div>
      </div>
      {/* Buttons */}
    </div>
  );
}
