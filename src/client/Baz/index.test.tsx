import React from "react";
import { screen, render, waitFor } from "@testing-library/react";
import { Post } from ".";
import axios from "axios";

jest.mock("axios");

const mockAxios = axios as jest.Mocked<typeof axios>;

afterAll(jest.restoreAllMocks);

describe("Post", () => {
  it("shows loading", () => {
    mockAxios.get.mockResolvedValue({ data: {} });

    render(<Post url="/test" />);

    expect(screen.getByTestId("loading")).toHaveTextContent(/loading/i);
  });

  it("shows post", async () => {
    const resp = { data: 'Hi tmhao2005' };

    mockAxios.get.mockResolvedValue(resp);

    render(<Post url="/test"></Post>);

    await waitFor(() => screen.getByTestId("body"));

    expect(screen.getByTestId("body")).toHaveTextContent(/hi tmhao2005/i);
  });
});