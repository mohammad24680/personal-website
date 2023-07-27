import { library } from "@fortawesome/fontawesome-svg-core";
import { faLeftLong } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import {
  faGithub,
  faLinkedinIn,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

import HeaderStyle from "../../Styles/Header/Header.module.scss";
import { Right_Counter } from "../SocialMedia_PageNumber/Right_Counter";
library.add(faGithub, faLinkedinIn, faInstagram, faLeftLong);
const animationFrom = { opacity: 0, x: 100 };
const animateTo = { opacity: 1, x: 0 };
const exit = { opacity: 0, x: 100 };
const Header = () => {
  return (
    <section className={HeaderStyle.header}>
      <div className={HeaderStyle.header_head_top}>
        <div className={HeaderStyle.header_corner_right_top}>
          <motion.div
            initial={animationFrom}
            animate={animateTo}
            exit={exit}
            transition={{ duration: 0.5 }}
            className={HeaderStyle.header_corner_image}
          >
            <figure>
              <img src="/images/Header/bttersun-modified.png" />
            </figure>
          </motion.div>
        </div>
      </div>
      <motion.div
        initial={animationFrom}
        animate={animateTo}
        exit={exit}
        transition={{ duration: 0.5 }}
        className={HeaderStyle.header_corner}
      >
        <div className={HeaderStyle.header_corner_leftbottom}>
          <div>
            <figure>
              <img
                src="/images/Header/LeftBottom.png"
                width={500}
                height={500}
                alt=""
              />
            </figure>
          </div>
          <div>
            <h3>
              <span>F</span>rontend <span>D</span>eveloper
            </h3>
            <h5>
              From <span>IR</span>
            </h5>
          </div>
        </div>
      </motion.div>
      <div className={HeaderStyle.header_main}>
        <motion.div
          initial={animationFrom}
          animate={animateTo}
          exit={exit}
          transition={{ duration: 0.5 }}
          className={HeaderStyle.header_main_left_piece}
        >
          <figure>
            <img src="/images/Header/Red_circle.png" />
          </figure>
          <h2>
            <span>H</span>ELLO I'M
          </h2>
        </motion.div>
        <motion.div
          initial={animationFrom}
          animate={animateTo}
          exit={exit}
          transition={{ duration: 0.5 }}
          className={HeaderStyle.header_name_information}
        >
          <h1>
            MOHAMMAD <br /> BAGHERI
          </h1>
          <figure>
            <img src="/images/Header/withoutbackground911.png" />
          </figure>
        </motion.div>
      </div>
      <div className={HeaderStyle.social_media}>
        <Right_Counter />
      </div>
      <motion.div
        initial={animationFrom}
        animate={animateTo}
        exit={exit}
        transition={{ duration: 0.5 }}
        className={HeaderStyle.header_corners_page_number}
      >
        <p>01</p>
      </motion.div>
    </section>
  );
};

export default Header;
