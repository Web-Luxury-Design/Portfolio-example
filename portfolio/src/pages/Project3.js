import React from "react";
import Mouse from "../components/Mouse";
import Navigation from "../components/Navigation";
import Logo from "../components/Logo";
import Button from "../components/Button";
import Project from "../components/Project";

const Project3 = () => {
  return (
    <main>
      <Mouse />
      <div className="project">
        <Navigation />
        <Logo />
        <Project projectNumber={2} />
        <Button left={"/project-2"} right={"/project-4"} />
      </div>
    </main>
  );
};

export default Project3;
