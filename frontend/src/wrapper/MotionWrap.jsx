import React from "react";
import { motion } from "framer-motion";

const MotionWrap = (Component, classNames) => function HOC() {
  return (
    <motion.div
      whileInView={{ y: [100, 50, 0], opacity: [0, 0.5, 1] }}
      transition={{ duration: 1 }}
      className={`${classNames} app__flex`}
      // animate={{ opacity: 1 }}
      // exit={{ opacity: 0 }}
    >
      <Component />
    </motion.div>
  );
}

export default MotionWrap;