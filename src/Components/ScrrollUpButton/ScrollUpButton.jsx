import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useRef, useState } from "react";
import ScrollUp_Button from "../../Styles/ScrollUp_Button/ScrollUp_Button.module.scss";
const ScrollUpButton = () => {
  // Visibile status
  const [scrollButtonVisible, setScrollButtonVisible] = useState(false);
  // Button ref
  const buttonRef = useRef(null);
  // When mounted detect status

  const scroolUp = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.onscroll = () => {
      if (
        document.body.scrollTop > 1500 ||
        document.documentElement.scrollTop > 1500
      ) {
        setScrollButtonVisible(true);
      } else {
        setScrollButtonVisible(false);
      }
    };
  }, []);

  useEffect(() => {
    if (scrollButtonVisible) {
      if (buttonRef.current) {
        buttonRef.current.style.display = "block";
      }
    } else {
      if (buttonRef.current) {
        buttonRef.current.style.display = "none";
      }
    }
  }, [scrollButtonVisible]);
  return (
    <button
      ref={buttonRef}
      className={[ScrollUp_Button.button]}
      onClick={scroolUp}
    >
      <FontAwesomeIcon icon={faArrowUp} />
    </button>
  );
};

export default ScrollUpButton;
