import React from "react";
import { FaGithub } from "react-icons/lib/fa";

import {
  Wrapper,
  Link,
  Title,
  Points,
  Point,
  //GithubUnderlinedLink
} from "../../shared/styles/styles-projects";
import { Section, SectionTitle } from "../../shared/styles/styled-components";

import { projects } from "../../data/projects";

const Projects = () => {
  return (
    <Section>
      <SectionTitle>Internship activity log 👨‍💻</SectionTitle>
      <Wrapper>
        {projects.map(project => (
          <div key={project.date}>
            <Link target="_blank" href={project.link} rel="noopener">
              <Title>{project.title}</Title>
            </Link>
            <Points>
              <Point>
                Date: { project.date}{" "}
              </Point>
              <Point>
                {project.description}{" "}
              </Point>
            </Points>
          </div>
        ))}
      </Wrapper>
    </Section>
  );
};

export default Projects;

/*    
                <GithubUnderlinedLink
                  href={
                    project.github.githubHref === null
                      ? null
                      : project.github.githubHref
                  }
                  style={{ textDecoration: "none" }}
                  target="_blank"
                  rel="noopener"
                >
                  {project.github.name === null ? null : (
                    <FaGithub style={{ fontSize: "30px" }} />
                  )}
                </GithubUnderlinedLink>

<GithubUnderlinedLink
href={
  project.github.githubHref === null
    ? null
    : project.github.githubHref
}
style={{ textDecoration: "none" }}
target="_blank"
rel="noopener"
>
{project.github.name === null ? null : (
  <FaGithub style={{ fontSize: "30px" }} />
)}
</GithubUnderlinedLink>
*/
