import React from "react";
import SectionTitle from "./SectionTitle";
import styled from "styled-components";
import ContactInfoItem from "./ContactInfoItem";
import { MdLocalPhone, MdEmail } from "react-icons/md";
// import ContactForm from "./ContactForm";
import ContactUs from "./ContactUs";

const ContactSectionStyles = styled.div`
  padding: 10rem 0;
  .contactSection_wrapper {
    display: flex;
    gap: 5rem;
    margin-top: 7rem;
    justify-content: space-between;
    position: relative;
  }
  .contactSection_wrapper::after {
    position: absolute;
    content: "";
    width: 2px;
    height: 50%;
    background-color: var(--gray-1);
    left: 50%;
    top: 30%;
    transform: translate(-50%, -50%);
  }
  .left {
    width: 100%;
    max-width: 500px;
  }
  .right {
    max-width: 500px;
    width: 100%;
  }
  @media only screen and (max-width: 768px) {
    .contactSection_wrapper {
      flex-direction: column;
    }
    .contactSection_wrapper::after {
      display: none;
    }
    .left,
    .right {
      max-width: 100%;
    }
    .right {
      padding: 4rem 2rem 2rem 2rem;
    }
  }
`;

export default function ContactSection() {
  return (
    <ContactSectionStyles>
      <div className="container">
        <SectionTitle heading="Contact Me" subheading="get in touch" />
        <div className="contactSection_wrapper">
          <div className="left">
            {/* {" "} */}
            <ContactInfoItem icon={<MdLocalPhone />} text="8304830005" />
            <ContactInfoItem icon={<MdEmail />} text="zerotalb@yahoo.com" />
            <ContactInfoItem text="Austin, TX" />
          </div>
          {/* <div className="right">
            <ContactForm />
          </div> */}
          <div className="right">
            <ContactUs />
          </div>
        </div>
      </div>
    </ContactSectionStyles>
  );
}
