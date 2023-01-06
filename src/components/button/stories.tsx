import * as React from 'react';
import * as Storybook from '@storybook/react';
import Button from './button';
import { ButtonProps } from './types';
import { SHAPE, SIZE, VARIANT } from './constants';
import { defaultProps } from './default-props';

const meta: Storybook.Meta<ButtonProps> = {
  title: 'Button',
  component: Button,
  args: {
    variant: defaultProps.variant,
    size: defaultProps.size,
    shape: defaultProps.shape,
    isDisabled: defaultProps.isDisabled,
    children: 'Button',
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: Object.keys(VARIANT),
      description: 'The variant of the button',
      name: 'variant',
      type: { name: 'string', required: false },
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: defaultProps.variant },
      },
    },
    size: {
      control: { type: 'select' },
      options: Object.keys(SIZE),
      description: 'The size of the button',
      name: 'size',
      type: { name: 'string', required: false },
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: defaultProps.size },
      },
    },
    shape: {
      control: { type: 'select' },
      options: Object.keys(SHAPE),
      description: 'The shape of the button',
      name: 'shape',
      type: { name: 'string', required: false },
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: defaultProps.shape },
      },
    },
    isDisabled: {
      control: { type: 'boolean' },
      description: 'Whether the button is disabled',
      name: 'isDisabled',
      type: { name: 'boolean', required: false },
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: defaultProps.isDisabled },
      },
    },
    children: {
      control: { type: 'text' },
      description: 'The content of the button',
      name: 'children',
      type: { name: 'string', required: false },
      table: {
        type: { summary: 'React.ReactNode' },
      },
    },
  },
};

export default meta;

const Template: Storybook.Story<ButtonProps> = args => <Button {...args} />;

export const Primary = Template.bind({});
