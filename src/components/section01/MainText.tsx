"use client";

import React from "react";
import { motion } from "framer-motion";

type MainTextProps = {
  data: {
    id: number;
    text: string;
    delay: number;
  };
  lastText: boolean;
};

const MainText = ({ data, lastText }: MainTextProps) => {
  return (
    <motion.p
      key={data.id}
      initial={{ opacity: 0, y: 50, rotate: 45 }}
      whileInView={{ opacity: 1, y: 0, rotate: 0 }}
      transition={{
        duration: 0.1,
        delay: data.delay,
        ease: "easeOut",
        type: "spring",
        stiffness: 100,
        damping: 10,
      }}
      className={`${lastText ? "text-[red]" : "text-white"}`}
    >
      {data.text}
    </motion.p>
  );
};

export default MainText;
