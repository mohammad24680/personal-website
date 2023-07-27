import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Portfolio from "../../Styles/Portfilio/Portfolio.module.scss";
import { Right_Counter } from "../SocialMedia_PageNumber/Right_Counter";
const animationFrom = { opacity: 0, x: 100 };
const animateTo = { opacity: 1, x: 0 };
const exit = { opacity: 0, x: 100 };
const animationFrom2 = { opacity: 0 };
const animateTo2 = { opacity: 1 };
const exit2 = { opacity: 0 };
const MyPortfolio = () => {
  return (
    <section className={Portfolio.MyPortfolio_items}>
      <div className={Portfolio.MyPortfolio_items_information}>
        <div className={Portfolio.information_box}>
          <motion.figure
            initial={animationFrom}
            animate={animateTo}
            exit={exit}
            transition={{ duration: 0.5 }}
          >
            <img src="/images/Header/Red_circle.png" alt="" />
          </motion.figure>
          <motion.h2
            initial={animationFrom}
            animate={animateTo}
            exit={exit}
            transition={{ duration: 0.5 }}
          >
            MY PO <span>R</span>TFOLIO
          </motion.h2>
          <motion.figure
            initial={animationFrom}
            animate={animateTo}
            exit={exit}
            transition={{ duration: 0.5 }}
          >
            <img src="/images/MyPortfolio/withoubackground9000.png" alt="" />
          </motion.figure>
        </div>
        <motion.div
          initial={animationFrom}
          animate={animateTo}
          exit={exit}
          transition={{ duration: 0.5 }}
          className={Portfolio.Items}
        >
          <div>
            <p>Personal Panel</p>
            <p>01</p>
            <a href="https://personal-panel.vercel.app/" target="_blank">
              <figure>
                <img
                  src="/images/MyPortfolio/6d9fedbf-c877-497b-9910-321fa29fea4bb.jpg"
                  alt=""
                ></img>
              </figure>
            </a>
          </div>
          <div>
            <p>Outdoor Dynamics</p>
            <p>02</p>
            <a
              href="https://outdoor-dynamics-slider.vercel.app/"
              target="_blank"
            >
              <figure>
                <img
                  src="/images/MyPortfolio/df611b3d-38da-44bb-83fb-eea2b351863ff.jpg"
                  alt=""
                ></img>
              </figure>
            </a>
          </div>
          <div>
            <p>Khabar Online</p>
            <p>03</p>
            <a href="https://khabar-online.vercel.app/" target="_blank">
              <figure>
                <img
                  src="/images/MyPortfolio/8970d2a6-3e46-4778-a421-057c73dfdd461.jpg"
                  alt=""
                ></img>
              </figure>
            </a>
          </div>
          <div>
            <p>Kilid</p>
            <p>04</p>
            <a href="https://kilid-mohammad24680.vercel.app/" target="_blank">
              <figure>
                <img src="/images/MyPortfolio/cover-22 (1).jpg" alt=""></img>
              </figure>
            </a>
          </div>
        </motion.div>
        <motion.div
          initial={animationFrom}
          animate={animateTo}
          exit={exit}
          transition={{ duration: 0.5 }}
          className={Portfolio.see_more}
        >
          <div>
            <Link to="/seemore">See More</Link>
          </div>
        </motion.div>
      </div>
      <div className={Portfolio.social_media}>
        <Right_Counter />
      </div>
      <motion.div
        initial={animationFrom2}
        animate={animateTo2}
        exit={exit2}
        transition={{ duration: 1.5 }}
        className={Portfolio.side_images}
      >
        <figure>
          <img src="/images/MyPortfolio/withoutbackground30.png" alt="" />
        </figure>
        <figure>
          <img src="/images/MyPortfolio/withoutbackground30.png" alt="" />
        </figure>
      </motion.div>
      <motion.div
        initial={animationFrom}
        animate={animateTo}
        exit={exit}
        transition={{ duration: 0.5 }}
        className={Portfolio.corners_page_number}
      >
        <p>04</p>
      </motion.div>
    </section>
  );
};

export default MyPortfolio;
