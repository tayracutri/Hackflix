import React from "react";
import Footer from "./Footer";
import "../styles/About.css";

const Contact = () => {
  return (
    <>
      <div className="about-container">
        <div style={{ textAlign: "left", color: "grey" }}>
          <h2>CONTACT ME</h2>
          <hr />
          <div className="row" style={{ color: "#fff", fontSize: "1.2rem" }}>
            <div className="col">
              <p>
                You can find me on{" "}
                <a
                  href="https://www.linkedin.com/in/tayracutri/"
                  target="blank"
                >
                  LinkedIn
                </a>{" "}
                and take a look to my CV and recent activity. Also you can surf
                trough my{" "}
                <a
                  href="https://tayracutri-portfolio.vercel.app/"
                  target="blank"
                >
                  online portfolio
                </a>{" "}
                online portfolio. My CV is summarise there! And last but not
                least you can find me on my{" "}
                <a href="https://github.com/tayracutri" target="blank">
                  GitHub
                </a>{" "}
                and take a look to my latest projects.
              </p>
            </div>
            <div className="col">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
              dolorem commodi ipsam obcaecati rem reiciendis suscipit,
              doloremque recusandae consectetur laboriosam dignissimos esse.
              Quae fugiat optio animi. At aliquam consequatur aspernatur!
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
