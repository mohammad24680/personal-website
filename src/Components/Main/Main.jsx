import React from "react";
import "../../Styles/global/global.scss";
import AboutMe from "../AboutMe/AboutMe";
import Contact_Me from "../Contact_Me/Contact_Me";
import Header from "../Header/Header";
import MyPortfolio from "../MyPortfolio/MyPortfolio";
import MyServices from "../MyServices/MyServices";
import MySkills from "../MySkills/MySkills";
import ScrollUpButton from "../ScrrollUpButton/ScrollUpButton";
const Main = () => {
  return (
    <main>
      <Header />
      <AboutMe />
      <MySkills />
      <MyServices />
      <MyPortfolio />
      <Contact_Me />
      <ScrollUpButton />
    </main>
  );
};

export default Main;
