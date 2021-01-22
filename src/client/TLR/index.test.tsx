import React from "react";
import { screen, render, waitFor } from "@testing-library/react";
import '@testing-library/jest-dom';
import axios from "axios";
import { Post } from ".";

jest.mock("axios");

const mockAxios = axios as jest.Mocked<typeof axios>;

afterAll(jest.restoreAllMocks);

describe("Post", () => {
  it("shows loading", () => {
    mockAxios.get.mockReturnThis();

    render(<Post url="/test" />);

    expect(axios.get).toHaveBeenCalledTimes(1);
    expect(screen.getByTestId("loading")).toHaveTextContent(/loading/i);
  });

  it("shows post", async () => {
    const resp = { data: 'Hi tmhao2005' };

    mockAxios.get.mockResolvedValue(resp);

    render(<Post url="/test"></Post>);

    await waitFor(() => screen.getByTestId("body"));

    expect(screen.getByTestId("body")).resolves.toBeCalled;
  });
});
