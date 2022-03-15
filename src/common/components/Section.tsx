import React from "react";
import styled from "styled-components";
import { PlaylistBlock } from "./PlaylistBlock";

type SectionType = {
  title: string;
  subtitle?: string;
};

export const Section: React.FC<SectionType> = ({ title, subtitle }) => {
  return (
    <SectionStyle>
      <h2 className="section__title">{title}</h2>
      {subtitle && <p className="section__subtitle">{subtitle}</p>}
      <div className="section__list">
        <PlaylistBlock id="12" name="Test" desc="desc" />
        <PlaylistBlock id="12" name="Test" desc="desc" />
      </div>
    </SectionStyle>
  );
};

const SectionStyle = styled.section`
  margin-top: 40px;
  &:first-of-type {
    margin-top: 0;
  }

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

  .section__list {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 20px;
  }
`;
