import breakpoints from '../shared/breakpoints';
import mediaQueries from '../shared/media-queries';
import darkColorTokens from './color-tokens';
import getSemanticColorTokens from './color-semantic-tokens';
import getTypography from '../shared/typography';
import { Theme } from '../types';
import getComponentColorTokens from './color-component-tokens';
import sizing from '../shared/sizing';
import borders from '../shared/borders';

export const DarkTheme: Theme = {
  name: 'dark-theme',
  breakpoints,
  mediaQueries,
  colors: {
    ...darkColorTokens,
    ...getSemanticColorTokens(),
    ...getComponentColorTokens(),
  },
  typography: getTypography(),
  sizing,
  borders,
};
