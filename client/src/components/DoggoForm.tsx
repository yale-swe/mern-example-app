import Button from "@mui/material/Button";
import styled from "styled-components";
import TextField from "@mui/material/TextField";

const DoggoForm = () => {
  return (
    <Container>
      <TitleText>Create a doggo</TitleText>
      <TextField
        id="outlined-basic"
        label="Doggo Name"
        variant="outlined"
        style={{ marginBottom: 20 }}
      />
      <TextField
        id="outlined-basic"
        label="Doggo Age"
        variant="outlined"
        style={{ marginBottom: 30 }}
      />
      <Button variant="contained">Create</Button>
    </Container>
  );
};

const Container = styled.div`
  margin-top: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TitleText = styled.h2`
  color: #ffffff;
  margin-bottom: 30px;
`;

export default DoggoForm;
