import React from 'react';
import { Button as AntButton } from 'antd';
import { ButtonProps } from 'antd/lib/button/button';

export type Props = ButtonProps

const Button: React.FC = (props: Props) => {
  return <AntButton {...props} />;
};

export default Button;
