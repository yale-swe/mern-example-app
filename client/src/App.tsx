import axios from "axios";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { Doggo } from "./types";
import DoggoProfile from "./components/DoggoProfile";
import SWELogo from "./assets/logo.png";

const App = () => {
  const [doggos, setDoggos] = useState<Doggo[]>([]);

  useEffect(() => {
    axios
      .get<{ doggos: Doggo[] }>("http://localhost:4000/doggo")
      .then((res) => {
        setDoggos(res.data.doggos);
      });
  }, []);

  return (
    <Container>
      <Description>
        <Logo src={SWELogo} alt="swe-logo" />
        <TitleText>MERN Stack Example</TitleText>
        <Text>
          This is the official MERN stack example for Software Engineering at
          Yale University (CPSC 439/539). The MERN stack stands for MongoDB,
          Express, React, and Node. This project has the minimal setup for the
          MERN stack, and allows you to create "Doggos" using a backend request
          to a Node REST API.
        </Text>
      </Description>
      <DoggosContainer>
        {doggos.map((doggo, i) => (
          <DoggoProfile doggo={doggo} key={i} />
        ))}
      </DoggosContainer>
    </Container>
  );
};

const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
  background: #121212;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 120px;
`;

const Description = styled.div`
  width: 600px;
  margin-top: 100px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: top;
  text-align: center;
`;

const TitleText = styled.h1`
  color: #ffffff;
`;

const Text = styled.p`
  color: #ffffff;
`;

const Logo = styled.img`
  width: 150px;
  height: 150px;
`;

const DoggosContainer = styled.div`
  margin-top: 60px;
  width: 600px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

export default App;
