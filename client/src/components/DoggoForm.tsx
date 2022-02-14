import axios from "axios";
import Button from "@mui/material/Button";
import styled from "styled-components";
import TextField from "@mui/material/TextField";
import { useCallback, useState } from "react";
import swal from "sweetalert";
import { Doggo } from "../types";

const DoggoForm = ({ addDoggo }: { addDoggo: (doggo: Doggo) => void }) => {
  const [name, setName] = useState<string>("");
  const [age, setAge] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const createDoggo = useCallback(async () => {
    if (!name)
      return swal({ text: "Please give your doggo a name.", icon: "warning" });
    else if (!age)
      return swal({ text: "Please give your doggo an age.", icon: "warning" });

    setLoading(true);
    try {
      const { data } = await axios.post("http://localhost:4000/doggo", {
        name,
        age: parseInt(age),
      });
      addDoggo(data.doggo);
    } catch (_e) {
      swal("Something went wrong...");
    }

    swal(`${name} has been created! 🐕`);
    setLoading(false);
    setName("");
    setAge("");
  }, [name, age]);

  return (
    <Container>
      <TitleText>Create a doggo</TitleText>
      <TextField
        id="outlined-basic"
        label="Doggo Name"
        variant="outlined"
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={{ marginBottom: 20 }}
      />
      <TextField
        id="outlined-basic"
        label="Doggo Age"
        variant="outlined"
        type="number"
        value={age}
        onChange={(e) => setAge(e.target.value)}
        style={{ marginBottom: 30 }}
      />
      <Button variant="contained" disabled={loading} onClick={createDoggo}>
        Create
      </Button>
    </Container>
  );
};

const Container = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TitleText = styled.h2`
  color: #ffffff;
  margin-bottom: 30px;
`;

export default DoggoForm;
