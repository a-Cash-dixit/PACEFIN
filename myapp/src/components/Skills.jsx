import React from "react";
import ProgressLine from "./ProgressLine";

const Skills=()=> {
  return (
    <>
    <div style={{display:"flex",flexDirection:"column",padding:"1rem"}}>
        <div style={{display:"flex",justifyContent:"center"}}>
            <h1>
                Skills
            </h1>
        </div>
    
      <ProgressLine
        label="Data Structures and Algorithms"
        backgroundColor="lightblue"
        visualParts={[
          {
            percentage: "93%",
            color: "indianred"
          }
        ]}
      />
      <ProgressLine
        label="React"
        backgroundColor="lightblue"
        visualParts={[
          {
            percentage: "83%",
            color: "indianred"
          }
        ]}
      />
      <ProgressLine
        label="HTML/CSS"
        backgroundColor="lightblue"
        visualParts={[
          {
            percentage: "83%",
            color: "indianred"
          }
        ]}
      />
      <ProgressLine
        label="Javascript"
        backgroundColor="lightblue"
        visualParts={[
          {
            percentage: "73%",
            color: "indianred"
          }
        ]}
      />
      <ProgressLine   label="SQL"
        backgroundColor="lightblue"
        visualParts={[
          {
            percentage: "63%",
            color: "indianred"
          }
        ]}
      />
      </div>
    </>
    
  );
}
export default Skills;
