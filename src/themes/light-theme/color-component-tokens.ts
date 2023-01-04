import { ColorTokens, ComponentColorTokens } from '../types';
import lightColorTokens from './color-tokens';

const getComponentColorTokens = (
  foundation: ColorTokens = lightColorTokens
): ComponentColorTokens => ({
  buttonSecondaryFill: foundation.mono100,
  buttonSecondaryText: foundation.black,
  buttonSecondaryBorder: foundation.mono400,
  buttonSecondaryHoverFill: foundation.mono200,
  buttonSecondaryHoverText: foundation.black,
  buttonSecondaryHoverBorder: foundation.mono500,
  buttonSecondaryActiveFill: foundation.mono300,
  buttonSecondaryActiveText: foundation.black,
  buttonSecondaryActiveBorder: foundation.mono600,
  buttonSecondarySelectedFill: foundation.mono300,
  buttonSecondarySelectedText: foundation.black,
  buttonSecondarySelectedBorder: foundation.mono600,
});

export default getComponentColorTokens;
