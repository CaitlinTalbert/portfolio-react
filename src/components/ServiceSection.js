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
        <SectionTitle heading="Services" subheading="what I can do for you" />

        <div className="services_allItems">
          <ServicesSectionItem
            icon={<MdDesktopMac />}
            title="Web Design"
            desc="I design websites using figma, UX/UI design, etc."
          />
          <ServicesSectionItem
            icon={<MdCode />}
            title="Web Development"
            desc="I am experienced in full stack web development, including front end and back end development. I know HTML, CSS, JavaScript, React, Redux, SQL, and python."
          />
          <ServicesSectionItem
            icon={<MdPhonelinkSetup />}
            title="Add Development"
            desc="Including design and functionality of app development"
          />
        </div>
      </div>
    </ServicesItemStyles>
  );
}
