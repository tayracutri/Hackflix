import React from "react";
import { Link } from "react-router-dom";
import "../styles/Error.css";
import Footer from "./Footer";

const Error = () => {
  return (
    <>
      <div className="error-container">
        <div className="error-text">
          <h1>Are you lost?</h1>
          <p>
            We couldn't find that page. You'll find much more titles to explore
            on home page.
          </p>
        </div>
        <div className="error-redirect">
          <Link to="/">
            <button
              className="btn btn-danger"
              style={{
                backgroundColor: "#bb0606",
                border: "1px solid #bb0606",
              }}
            >
              Hackflix Home
            </button>
          </Link>

          <span>Error Code: 404</span>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Error;
