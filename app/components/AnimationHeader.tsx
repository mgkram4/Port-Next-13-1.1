"use client";

import { Player } from "@lottiefiles/react-lottie-player";
import { motion } from "framer-motion";

export default function AnimationHeader() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="flex justify-center items-center"
    >
      <Player
        autoplay
        loop
        src="/devCoding.json"
        style={{ width: "100%", height: "100%" }}
      />
    </motion.div>
  );
}
