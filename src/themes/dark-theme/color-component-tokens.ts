import { ColorTokens, ComponentColorTokens } from '../types';
import darkColorTokens from './color-tokens';

const getComponentColorTokens = (
  foundation: ColorTokens = darkColorTokens
): ComponentColorTokens => ({
  buttonSecondaryFill: foundation.mono100,
  buttonSecondaryText: foundation.mono800,
  buttonSecondaryBorder: foundation.mono400,
  buttonSecondaryHoverFill: foundation.mono200,
  buttonSecondaryHoverText: foundation.mono800,
  buttonSecondaryHoverBorder: foundation.mono500,
  buttonSecondaryActiveBorder: foundation.mono600,
  buttonSecondarySelectedFill: foundation.mono300,
  buttonSecondarySelectedText: foundation.mono800,
  buttonSecondarySelectedBorder: foundation.mono600,
  buttonSecondaryActiveFill: foundation.mono300,
  buttonSecondaryActiveText: foundation.mono800,
});

export default getComponentColorTokens;
