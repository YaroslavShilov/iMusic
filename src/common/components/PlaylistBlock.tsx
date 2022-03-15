import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { PlayIcon } from "@heroicons/react/solid";
import { PlayBtn } from "./PlayBtn";

type Props = {
  id: string | number;
  name: string;
  desc: string;
  img?: string;
};

export const PlaylistBlock: React.FC<Props> = ({
  id,
  name,
  desc,
  img = "https://source.unsplash.com/user/c_v_r/600x600",
}) => {
  return (
    <Playlist to={`playlist/${id}`}>
      <div className="img">
        <img src={img} alt={name} />
        <PlayBtn className="play" />
      </div>
      <div className="cont">
        <h3 className="name">{name}</h3>
        <p className="desc">{desc}</p>
      </div>
    </Playlist>
  );
};

const Playlist = styled(Link)`
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
    height: 83px;
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

  .play {
    position: absolute;
    right: 7px;
    bottom: -5px;
    opacity: 0;
  }

  &:hover .play {
    bottom: 5px;
    opacity: 1;
  }
`;
