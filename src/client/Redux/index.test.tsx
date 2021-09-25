import React from "react";
import { shallow } from "enzyme";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import configureStore from "redux-mock-store";
import toJson from "enzyme-to-json";

import Sidebar from ".";

describe("Testing Sidebar component", () => {
  let wrapper, store;
  const mockStore = configureStore();
  const initialProp = {
    auth: {
      userAuth: {
        firstName: "savitha",
        lastName: "goel",
      },
    },
    meta: {
      productsMeta: [
        { label: "CX Admin Application" },
        { label: "Application Configuration Management" },
      ],
    },
  };

  beforeEach(() => {
    store = mockStore(initialProp);
    wrapper = shallow(<Sidebar store={store} />);
  });

  it("should be defined", () => {
    expect(wrapper).toBeDefined();
  });

  it("renders correctly", () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it("render sidebar options as a text", () => {
    // This test case gets failed every time
    render(<Sidebar store={store} />);

    const sidebarElement = screen.getByText("Application Manager");
    expect(sidebarElement).toBeInTheDocument();
  });
});
