import React from "react";
import { API } from "aws-amplify";
import Foo from "./Foo";

jest.mock("aws-amplify");

beforeEach(() => {
  (API.post as jest.Mock).mockImplementation((_api, path) => {
    if (path === "/appointment/get") {
      return Promise.resolve({
        doctorId: "10000001"
      });
    }

    if (path === "/doctor/get") {
      return Promise.resolve({
        name: "Mr. Doctor"
      });
    }
  });
});

afterEach(() => {
  (API.post as jest.Mock).mockClear();
});

// const waitForComponentToPaint = async (wrapper: any) => {
//   await act(async () => {
//     await new Promise(resolve => setTimeout(resolve));
//     wrapper.update();
//   });
// };

test('test with no act', async () => {
  const wrapper = mount(<Foo  appointmentId={1} />);
  expect(wrapper.find('div').at(0).text()).toEqual('Loading...');

  // Remove act warning
  // await waitForComponentToPaint(wrapper)
  await act(async () => {
    await Promise.resolve(wrapper);
    // wrapper.update();
  });

  expect(wrapper.find('div').at(0).text()).toEqual('Mr. Doctor');
});
