"use client";

// Navbar.js

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Player } from "@lottiefiles/react-lottie-player";
import { motion } from "framer-motion";

function Navbar() {
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // After 3 seconds, set the 'visible' state to true to start the fade-in transition.
    const timer = setTimeout(() => {
      setVisible(true);
    }, 3000);

    // Clean up the timer when the component unmounts.
    return () => clearTimeout(timer);
  }, []);

  const handleLinkClick = () => {
    setOpen(false);
  };

  const handleToggleChange = () => {
    setOpen((prevOpen) => !prevOpen); // Toggle the 'open' state on every click
  };

  return (
    <div className="navbar sticky top-0 z-50 dark:bg-white">
      <div className="flex-1">
        <div className="items-center">
          <Link href="/">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: "easeIn", duration: 0.6, delay: 4.0 }}
              className="flex px-2 bg-[rgba(101,74,121,1)]  rounded-xl   items-center"
            >
              <Player
                autoplay
                loop
                src="/nav.json"
                style={{
                  width: "75px",
                  height: "75px",
                }}
              />
            </motion.div>
          </Link>
        </div>
      </div>
      <div className="flex-none">
        {/* Use the 'checked' prop and 'onChange' event handler */}

        <ul className="menu menu-horizontal  bg-[rgba(101,74,121,1)]  rounded-xl ">
          <li>
            <details>
              <summary className="font-bold text-white text-lg">More</summary>
              <ul className="p-2 bg-base-100">
                <li>
                  <Link href="/resume">Resume</Link>
                </li>
                <li>
                  <Link href="/faq">FAQ</Link>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </div>

      {/* AudioPlayer to play music */}
    </div>
  );
}

export default Navbar;
