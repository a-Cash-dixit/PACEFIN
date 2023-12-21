import React from "react";
var logo = require("../components/srijcon.png");
const Experience = () => {
  return (
    <div style={{display:"flex",flexDirection:"column",justifyItems:"center",padding:"1rem"}}>
        <div style={{display:"flex",justifyContent:"center"}}>
            <h1>Experience</h1>
        </div>
    <div
      style={{ display: "flex", justifyContent: "space-around", padding: "2%" }}
    >
      <div style={{  display: "flex", justifyContent: "center" ,flexDirection:"column"}}>
      <img style={{height:"10rem" }} src={logo} alt="dp" />
        <br></br>
        <p>Frontend Developer</p>
        <p>May 2022-June 2022</p>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection:"column"
        }}
      >
        <img style={{height:"10rem" }} src={logo} alt="dp" />
        <br></br>
        <p>Frontend Developer</p>
        <p>May 2022-June 2022</p>
      </div>
    </div>
    </div>
  );
};
export default Experience;
