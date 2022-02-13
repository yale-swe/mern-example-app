import styled from "styled-components";
import SWELogo from "./assets/logo.png";

const App = () => {
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
    </Container>
  );
};

const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
  background: #121212;
  display: flex;
  justify-content: center;
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

export default App;
