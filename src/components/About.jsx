import React from "react";
import Footer from "./Footer";
import "../styles/About.css";
const About = () => {
  return (
    <>
      <div className="about-container">
        <div style={{ textAlign: "left", color: "grey" }}>
          <h2>ABOUT ME</h2>
          <hr />
          <div className="row" style={{ color: "#fff", fontSize: "1.2rem" }}>
            <div className="col">
              <p>
                Hi! I'm Tayra. I'm 19 years old and I'm a Fullstack Developer
                Jr. I build this app in a Coding Bootcamp. I love programming
                and I try to do my best in every project. You can go to the
                Contact section and get know me better.
              </p>
            </div>
            <div className="col">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
                suscipit eligendi debitis veritatis hic corporis magni nostrum
                nobis accusamus vero, voluptatum ratione eveniet necessitatibus
                ad aspernatur perspiciatis dolorum odio consectetur!
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
