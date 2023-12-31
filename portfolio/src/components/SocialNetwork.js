import React from "react";

const SocialNetwork = () => {
  const anim = () => {
    const icons = document.querySelectorAll(".social-network a");
    icons.forEach((icon) => {
      icon.addEventListener("mouseover", (e) => {
        icon.style.transform = `translate(${e.offsetX - 20}px, ${
          e.offsetY - 13
        }px)`;
      });
      icon.addEventListener("mouseleave", () => {
        icon.style.transform = "";
      });
    });
  };

  return (
    <div className="social-network">
      <ul className="content">
        <a
          href="https://ww.facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover"
          onMouseOver={anim}
        >
          <li className="fab fa-facebook-f"></li>
        </a>
        <a
          href="https://ww.twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover"
          onMouseOver={anim}
        >
          <li className="fab fa-twitter"></li>
        </a>
        <a
          href="https://ww.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover"
          onMouseOver={anim}
        >
          <li className="fab fa-instagram"></li>
        </a>
      </ul>
    </div>
  );
};

export default SocialNetwork;
