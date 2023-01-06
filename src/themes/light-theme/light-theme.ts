import breakpoints from '../shared/breakpoints';
import mediaQueries from '../shared/media-queries';
import lightColorTokens from './color-tokens';
import getSemanticColorTokens from './color-semantic-tokens';
import getTypography from '../shared/typography';
import { Theme } from '../types';
import getComponentColorTokens from './color-component-tokens';
import sizing from '../shared/sizing';
import borders from '../shared/borders';
import shadows from '../shared/shadows';
import { colors as foundationColors } from '../../tokens';

export const LightTheme: Theme = {
  name: 'light-theme',
  breakpoints,
  mediaQueries,
  colors: {
    ...foundationColors,
    ...lightColorTokens,
    ...getSemanticColorTokens(),
    ...getComponentColorTokens(),
  },
  typography: getTypography(),
  sizing,
  borders,
  shadows,
};
