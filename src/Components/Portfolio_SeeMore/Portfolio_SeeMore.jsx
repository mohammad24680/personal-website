import React from "react";
import Portfolio from "../../Styles/Portfilio/Portfolio.module.scss";
import { Right_Counter } from "../SocialMedia_PageNumber/Right_Counter";
const Portfolio_SeeMore = () => {
  return (
    <section className={Portfolio.MyPortfolio_items}>
      <div className={Portfolio.MyPortfolio_items_information}>
        <div className={Portfolio.information_box}>
          <figure>
            <img src="/images/Header/Red_circle.png" alt="" />
          </figure>
          <h2>
            MY PO <span>R</span>TFOLIO
          </h2>
          <figure>
            <img src="/images/MyPortfolio/withoubackground9000.png" alt="" />
          </figure>
        </div>
        <div className={Portfolio.Items}>
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
          <div>
            <p>Calculator</p>
            <p>05</p>
            <a href="https://calculator-zeta-dun.vercel.app/" target="_blank">
              <figure>
                <img
                  src="/images/MyPortfolio/91ce77da-acb9-4532-8507-abcb39691ebb.png"
                  alt=""
                ></img>
              </figure>
            </a>
          </div>
          <div>
            <p>Reg_Form</p>
            <p>06</p>
            <a
              href="https://reg-form-mohammad24680.vercel.app/"
              target="_blank"
            >
              <figure>
                <img
                  src="/images/MyPortfolio/b301a931-1358-4450-844e-e35a9cd79569.jpg"
                  alt=""
                ></img>
              </figure>
            </a>
          </div>
          <div>
            <p>slider</p>
            <p>07</p>
            <a href="https://slider-with-jquery.vercel.app/" target="_blank">
              <figure>
                <img
                  src="/images/MyPortfolio/55b5a6c9-7db1-4b2c-a111-c39301b35da6.jpg"
                  alt=""
                ></img>
              </figure>
            </a>
          </div>
          <div>
            <p>Snap</p>
            <p>08</p>
            <a href="https://snap-delta.vercel.app/" target="_blank">
              <figure>
                <img
                  src="/images/MyPortfolio/a60e64b7-3b32-45fc-815b-aa3c6db4c69c.png"
                  alt=""
                ></img>
              </figure>
            </a>
          </div>
        </div>
      </div>
      <div className={Portfolio.see_more}></div>
      <div className={Portfolio.social_media}>
        <Right_Counter />
      </div>
      <div className={Portfolio.side_images}>
        <figure>
          <img src="/images/MyPortfolio/withoutbackground30.png" alt="" />
        </figure>
        <figure>
          <img src="/images/MyPortfolio/withoutbackground30.png" alt="" />
        </figure>
      </div>
    </section>
  );
};

export default Portfolio_SeeMore;
