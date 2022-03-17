import React from "react";
import { MdDesktopMac } from "react-icons/md";
import PText from "./PText";
import styled from "styled-components";

const ItemStyles = styled.div`
  text-align: center;
  .servicesItem_icon {
    svg {
      width: 3rem;
      color: white;
    }
  }
  .servicesItem_title {
    font-size: 2.5rem;
    font-family: "Montserrat", sans-serif;
    color: white;
  }
  .para {
    margin-top: 2rem;
  }
`;

export default function ServicesSectionItem({
  icon = <MdDesktopMac />,
  title = "Web Design",
  desc = "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industryes ok",
}) {
  return (
    <ItemStyles>
      <div className="servicesItem_icon">{icon} </div>
      <div className="servicesItem_title">{title}</div>
      <PText>{desc}</PText>
    </ItemStyles>
  );
}
