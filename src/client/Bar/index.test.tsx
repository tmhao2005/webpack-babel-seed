import * as React from "react";
import { mount } from "enzyme";
import { Bar } from '.';

describe('Bar', () => {
  console.log('scope 1');

  const wrapper = mount(<Bar />);
  it("render without any issue", () => {
    console.log('scope 2');

    expect(wrapper.find('.btn').length).toBe(1);
    wrapper.find('.btn').simulate('click');
    expect(wrapper.find('.btn').length).toBe(0);
  });
});
