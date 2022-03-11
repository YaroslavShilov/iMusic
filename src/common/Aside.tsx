import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { HomeIcon, SearchIcon } from "@heroicons/react/outline";

export const Aside = () => {
  return (
    <AsideStyle>
      <Nav>
        <List>
          <li>
            <NavLink to="/" className="home">
              <HomeIcon />
              <span>Home</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/search" className="search">
              <SearchIcon />
              <span>Search</span>
            </NavLink>
          </li>
        </List>
      </Nav>
    </AsideStyle>
  );
};

const AsideStyle = styled.aside`
  grid-area: aside;
  padding: 14px;
  background-color: #1e2233;
`;

const Nav = styled.nav`
  .home span {
    padding-top: 5px;
  }

  a {
    display: flex;
    align-items: center;

    svg {
      width: 24px;
    }

    span {
      display: inline-block;
      margin-left: 10px;
    }
  }
`;

const List = styled.ul`
  background-color: #1b1f2e;
  border-radius: 6px;
  overflow: hidden;
  a {
    padding: 15px 20px;
    color: ${(props) => props.theme.text.desc.color};
    transition: all 0.5s ease-in-out;

    &:hover,
    &.active {
      color: ${(props) => props.theme.text.title.color};
      background-color: #262c43;
    }
  }
`;
