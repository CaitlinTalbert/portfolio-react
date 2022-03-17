import React from "react";
import Me2 from "../images/me2.png";
import PText from "./PText";
import Button from "./Button";
import { AiOutlineArrowDown } from "react-icons/ai";
import styled from "styled-components";

const HeroStyles = styled.div`
  .hero {
    font-family: "Roboto Mono", monospace;
    color: var(--gray-1);
    height: 100vh;
    min-height: 1000px;
    width: 100%;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }
  .hero_heading {
    color: var(--gray-1);
    color: white;
    font-family: "Roboto Mono", monospace;
    font-size: 2rem;
    font-weight: 1;
    margin-bottom: -2rem;
    position: relative;
    span {
      color: var(--gray-1);
      display: inline-block;
      width: 100%;
    }
    .hero_name {
      font-size: 2em;
      font-family: "Roboto Mono", monospace;
      color: var(--white);
    }
  }
  .hero_img {
    max-width: 900px;
    width: 100%;
    height: 600px;
    margin: 0 auto;
    border: 2px solid var(--gray-1);
  }
  .hero_info {
    margin-top: 0rem;
  }
  .hero_social,
  .hero_scrollDown {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    position: absolute;
    bottom: 20px;
    width: 50px;
  }
  .hero_social {
    left: 50px;
  }
  .hero_scrollDown {
    right: 50px;
  }
  .hero_social_indicator,
  .hero_scrollDown {
    width: 50px;
    p {
      font-size: 1.6rem;
      transform: translateY(-70px) rotate(90deg);
      letter-spacing: 0.7rem;
      text-transform: uppercase;
    }
  }

  .hero_social_text {
    ul {
      li {
        margin-bottom: 1rem;
        display: inline-block;
        font-size: 1.6rem;
        transform: rotate(-90deg);
        letter-spacing: 5px;
        margin-bottom: 2rem;
        a {
          color: var(--gray-1);
        }
      }
    }
  }
  @media only screen and (max-width: 768px) {
    .hero {
      min-height: 750px;
    }
    .hero_heading {
      font-size: 1.4rem;
      margin-bottom: -3rem;
      .hero__name {
        font-size: 4.5rem;
      }
    }
    .hero_img {
      height: 300px;
    }
    .hero_info {
      margin-top: 3rem;
    }
    .hero_social {
      left: 0px;
      bottom: -15%;
      width: 20px;
      .hero_social_indicator {
        width: 20px;
        p {
          font-size: 1.2rem;
        }
        img {
          max-height: 22px;
        }
      }
      .hero_social_text {
        ul {
          li {
            a {
              font-size: 1.2rem;
              margin-bottom: 1rem;
            }
          }
        }
      }
    }
    .hero_scrollDown {
      right: 0;
      width: 20px;
      gap: 1rem;
      p {
        font-size: 1.3rem;
      }
    }
  }
`;

export default function HeroSection() {
  return (
    <HeroStyles>
      <div className="hero">
        <div className="container">
          <h1 className="hero_heading">
            <span>Hello, my name is </span>
            <span className="hero_name">Caitlin Talbert</span>
          </h1>
          <div className="hero_img">
            <img src={Me2} alt="" />
          </div>
          <div className="hero_info">
            <PText>
              I am a full stack web developer based in Austin, TX. I am
              passionate about design and creating minimalistic, interactive web
              experiences.
            </PText>
            <Button btnLink="/projects" btnText="see my work" />
          </div>
          <div className="hero_social">
            <div className="hero_social_indicator">
              <p>Follow</p>
              <AiOutlineArrowDown />
            </div>
            <div className="hero_social_text">
              {/* <ul>
                <li>IG</li>
                <li>LI</li>
                <li>GH</li>
              </ul> */}
              <ul>
                <li>
                  <a href="https://www.instagram.com/">IG</a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/caitlin-talbert-22ba69225/">
                    LI
                  </a>
                </li>
                <li>
                  <a href="https://github.com/CaitlinTalbert">GH</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="hero_scrollDown">
            <p>Scroll</p>
            <AiOutlineArrowDown />
          </div>
        </div>
      </div>
    </HeroStyles>
  );
}
