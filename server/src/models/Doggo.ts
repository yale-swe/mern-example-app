import mongoose from "mongoose";

const DoggoSchema = new mongoose.Schema({
  name: {
    type: "string",
    required: true,
  },
  age: {
    type: "number",
    required: true,
  },
  imageUrl: {
    type: "string",
    required: true,
  },
});

export const Doggo = mongoose.model("Doggo", DoggoSchema);
export default Doggo;
