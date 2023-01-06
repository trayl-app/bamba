import {
  ColorTokens,
  CoreSemanticColorTokens,
  SemanticColorTokens,
} from '../types';
import darkColorTokens from './color-tokens';

const getSemanticColorTokens = (
  foundation: ColorTokens = darkColorTokens
): SemanticColorTokens => {
  const core: CoreSemanticColorTokens = {
    backgroundPrimary: foundation.black,
    backgroundSecondary: foundation.mono100,
    backgroundTertiary: foundation.mono200,
    backgroundInversePrimary: foundation.white,
    backgroundInverseSecondary: foundation.mono1000,
    backgroundInverseTertiary: foundation.mono800,
    borderOpaque: foundation.mono400,
    borderTransparent: foundation.mono200,
    borderInverseOpaque: foundation.mono1000,
    borderInverseTransparent: foundation.mono800,
    contentPrimary: foundation.white,
    contentSecondary: foundation.mono300,
    contentTertiary: foundation.mono400,
    contentInversePrimary: foundation.black,
    contentInverseSecondary: foundation.mono200,
    contentInverseTertiary: foundation.mono400,
  };

  return {
    ...core,
  };
};

export default getSemanticColorTokens;
