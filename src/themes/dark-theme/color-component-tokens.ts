import { ColorTokens, ComponentColorTokens } from '../types';
import darkColorTokens from './color-tokens';

const getComponentColorTokens = (
  foundation: ColorTokens = darkColorTokens
): ComponentColorTokens => ({
  // Button
  // Secondary
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
  buttonSecondaryDisabledFill: foundation.mono1000,
  buttonSecondaryDisabledText: foundation.mono500,
  buttonSecondaryDisabledBorder: foundation.mono500,
  // Tertiary
  buttonTertiaryFill: foundation.mono1000,
  buttonTertiaryText: foundation.mono200,
  buttonTertiaryBorder: foundation.mono1000,
  buttonTertiaryHoverFill: foundation.mono900,
  buttonTertiaryHoverText: foundation.mono200,
  buttonTertiaryHoverBorder: foundation.mono900,
  buttonTertiaryActiveFill: foundation.mono800,
  buttonTertiaryActiveText: foundation.mono200,
  buttonTertiaryActiveBorder: foundation.mono800,
  buttonTertiarySelectedFill: foundation.mono800,
  buttonTertiarySelectedText: foundation.mono200,
  buttonTertiarySelectedBorder: foundation.mono800,
  buttonTertiaryDisabledFill: foundation.mono1000,
  buttonTertiaryDisabledText: foundation.mono500,
  buttonTertiaryDisabledBorder: foundation.mono1000,
});

export default getComponentColorTokens;
