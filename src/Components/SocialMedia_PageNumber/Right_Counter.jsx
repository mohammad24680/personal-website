import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { motion } from "framer-motion";
import {
  faGithub,
  faLinkedinIn,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import Right_Counter_Style from "../../Styles/Right_Counter/Right_Counter.module.scss";
library.add(faGithub, faLinkedinIn, faInstagram);
const animations = {
  initial: { opacity: 0, x: 100 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: 100 },
};
export const Right_Counter = () => {
  return (
    <>
      <motion.div
        variants={animations}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ duration: 0.8 }}
        className={Right_Counter_Style.header_corner_right_midlle}
      >
        <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 1 }}>
          <a href="https://github.com/mohammad24680" target="_blank">
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </motion.div>
        <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 1 }}>
          <a
            href="https://www.linkedin.com/in/mohammad-bagheri-009542211"
            target="_blank"
          >
            <FontAwesomeIcon icon={faLinkedinIn} />
          </a>
        </motion.div>
        <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 1 }}>
          <a
            href="https://www.instagram.com/mohammadbagheri_mbi/"
            target="_blank"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </motion.div>
      </motion.div>
    </>
  );
};
