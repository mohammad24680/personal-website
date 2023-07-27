import React, { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs from "emailjs-com";
import ContactMe from "../../Styles/Contact_Me/ContactMe.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { motion } from "framer-motion";
library.add(faGithub, faLinkedinIn, faInstagram);
const animationFrom = { opacity: 0, x: 100 };
const animateTo = { opacity: 1, x: 0 };
const exit = { opacity: 0, x: 100 };
const animationFrom2 = { opacity: 0 };
const animateTo2 = { opacity: 1 };
const exit2 = { opacity: 0 };
import {
  faGithub,
  faLinkedinIn,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
toast.configure();
const Contact_Me = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState(false);
  const [message, setMessage] = useState("");
  const [emailSent, setEmailSent] = useState(false);
  const submit = () => {
    if (name && email && message && validEmail) {
      const serviceId = "service_fct2fyw";
      const templateId = "template_kj63yzr";
      const userId = "tMoVCEkfoRAqlQH5_";
      const templateParams = {
        name,
        email,
        message,
      };
      emailjs
        .send(serviceId, templateId, templateParams, userId)
        .then((response) => console.log(response))
        .then((error) => console.log(error));

      setName("");
      setEmail("");
      setMessage("");
      setEmailSent(true);
      toast.success("succes", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 3000,
      });
    } else {
      toast.error("Please fill in all fields", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 3000,
      });
    }
  };
  const isValidEmail = () => {
    const regex =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/gm;
    setValidEmail(regex.test(email));
  };

  return (
    <section className={ContactMe.ContactMe_items}>
      <div className={ContactMe.information_box}>
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
          CONT <span>A</span>CT ME
        </motion.h2>
      </div>
      <div className={ContactMe.ContactMe_items_information}>
        <motion.div
          initial={animationFrom2}
          animate={animateTo2}
          exit={exit2}
          transition={{ duration: 1 }}
          className={ContactMe.form}
        >
          <motion.figure
            initial={animationFrom}
            animate={animateTo}
            exit={exit}
            transition={{ duration: 0.5 }}
          >
            <img src="/images/Contact_Me/withoutbackground922.png" alt="" />
          </motion.figure>
          <h4>Get in touch</h4>
          <div>
            <input
              type="text"
              placeholder="Full Name "
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <input
              type="email"
              placeholder="Enter Email"
              value={email}
              onKeyUp={isValidEmail}
              onChange={(e) => setEmail(e.target.value)}
              className={
                email != "" && !validEmail ? ContactMe.invalid_email : null
              }
            />
          </div>
          <div>
            <textarea
              placeholder="Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>
          <div className={ContactMe.Click_Me}>
            <button onClick={submit}>Send</button>
          </div>
        </motion.div>
        <motion.div
          initial={animationFrom2}
          animate={animateTo2}
          exit={exit2}
          transition={{ duration: 1 }}
          className={ContactMe.social_media}
        >
          <motion.figure
            initial={animationFrom}
            animate={animateTo}
            exit={exit}
            transition={{ duration: 0.5 }}
          >
            <img src="/images/Contact_Me/withoubackground141.png" alt="" />
          </motion.figure>
          <div className={ContactMe.main_header}>
            <h4>Nice to meet you, i will chat you soon.</h4>
          </div>
          <div>
            <h5>Email</h5>
            <a href="mailto:mohammad.bagheri24680@gmail.com">
              mohammad.bagheri 24680@gmail.com
            </a>
          </div>
          <div>
            <h5>Phone Number</h5>
            <a href="tel:09332828110">+98 933 282 8110</a>
          </div>
          <div>
            <h5>Freelance</h5>
            <a>Available</a>
          </div>
          <div>
            <h5>Address</h5>
            <a>Iran,Tehran</a>
          </div>
          <div className={ContactMe.header_corner_right_midlle}>
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
          </div>
        </motion.div>
      </div>
      <motion.div
        initial={animationFrom}
        animate={animateTo}
        exit={exit}
        transition={{ duration: 0.5 }}
        className={ContactMe.side_images}
      >
        <figure>
          <img src="/images/Contact_Me/withoutbackground77.png" alt="" />
        </figure>
        <figure>
          <img src="/images/Header/Red_circle.png" alt="" />
        </figure>
      </motion.div>
      <motion.div
        initial={animationFrom}
        animate={animateTo}
        exit={exit}
        transition={{ duration: 0.5 }}
        className={ContactMe.corners_page_number}
      >
        <p>05</p>
      </motion.div>
    </section>
  );
};

export default Contact_Me;
