import { mount } from "enzyme";
import { act } from 'react-dom/test-utils';
import React from "react";
import { MemoryRouter } from "react-router-dom";
import PageNotFound from "./Foo";
import Component from "./Bar";
import App from ".";

jest.mock('react', () => {
  const React = jest.requireActual('react');
  // @ts-ignore
  const Suspense = ({ children }) => {
    return children ? children : null;
  };

  const lazy = jest.fn().mockImplementation((fn) => {
    const Component = (props: any) => {
      const [C, setC] = React.useState();

      React.useEffect(() => {
        fn().then((v: any) => {
          setC(v);
        });
      }, []);

      return C ? <C.default {...props} /> : null;
    };

    return Component;
  });

  return {
    ...React,
    lazy,
    Suspense
  };
});

describe("App", () => {

  const waitForComponentToPaint = async (wrapper: any) => {
    await act(async () => {
      await new Promise(resolve => setTimeout(resolve));
      wrapper.update();
    });
  };

  it("renders PageNotFound", async () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={["/random"]}>
        <App />
      </MemoryRouter>
    );

    await waitForComponentToPaint(wrapper);
    // await new Promise(resolve => setTimeout(resolve));
    // wrapper.update()

    // Assert
    console.log(wrapper.debug());
    expect(wrapper.exists(PageNotFound)).toEqual(true);
  });

  it("renders Component", async () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={["/component"]}>
        <App />
      </MemoryRouter>
    );

    await waitForComponentToPaint(wrapper);

    // Assert
    console.log(wrapper.debug());
    expect(wrapper.exists(Component)).toEqual(true);
    expect(wrapper.exists(PageNotFound)).toEqual(false);
  });
});
