import React from "react";

import Avatar from "../Avatar/index";
import SocialLinks from "../SocialLinks/index";

const Info = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <Avatar />
      <div>
        <h1>Hi, I'm Rafi Rasheed 👋</h1>
        <h3>Intern at MakerGram  👨‍💻</h3>
        <SocialLinks />
      </div>
    </div>
  );
};

export default Info;
