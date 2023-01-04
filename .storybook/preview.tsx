import React from 'react';
import { DecoratorFn } from '@storybook/react';
import styled, { css, ThemeProvider } from 'styled-components';
import { DarkTheme, LightTheme } from '../src/themes';
import breakpoints from '../src/themes/shared/breakpoints';

// https://storybook.js.org/docs/react/writing-stories/parameters#global-parameters
export const parameters = {
  // https://storybook.js.org/docs/react/essentials/actions#automatically-matching-args
  actions: { argTypesRegex: '^on.*' },
  controls: { expanded: true },
};

const ThemeBlock = styled.div<{ fill?: boolean }>(
  ({ theme }) =>
    css`
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 100vh;
      background: ${theme.colors.backgroundPrimary};
    `
);

const withTheme: DecoratorFn = (Story, context) => {
  const { theme } = context.globals;

  const storyTheme = theme === 'light' ? LightTheme : DarkTheme;

  return (
    <ThemeProvider theme={storyTheme}>
      <ThemeBlock>
        <Story />
      </ThemeBlock>
    </ThemeProvider>
  );
};

export const globalTypes = {
  theme: {
    name: 'Theme',
    description: 'Global theme for components',
    defaultValue: 'light',
    toolbar: {
      // The icon for the toolbar item
      icon: 'circlehollow',
      // Array of options
      items: [
        { value: 'light', icon: 'circlehollow', title: 'Light theme' },
        { value: 'dark', icon: 'circle', title: 'Dark theme' },
      ],
      // Property that specifies if the name of the item will be displayed
      showName: true,
    },
  },
};

export const decorators = [withTheme];
