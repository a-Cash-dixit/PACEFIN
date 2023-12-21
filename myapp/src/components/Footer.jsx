import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
let d = new Date();
let year = d.getFullYear();
const Footer = () => {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center",padding:"2rem",background:"lightgray" ,textAlign:"center",fontSize:"large"}}
    >
      <h1>Open To Work</h1>
      <p>
        I'm currently looking for full-time React Developer/Frontend Developer
        opportunities! If you know of any positions available, if you have any
        suggestions, or if you just want to say hi, please feel free to email me
        at, akashdixitknp@gmail.com.
      </p>
      <div className="footer-copyright text-center py-3">
        ©{year} Copyright:
        <a
          href="https://github.com/a-Cash-dixit/PACEFIN"
          style={{ textDecoration: "none" }}
          target="_blank"
        >
          Akash Dixit
        </a>
      </div>
    </div>
  );
};

export default Footer;
