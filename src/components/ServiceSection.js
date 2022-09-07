import React from "react";
import SectionTitle from "./SectionTitle";
import ServicesSectionItem from "./ServicesSectionItem";
import styled from "styled-components";
import { MdDesktopMac, MdCode, MdPhonelinkSetup } from "react-icons/md";

const ServicesItemStyles = styled.div`
  padding: 10rem 0;
  .services_allItems {
    display: flex;
    gap: 10rem;
    justify-content: space-between;
    margin-top: 5rem;
  }
  @media only screen and (max-width: 768px) {
    .services_allItems {
      flex-direction: column;
      max-width: 350px;
      margin: 0 auto;
      margin-top: 5rem;
      gap: 5rem;
    }
  }
`;

export default function ServiceSection() {
  return (
    <ServicesItemStyles>
      <div className="container">
        <SectionTitle heading="Skills" subheading="" />

        <div className="services_allItems">
          <ServicesSectionItem
            icon={<MdDesktopMac />}
            title="UX Design"
            desc="I can design websites using Figma and Adobe XD to optimize the interaction between humans and the products. My role as a designer is make a product that is usable, enjoyable, and accessible. "
          />
          <ServicesSectionItem
            icon={<MdCode />}
            title="Web Development"
            desc="I am experienced in full stack web development, but my passions lie with frontend development. I write code with HTML, CSS, JavaScript and React. I love frontend development because it allows me to express my love for problem solving and creativity."
          />
          <ServicesSectionItem
            icon={<MdPhonelinkSetup />}
            title="Communication & Team Work"
            desc="At my time at BloomTech learning development, I have learned that the most important part of working with other people is communication. As a developer, I often work with cross-functional teams where team work and communication is un-avoidable. It is a skill that continues to improve and must always be worked on."
          />
        </div>
      </div>
    </ServicesItemStyles>
  );
}
