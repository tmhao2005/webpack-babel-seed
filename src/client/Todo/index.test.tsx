import React from "react";
import { shallow } from "enzyme";

import { Todo } from ".";

// @ts-ignore
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(
      [
        {
          title: "Todo1",
          completed: false
        },
        {
          title: "Todo2",
          completed: false
        }
      ]
    )
  })
) as jest.Mock<any>;

it("must contain 2 items in state after mock api call", async () => {
  const wrapper = shallow(<Todo />);

  // await new Promise(res => setTimeout(res));
  await jest.requireActual('promise').resolve();

  // Collect items from state
  const itemsFromState: Array<any> = wrapper.state('items');

  // Expect it to have a length of 2
  expect(itemsFromState.length).toBe(2);
});
