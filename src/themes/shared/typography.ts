import { Font, FontTokens, Typography } from '../types';

export const defaultFontTokens: FontTokens = {
  fontFamily: 'Segoe UI, Helvetica, Arial, sans-serif',
};

const getTypography = (
  fontTokens: FontTokens = defaultFontTokens
): Typography => {
  const font100: Font = {
    fontFamily: fontTokens.fontFamily,
    fontWeight: 'normal',
    fontSize: '12px',
    lineHeight: '16px',
  };

  const font150: Font = {
    fontFamily: fontTokens.fontFamily,
    fontWeight: 'normal',
    fontSize: '14px',
    lineHeight: '20px',
  };

  const font200: Font = {
    fontFamily: fontTokens.fontFamily,
    fontWeight: 'normal',
    fontSize: '16px',
    lineHeight: '24px',
  };

  return {
    font100,
    font150,
    font200,

    ParagraphXSmall: font100,
  };
};

export default getTypography;
