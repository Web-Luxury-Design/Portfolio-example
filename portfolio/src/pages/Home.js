import React from "react";
import Navigation from "../components/Navigation";
import Mouse from "../components/Mouse";
import SocialNetwork from "../components/SocialNetwork";
import DynamicText from "../components/DynamicText";
import Button from "../components/Button";

const Home = () => {
  return (
    <div>
      <Mouse />
      <div className="home">
        <Navigation />
        <SocialNetwork />
        <div className="home-main">
          <div className="main-content">
            <h1>JS AGENCY</h1>
            <h2>
              <DynamicText />
            </h2>
          </div>
        </div>
        <Button right={"/project-1"} />
      </div>
    </div>
  );
};

export default Home;
