import React from "react";
import PText from "../components/PText";
import aboutPageImg from "../images/aboutPageImg.png";
import styled from "styled-components";
import AboutInfoItem from "../components/AboutInfoItem";
import ContactBanner from "../components/ContactBanner";

const AboutPageStyles = styled.div`
  padding: 20rem 0 10rem 0;
  .top-section {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }
  .left {
    flex: 3;
  }
  .right {
    flex: 2;
  }
  .about_subheading {
    font-size: 2.2rem;
    margin-bottom: 2rem;
    color: white;
    font-family: "Roboto Mono", monospace;
    span {
      background-color: var(--deep-dark);
      padding: 0.5rem;
      border-radius: 8px;
    }
  }
  .about_heading {
    font-size: 3.6rem;
    margin-bottom: 3rem;
    color: white;
    font-family: "Roboto Mono", monospace;
  }
  .about_info {
    margin-bottom: 4rem;
    .para {
      max-width: 100%;
    }
  }
  .right {
    img {
      border: 2px solid var(--gray-1);
      filter: grayscale(60%);
    }
  }
  .about_info_items {
    margin-top: 15rem;
  }
  .about_info_item {
    margin-bottom: 10rem;
  }
  .about_info_heading {
    font-size: 3.6rem;
    text-transform: uppercase;
    color: white;
  }
  button {
    font-family: "Roboto Mono", monospace;
    font-size: 2.2rem;
    background-color: ${(props) =>
      props.outline ? "transparent" : "var(--gray-1)"};
    padding: 0.7em 2em;
    border-radius: 10px;
    display: inline-block;
    border: 2px solid var(--gray-1);
    border: none;
    color: ${(props) => (props.outline ? "var(--gray-1)" : "black")};
  }

  @media only screen and (max-width: 768px) {
    padding: 10rem 0;
    .top-section {
      flex-direction: column;
      gap: 5rem;
    }
    .about__subheading {
      font-size: 1.8rem;
    }
    .about__heading {
      font-size: 2.8rem;
    }
    .about__info__heading {
      font-size: 3rem;
    }
    .resumeButton {
      font-size: 1.8rem;
    }
  }
`;

export default function About() {
  return (
    <>
      <AboutPageStyles>
        <div className="container">
          <div className="top-section">
            <div className="left">
              <p className="about_subheading">
                Hi, I am <span>Caitlin Talbert</span>
              </p>
              <h2 className="about_heading">
                A frontend web developer and designer
              </h2>
              <div className="about_info">
                <PText>
                  My journey to programming started from a simple google search
                  of "jobs for introverts". Before attending BloomTech I was
                  studying nutrition in grad school and I honestly hated it. I
                  knew that nutrition wasn't for me, but I didn't know what else
                  to do so I kept going! Diagnosing, treating, and working with
                  patients just wasn't for me, and it was exhausting. <br />
                  So I found out about programming, took a few free classes, and
                  loved it! I enjoy problem solving, designing, and critical
                  thinking (and also not interacting with a lot of people).. so
                  coding has been a perfect fit for me. <br />
                  So far I am enjoying this new part of my life and I look
                  forward to my future as a frontend web developer & UX
                  designer!
                </PText>
              </div>

              <a href="./WebDev_Resume.pdf" download="WebDev_Resume.pdf">
                <button type="submit">
                  <b>Download Resume</b>
                </button>
              </a>
            </div>
            <div className="right">
              <img src={aboutPageImg} alt="img of me" />
            </div>
          </div>
          <div className="about_info_items">
            <div className="about_info_item">
              <h1 className="about_info_heading">Education</h1>
              <AboutInfoItem
                title="School"
                items={["Bloom Institute of Technology"]}
              />
              <AboutInfoItem
                title="Web Development Certifications"
                items={["Full Stack Web Development"]}
              />
              <AboutInfoItem
                title="Web Design Certifications"
                items={["Google UX Design"]}
              />
            </div>
            <div className="about_info_item">
              <h1 className="about_info_heading">My Skills</h1>
              <AboutInfoItem
                title="Front End"
                items={["HTML, CSS, JavaScript, React, Redux"]}
              />
              <AboutInfoItem title="Back End" items={["Node, Express, SQL"]} />
              <AboutInfoItem title="Design" items={["Figma, Adobe XD"]} />
            </div>
            <div className="about_info_item">
              <h1 className="about_info_heading">Experiences</h1>
              <AboutInfoItem
                title="Team Projects"
                items={["CoderHeroes, JounceIn, AnywhereFit"]}
              />
              <AboutInfoItem
                title="Frontend"
                items={[
                  "Developed Sign-up, Login, Logout, and mobile responsiveness",
                ]}
              />
              <AboutInfoItem
                title="Design"
                items={[
                  "Re-designed admin flow, checkout page, and general layout and flow",
                ]}
              />
            </div>
          </div>
        </div>
        <ContactBanner />
      </AboutPageStyles>
    </>
  );
}
