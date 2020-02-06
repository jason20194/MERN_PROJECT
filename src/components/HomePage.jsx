import React from "react";
import classes from "../components/Background.module.css";
import { Link } from "react-router-dom";
import Guilin from "../images/guilin.jpg";
import styles from "../components/Background.module.css";

const HomePage = () => {
  return (
    <>
      <div className={classes.Content}>
        <div className={classes.SubContent}>
          <h1 className={classes.font2}>Welcome to Medicine Power</h1>
          <p>飛藥堂參茸海味</p>
          <Link to={`/all_products/`}>
            <button type="button" className="btn btn-outline-dark">
              View Products
            </button>
          </Link>
          <div></div>
          <div></div>
        </div>
      </div>
      <br></br>
      <div>
        <h1 className="home-header2 ml-4"> About our products </h1>
      </div>
      <img alt="" className={styles.ginimg} src={Guilin} />
      <div className={classes.nextContent}></div>
    </>
  );
};

export default HomePage;
