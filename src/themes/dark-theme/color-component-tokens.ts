import { ColorTokens, ComponentColorTokens } from '../types';
import darkColorTokens from './color-tokens';

const getComponentColorTokens = (
  foundation: ColorTokens = darkColorTokens
): ComponentColorTokens => ({
  buttonSecondaryFill: foundation.mono1000,
  buttonSecondaryText: foundation.mono200,
  buttonSecondaryBorder: foundation.mono500,
  buttonSecondaryHoverFill: foundation.mono900,
  buttonSecondaryHoverText: foundation.mono200,
  buttonSecondaryHoverBorder: foundation.mono400,
  buttonSecondarySelectedFill: foundation.mono900,
  buttonSecondarySelectedText: foundation.mono200,
  buttonSecondarySelectedBorder: foundation.mono500,
  buttonSecondaryActiveFill: foundation.mono1000,
  buttonSecondaryActiveText: foundation.mono200,
  buttonSecondaryActiveBorder: foundation.mono500,
});

export default getComponentColorTokens;
