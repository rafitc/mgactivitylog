import React from "react";
import { FaEnvelope, FaTwitter, FaGithub } from "react-icons/lib/fa";

import styles from "./socialLinksStyles.module.css";

const SocialLinks = () => {
  return (
    <div className={styles.socialLinks}>
      <ul>
        <li>
          <a href="mailto:mail@rafirasheed.co">
            <FaEnvelope />
          </a>
        </li>
        <li>
          <a href="https://github.com/rafitc">
            <FaGithub />
          </a>
        </li>
        <li>
          <a href="https://twitter.com/rafitc99">
            <FaTwitter />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SocialLinks;
