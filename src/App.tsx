import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Credentials } from "./Credentials";
import { Aside } from "./common/Aside";
import { Footer } from "./common/Footer";
import { Main } from "./common/Main";
import axios from "axios";

function App() {
  const spotify = Credentials();

  const data = [
    { value: 1, name: "A" },
    { value: 2, name: "B" },
    { value: 3, name: "C" },
  ];

  const [token, setToken] = useState("");
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    axios("https://accounts.spotify.com/api/token", {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization:
          "Basic " + btoa(spotify.ClientId + ":" + spotify.ClientSecret),
      },
      data: "grant_type=client_credentials",
      method: "POST",
    }).then((tokenResponse) => {
      setToken(tokenResponse.data.access_token);

      axios(`https://api.spotify.com/v1/browse/categories?locale=sv_US`, {
        method: "GET",
        headers: { Authorization: "Bearer " + tokenResponse.data.access_token },
      }).then((genreResponse) => {
        console.log(genreResponse);
        setGenres(genreResponse.data.categories.items);
      });
    });
  }, []);

  return (
    <AppStyle>
      <Content>
        <Aside />
        <Main />
        <Footer />
      </Content>
    </AppStyle>
  );
}

interface DropdownProps {
  options: { id: number; name: string }[];
}

const Dropdown: React.FC<DropdownProps> = ({ options }) => {
  const [selectedValue, setSelectedValue] = useState<any>(1);

  return (
    <div>
      <select
        value={selectedValue}
        onChange={(e) => setSelectedValue(e.target.value)}
      >
        {options.map((item, index) => (
          <option key={index} value={item.id}>
            {item.name}
          </option>
        ))}
      </select>
      <p>{selectedValue}</p>
    </div>
  );
};

const AppStyle = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 20px;
`;

const Content = styled.div`
  position: relative;
  display: grid;
  grid-template-rows: 1fr 106px;
  grid-template-columns: 255px 1fr;
  grid-template-areas: "aside main" "footer footer";
  width: 100%;
  max-width: 1300px;
  height: 680px;
  background-color: #181b21;
  border-radius: 3px;
  box-shadow: 0 0 50px 0 rgba(0, 0, 0, 0.55);
  overflow: hidden;

  &:after,
  &:before {
    content: "";
    position: absolute;

    width: 60px;
    height: 60px;
    border-radius: 50%;
  }

  &:before {
    top: -60px;
    right: -60px;
    box-shadow: 0 0 230px 80px rgba(255, 255, 255, 0.7);
  }

  &:after {
    bottom: -60px;
    left: -20px;
    box-shadow: 0 0 220px 70px rgba(255, 255, 255, 0.75);
  }
`;

export default App;
