import React from "react";
import { Link } from "react-router-dom";
import portfolioImg from "../images/portfolioImg.png";
import styled from "styled-components";

const ProjectItemStyles = styled.div`
  .projectItem_img {
    width: 100%;
    height: 400px;
    overflow: hidden;
    border-radius: 12px;
    display: inline-block;
    border: 3px solid var(--gray-2);
    img {
      height: 100%;
    }
  }
  .projectItem_info {
    margin-top: 1rem;
    background-color: var(--deep-dark);
    color: white;
    padding: 1rem;
    border-radius: 12px;
    font-family: "Roboto Mono", monospace;
  }
  .projectsItem_title {
    font-size: 2.2rem;
    color: white;
    font-family: "Roboto Mono", monospace;
  }
  .projectItem_desc {
    font-size: 1.6rem;
    font-family: "Roboto Mono", monospace;
    margin-top: 1rem;
  }
  @media only screen and (max-width: 768px) {
    .projectItem_img {
      height: 350px;
    }
  }
`;

export default function ProjectItem({
  img = portfolioImg,
  title = "Project Name",
  desc = "Lorem ipsum",
}) {
  return (
    <ProjectItemStyles>
      <Link to="/projects" className="projectItem_img">
        <img src={img} alt="portfolio img" />
      </Link>
      <div className="projectItem_info">
        <h3 className="projectsItem_title">{title}</h3>
        <p className="projectItem_desc">{desc}</p>
      </div>
    </ProjectItemStyles>
  );
}
