import React from "react";
import PText from "./PText";
import SectionTitle from "./SectionTitle";
import Button from "./Button";
import perkUp from "../images/perkUp.png";
import styled from "styled-components";

const AboutSectionStyle = styled.div`
  padding: 10rem 0;
  .container {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    text-align: left;
  }
  .aboutSection_left,
  .aboutSection_right {
    flex: 1;
  }
  .aboutSection_right {
    border: 2px solid var(--gray-1);
    font-size: 0;
  }
  .section_title {
    text-align: left;
  }
  .para {
    margin-top: 2rem;
    margin-left: 0;
  }
  .aboutSection_buttons {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 2rem;
    margin-top: 2rem;
  }
  @media only screen and (max-width: 950px) {
    .aboutSection_left {
      flex: 4;
    }
    .aboutSection_right {
      flex: 3;
    }
  }
  @media only screen and (max-width: 768px) {
    .container {
      flex-direction: column;
      text-align: center;
    }
    .aboutSection_left,
    .aboutSection_right {
      width: 100%;
    }
    .aboutSection_right {
      margin-top: 3rem;
    }
    .section_title {
      text-align: center;
    }
    .para {
      margin: 0 auto;
      margin-top: 2rem;
    }
    .aboutSection_buttons {
      flex-direction: column;
      gap: 0;
      .button-wrapper,
      a {
        width: 100%;
        text-align: center;
      }
    }
  }
`;

export default function AboutSection() {
  return (
    <AboutSectionStyle>
      <div className="container">
        <div className="aboutSection_left">
          <SectionTitle
            subheading="Let me introduce myself"
            heading="About Me"
          />
          <PText>
            I am a full stack web developer and designer from Austin, TX. I
            create professional and creative websites. I love simple,
            minimalistic designs and always try to include unique views to the
            users through my designs.
          </PText>
          <div className="aboutSection_buttons">
            <Button btnLink="/projects" btnText="My Work" />
            <Button btnLink="/about" btnText="Read More" outline />
          </div>
        </div>
        <div className="aboutSection_right">
          <img src={perkUp} alt="" />
        </div>
      </div>
    </AboutSectionStyle>
  );
}
