import React from "react";
import Button from 'react-bootstrap/Button';
var dp = require("../components/286660725_ffdbdf3481.jpg");
const AboutMe = () => {
  return (
    <div style={{ display: "flex", justifyContent: "space-around",padding:"2%",background:"lightgray" }}>
      <div style={{width:"50%",display:"flex",justifyContent:"center"}}>
        <img style={{ clipPath: "circle()" }} src={dp} alt="dp" />
      </div>
      <div style={{ display: "flex", flexDirection: "column",width:"50%",justifyContent:"center" }}>
        <h1>About Me</h1>
        <p>
          My name is Akash Dixit. I’m an under-graduate of 2024 from Indian
          Institute Of Information Technology at Jabalpur with a degree in Bachelors of Electronics
          and Communications . I'm most passionate about giving back to the community,
          and my goal is to pursue this passion within the field of software
          engineering. In my free time I like working on open source projects.
        </p>
        <Button href="https://drive.google.com/file/d/1ATlBXNY3HA7hDY7AWGIYRH4IsEsguu7s/view?usp=sharing" target="_blank" style={{width:"50%"}} variant="secondary">Resume</Button>{' '}
      </div>
    </div>
  );
};
export default AboutMe;
