import axios from "axios";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";

import DoggoProfile from "../components/DoggoProfile";

const axiosDeleteMock = jest
  .spyOn(axios, "delete")
  .mockImplementation(async () => ({
    message: "Doggo successfully deleted.",
  }));

const deleteMock = jest.fn();

const mocks = [axiosDeleteMock, deleteMock];

describe("DoggoProfile", () => {
  beforeEach(() => {
    mocks.map((m) => m.mockClear());
  });

  afterAll(() => {
    mocks.map((m) => m.mockRestore());
  });

  it("should render doggo correctly", async () => {
    const doggo = {
      _id: "reyna-id",
      name: "Reyna",
      age: 4,
      imageUrl: "some-url",
    };

    const { getByText } = render(
      <DoggoProfile doggo={doggo} deleteDoggo={deleteMock} />
    );

    expect(screen.getByText("Reyna")).toBeTruthy();
    expect(screen.getByText("age 4")).toBeTruthy();

    fireEvent.click(getByText("Release"));

    await waitFor(() => {
      expect(screen.getByText("Reyna has been released! 🐕")).toBeTruthy();
    });

    expect(axiosDeleteMock).toHaveBeenCalled();
    expect(deleteMock).toHaveBeenCalledWith("reyna-id");
  });
});
