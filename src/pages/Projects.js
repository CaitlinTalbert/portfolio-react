import React, { useEffect, useState } from "react";
import SectionTitle from "../components/SectionTitle";
import styled from "styled-components";
import { MdSearch } from "react-icons/md";
import ProjectItem from "../components/ProjectItem";
import projects from "../data/projects";

const ProjectsStyles = styled.div`
  padding: 10rem 0;
  .projects_allItems {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 5rem;
    margin-top: 5rem;
  }
  .projects_searchbar {
    position: relative;
    width: 300px;
    margin-top: 5rem;
  }
  .projects_searchbar input {
    width: 100%;
    font-size: 2rem;
    padding: 0.8rem;
    color: var(--black);
    border-radius: 6px;
    outline: none;
    border: none;
    font-family: "Roboto Mono", monospace;
  }
  .projects_searchbar .searchIcon {
    position: absolute;
    width: 2rem;
    right: 1rem;
  }
  .projects_searchbar .searchIcon path {
    color: var(--deep-dark);
  }
  @media only screen and (max-width: 768px) {
    .projects_searchbar,
    .projects_searchbar form,
    .projects_searchbar input {
      width: 100%;
    }
  }
`;

export default function Projects() {
  const [search, setSearch] = useState("");
  const [projectData, setProjectData] = useState(projects);

  useEffect(() => {
    if (search === "") return;
    setProjectData(() =>
      projects.filter((item) =>
        item.name.toLowerCase().match(search.toLowerCase())
      )
    );
  }, [search]);

  function handleSearch(e) {
    e.preventDefault();
    setSearch(e.target.value);
    if (!e.target.value.length > 0) {
      setProjectData(projects);
    }
  }

  return (
    <ProjectsStyles>
      <div className="container">
        <SectionTitle heading="Projects" subheading="some of my recent work" />
        <div className="projects_searchbar">
          <form>
            <input
              type="text"
              value={search}
              onChange={handleSearch}
              placeholder="Project Name"
            />
            <MdSearch className="searchIcon" />
          </form>
        </div>
        <div className="projects_allItems">
          {projectData.map((item) => (
            <ProjectItem
              key={item.id}
              title={item.name}
              desc={item.desc}
              img={item.img}
            />
          ))}
        </div>
      </div>
    </ProjectsStyles>
  );
}
