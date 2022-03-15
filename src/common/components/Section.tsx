import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Playlist } from "./Playlist";

type SectionType = {
  title: string;
  subtitle?: string;
};

export const Section: React.FC<SectionType> = ({ title, subtitle }) => {
  return (
    <SectionStyle>
      <h2 className="section__title">{title}</h2>
      {subtitle && <p className="section__subtitle">{subtitle}</p>}
      <div className="list">
        <Playlist
          id="12"
          src="https://thumbs.dreamstime.com/b/best-imag-my-editing-album-photo-albums-144808262.jpg"
          name="Test"
          desc="desc"
        />

        <Playlist
          id="12"
          src="https://thumbs.dreamstime.com/b/best-imag-my-editing-album-photo-albums-144808262.jpg"
          name="Test"
          desc="desc"
        />
      </div>
    </SectionStyle>
  );
};

const SectionStyle = styled.section`
  .section__title {
    margin: 0;
    font-size: 24px;
    color: ${(props) => props.theme.text.title.color};
  }

  .section__subtitle {
    margin: 5px 0 10px;
    font-size: ${(props) => props.theme.text.desc.fz};
    color: ${(props) => props.theme.text.desc.color};
  }
`;
