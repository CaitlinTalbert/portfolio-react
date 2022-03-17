import React from "react";
import PText from "./PText";
import FooterCol from "./FooterColumn";
import styled from "styled-components";

const FooterStyles = styled.div`
  padding-top: 10rem;
  background-color: var(--deep-dark);
  .container {
    display: flex;
    gap: 3rem;
    color: var(--gray-1);
    font-family: "Roboto Mono", monospace;
  }
  .footer_col1 {
    flex: 2;
  }
  .footer_col2,
  .footer_col3,
  .footer_col4 {
    flex: 1;
  }
  .footer_col1_title {
    font-size: 3.5rem;
    margin-bottom: 1rem;
  }
  .copyright {
    background-color: var(--dark-bg);
    text-align: left;
    padding: 1rem 0;
    margin-top: 5rem;
    .para {
      margin-left: 0;
    }
  }
  @media only screen and (max-width: 768px) {
    .container {
      flex-direction: column;
      gap: 0rem;
      & > div {
        margin-top: 5rem;
      }
    }
    .footer_col .para {
      max-width: 100%;
    }
    .copyright {
      .container {
        div {
          margin-top: 0;
        }
      }
    }
  }
`;

export default function Footer() {
  return (
    <FooterStyles>
      <div className="container">
        <div className="footer_col1">
          <h1 className="footer_col1_title">Caitlin Talbert</h1>
          <PText>
            A full stack web developer and design from Austin, TX. I am
            passionate about web design and coding. I always make websites that
            have unique designs and a perfect performance rate.
          </PText>
        </div>
        <div className="footer_col2">
          <FooterCol
            heading="Important Links"
            links={[
              {
                title: "Home",
                path: "/",
                type: "Link",
              },
              {
                title: "About",
                path: "/about",
                type: "Link",
              },
              {
                title: "Projects",
                path: "/projects",
                type: "Link",
              },
              {
                title: "Contact",
                path: "/contact",
                type: "Link",
              },
            ]}
          />
        </div>
        <div className="footer_col3">
          <FooterCol
            heading="Contact Info"
            links={[
              {
                title: "8304830005",
                path: "tel:+8304830005",
              },
              {
                title: "zerotalb@yahoo.com",
                path: "mailto:zerotalb@yahoo.com",
              },
              {
                title: "Austin TX, United States",
                path: "http://google.com/maps",
              },
            ]}
          />
        </div>
        <div className="footer_col4">
          <FooterCol
            heading="Social Links"
            links={[
              {
                title: "Instagram",
                path: "http://instagram.com",
              },
              {
                title: "Linked In",
                path: "https://www.linkedin.com/in/caitlin-talbert-22ba69225/",
              },
              {
                title: "GitHub",
                path: "https://github.com/CaitlinTalbert",
              },
            ]}
          />
        </div>
      </div>
      <div className="copyright">
        <div className="container">
          <PText>2022 - Caitlin Talbert</PText>
        </div>
      </div>
    </FooterStyles>
  );
}
