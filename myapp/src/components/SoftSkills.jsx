import React from "react";
import ProgressLine from "./ProgressLine";

const SoftSkills=()=> {
  return (
    <>
    <div style={{display:"flex",flexDirection:"column",padding:"1rem"}}>
    
      <ProgressLine
        label="Goal-Oriented"
        backgroundColor="lightblue"
        visualParts={[
          {
            percentage: "93%",
            color: "indianred"
          }
        ]}
      />
      <ProgressLine
        label="Problem Solving"
        backgroundColor="lightblue"
        visualParts={[
          {
            percentage: "83%",
            color: "indianred"
          }
        ]}
      />
      <ProgressLine
        label="Collaboration"
        backgroundColor="lightblue"
        visualParts={[
          {
            percentage: "83%",
            color: "indianred"
          }
        ]}
      />
      <ProgressLine
        label="Empathy"
        backgroundColor="lightblue"
        visualParts={[
          {
            percentage: "73%",
            color: "indianred"
          }
        ]}
      />
      <ProgressLine   label="Creativity"
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
export default SoftSkills;
