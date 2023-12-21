import React from "react";
import ProjectCard from "./ProjectCard";
const Projects = () => {
  return (
    <div style={{ display: "flex", flexDirection:"column",alignItems:"center",background:"lightgray",padding:"1rem" }}>
      <div>
        <h1>Projects</h1>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div style={{ display: "flex",gap:"1rem",margin:"auto" }}>
          <ProjectCard title="Youtube Clone" sub="individual" demoURL="https://bhagwawatches.netlify.app/" code="https://github.com/a-Cash-dixit/youtubeclone" desc=" Search and Watch videos just like in youtube.Also stores the history of the user’s history."/>
          <ProjectCard title="Twitter Clone" sub="individual" demoURL="https://twitter-one-mu.vercel.app/" code="https://github.com/a-Cash-dixit/Bhagwa2" desc=" I have created a mini version of Twitter using Firebase for backend and NextJS for frontend." />
        </div>
        <div style={{ display: "flex",gap:"1rem" }}>
          <ProjectCard title="News App" sub="individual" demoURL="https://github.com/a-Cash-dixit/News-App/blob/main/README.md" code="https://github.com/a-Cash-dixit/News-App" desc="Used one news API to showcase different categories of news using react." />
          <ProjectCard title="Notebook" sub="individual" demoURL="https://github.com/a-Cash-dixit/iNotes/blob/main/README.md" code="https://github.com/a-Cash-dixit/iNotes" desc="Users can signUp and login using email and password , search ,create and delete notes" />
        </div>
      </div>
    </div>
  );
};
export default Projects;
