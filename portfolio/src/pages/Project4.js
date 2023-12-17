import React from "react";
import Mouse from "../components/Mouse";
import Navigation from "../components/Navigation";
import Logo from "../components/Logo";
import Button from "../components/Button";
import Project from "../components/Project";

const Project4 = () => {
  return (
    <main>
      <Mouse />
      <div className="project">
        <Navigation />
        <Logo />
        <Project projectNumber={3} />
        <Button left={"/project-3"} right={"/contact"} />
      </div>
    </main>
  );
};

export default Project4;
