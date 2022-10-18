import React from "react";
import { MDBFooter } from "mdb-react-ui-kit";

export default function Footer() {
  return (
    <MDBFooter className="bg-dark text-center text-white">
      <div
        className="text-center p-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)", fontSize: "1.2rem" }}
      >
        Hackflix © Hack Academy | Tayra Cutri | 2022
      </div>
    </MDBFooter>
  );
}
