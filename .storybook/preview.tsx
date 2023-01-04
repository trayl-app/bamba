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
  ({ fill, theme }) =>
    css`
      position: absolute;
      top: 0;
      width: ${fill ? '100vw' : '50vw'};
      height: 100vh;
      bottom: 0;
      overflow: auto;
      padding: 1rem;
      background: ${theme.colors.backgroundPrimary};
    `
);

const withTheme: DecoratorFn = (Story, context) => {
  const { theme } = context.globals;

  const storyTheme = theme === 'light' ? LightTheme : DarkTheme;

  return (
    <ThemeProvider theme={storyTheme}>
      <ThemeBlock fill>
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
