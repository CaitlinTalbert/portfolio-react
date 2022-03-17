import React from "react";
import PText from "./PText";
import styled from "styled-components";
import mapImg2 from "../images/mapImg2.png";

const MapStyles = styled.div`
  background: url(${mapImg2}) no-repeat center / cover;
  min-height: 400px;
  .container {
    position: relative;
    min-height: 400px;
  }
  .map_card {
    position: absolute;
    right: 5%;
    bottom: 10%;
    padding: 2rem;
    background-color: var(--deep-dark);
    max-width: 300px;
    width: 100%;
    border-radius: 12px;
  }
  .map_card_heading {
    color: var(--gray-1);
    font-size: 3rem;
    margin-bottom: 1rem;
    font-family: "Roboto Mono", monospace;
    font-weight: lighter;
  }
  .map_card_link {
    display: inline-block;
    font-size: 1.6rem;
    margin-top: 3rem;
    text-decoration: underline;
    color: var(--gray-1);
    font-family: "Roboto Mono", monospace;
  }
  @media only screen and (max-width: 768px) {
    background-position: 80% center;
  }
  @media only screen and (max-width: 400px) {
    .map_card {
      max-width: none;
      right: auto;
    }
  }
`;

export default function Map() {
  return (
    <MapStyles>
      <div className="container">
        <div className="map_card">
          <h3 className="map_card_heading">Here I Am</h3>
          <PText>Austin, TX</PText>
          <a
            href="https://www.google.com/maps/place/Austin,+TX/@30.3074624,-98.0335934,10z/data=!3m1!4b1!4m5!3m4!1s0x8644b599a0cc032f:0x5d9b464bd469d57a!8m2!3d30.2671478!4d-97.7430439"
            target="_blank"
            className="map_card_link"
          >
            Open in Google Maps
          </a>
        </div>
      </div>
    </MapStyles>
  );
}
