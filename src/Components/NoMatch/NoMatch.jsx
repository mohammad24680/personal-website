import React from "react";
import { Link } from "react-router-dom";
import NotFound from "../../Styles/NoMatch/PageNotFound.module.scss";
const NoMatch = () => {
  return (
    <section className={NotFound.information_container}>
      <div className={NotFound.information}>
        <div className={NotFound.information_box}>
          <h4>Page Not Found</h4>
        </div>
        <div className={NotFound.see_more}>
          <div>
            <Link to="/">Home</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NoMatch;
