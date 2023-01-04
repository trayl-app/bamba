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
  };

  return {
    ...core,
  };
};

export default getSemanticColorTokens;
