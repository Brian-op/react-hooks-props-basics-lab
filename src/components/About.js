import React from "react";
import Links from "./Links";

function About({ bio, links }) {
  return (
    <aside id="about">
      {bio ? <p>{bio}</p> : null}
      <Links github={links.github} linkedin={links.linkedin} />
    </aside>
  );
}

export default About;
