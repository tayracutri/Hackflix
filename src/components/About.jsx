import React from "react";
import Footer from "./Footer";
import "../styles/About.css";
const About = () => {
  return (
    <div className="about-container">
      <div className="container">
        <div>
          <h2>ABOUT US</h2>
          <hr />
          <div className="row">
            <div className="col">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repellendus voluptatum tempora animi nemo harum pariatur
                praesentium molestias nisi quos quam sint atque placeat, ad sed
                a reiciendis, aperiam amet deleniti! Nisi non ex nemo quibusdam
                soluta voluptate, quia, doloremque unde nesciunt iusto porro
                mollitia voluptatem sed distinctio.
              </p>
            </div>
            <div className="col">
              <p>
                Cupiditate culpa a laborum quia tempora iste corporis, veniam
                totam fuga error doloremque repellendus tenetur labore maiores
                nesciunt voluptates dolores nostrum blanditiis, nisi ipsam
                possimus unde architecto. Ut, cum sed? Deserunt eveniet nobis
                consectetur perspiciatis architecto ipsum voluptatibus ab, odio
                doloremque natus, nostrum assumenda distinctio ducimus
                repellendus atque tempore at asperiores. Rem eius corporis
                soluta voluptatum voluptate reiciendis esse ut?
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
