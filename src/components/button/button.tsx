import * as React from 'react';
import { BaseButton } from './styled-components';
import { ButtonProps } from './types';
import { getStyledButtonProps } from './utils';

const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
  const styledButtonProps = getStyledButtonProps(props);

  return <BaseButton {...styledButtonProps}>{children}</BaseButton>;
};

export default Button;
