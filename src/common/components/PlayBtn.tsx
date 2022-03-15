import React from "react";
import { PlayIcon } from "@heroicons/react/solid";
import styled from "styled-components";

type Props = {
  className?: string;
};

export const PlayBtn: React.FC<Props> = ({ className = "" }) => {
  return (
    <Play className={`play ${className}`}>
      <PlayIcon />
    </Play>
  );
};

const Play = styled.div`
  position: relative;

  width: 48px;
  height: 48px;
  color: #5c6fb1;
  transition: all 0.3s ease-in-out;

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
