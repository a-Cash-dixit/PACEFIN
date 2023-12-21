import React from "react";
import TechSkills from "./TechSkills";
import SoftSkills from "./SoftSkills";
const Skills = () => {
    const [skill,setSkill]=React.useState(true);
  return (
    <div style={{margin:"1rem"}}>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <h1>Skills</h1>
      </div>
      <div style={{display:"flex",justifyContent:"space-around",textAlign:"center",cursor:"pointer"}}>
        <div onClick={()=>{setSkill(true)}} style={{fontSize:"large",width: "50%",background:`${skill?"lightgray":"white"}`}}>
            Technical Skills
        </div>
        <div onClick={()=>{setSkill(false)}} style={{fontSize:"large",width:"50%",background:`${skill?"white":"lightgray"}`}}>
            Soft Skills
        </div>
      </div>
      {skill ? <TechSkills /> : <SoftSkills />}
    </div>
  );
};
export default Skills;
