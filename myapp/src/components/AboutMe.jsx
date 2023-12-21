import React from "react";
import Button from 'react-bootstrap/Button';
var dp = require("../images/Screenshot (233).png");
const AboutMe = (props) => {
  return (
    <div style={{ display: "flex",maxHeight:"500px"}}>
      <div style={{display:"flex",justifyContent:"center",alignItems:"center",width:"45%"}}>
        <img style={{maxHeight:"50%", clipPath: "circle()",objectFit:"contain" }} src={dp} alt="dp" />
      </div>
      <div style={{ display: "flex", flexDirection: "column",width:"50%",justifyContent:"center" }}>
        <h1>About Me</h1>
        <p>
          {props.intro}
        </p>
        <Button href={props.resume} target="_blank" style={{width:"50%"}} variant="secondary">Resume</Button>{' '}
      </div>
    </div>
  );
};
export default AboutMe;
