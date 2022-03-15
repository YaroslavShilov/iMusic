import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { PlayIcon } from "@heroicons/react/solid";

type PlaylistStyle = {
  id: string | number;
  name: string;
  desc: string;
  src: string;
};

export const Playlist: React.FC<PlaylistStyle> = ({ id, name, desc, src }) => {
  return (
    <PlaylistStyle to={`playlist/${id}`}>
      <div className="img">
        <img src={src} alt={name} />
        <Play>
          <PlayIcon />
        </Play>
      </div>
      <div className="cont">
        <h3 className="name">{name}</h3>
        <p className="desc">{desc}</p>
      </div>
    </PlaylistStyle>
  );
};

const PlaylistStyle = styled(Link)`
  display: block;
  color: ${(props) => props.theme.text.title.color};
  border-radius: 8px;

  overflow: hidden;

  &:hover .cont {
    background-color: #181e2e;
  }

  .img {
    position: relative;
    height: 215px;

    img {
      position: absolute;
      top: 0;
      left: 0;

      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .cont {
    padding: 15px;
    background-color: #101321;
    transition: all 0.5s ease-in-out;
  }

  .name {
    margin: 0;
    font-size: 16px;
  }

  .desc {
    margin: 2px 0 0;
    font-size: ${({ theme }) => theme.text.desc.fz};
    color: ${({ theme }) => theme.text.desc.color};
  }
`;

const Play = styled.div`
  position: absolute;
  right: 7px;
  bottom: 0;

  width: 48px;
  height: 48px;
  color: #5c6fb1;

  &:after {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    z-index: 0;

    width: 20px;
    height: 20px;
    margin-top: -10px;
    margin-left: -10px;

    background-color: #1e2233;
  }

  svg {
    position: relative;
    z-index: 1;

    transition: all 0.5s ease-in-out;
    &:hover {
      color: #1fdf64;
    }
  }
`;
