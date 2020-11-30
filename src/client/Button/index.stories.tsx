import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import Button, { Props } from '.';

export default {
  title: 'Design System/Button',
  component: Button,
  args: {
    children: 'Button',
    ghost: false,
    danger: false,
    disabled: false,
    loading: false,
    size: 'middle',
    shape: null,
  },
  argTypes: {
    shape: {
      control: {
        type: 'inline-radio',
        options: [null, 'circle', 'round'],
      },
    },
    size: {
      control: {
        type: 'inline-radio',
        options: ['small', 'middle', 'large'],
      },
    },
  },
} as Meta;

const Template: Story<Props> = (args) => (
  <Button {...args} />
);

export const DefaultButton = Template.bind({});
DefaultButton.args = {

};
