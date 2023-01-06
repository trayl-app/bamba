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

  const font250: Font = {
    fontFamily: fontTokens.fontFamily,
    fontWeight: 'normal',
    fontSize: '18px',
    lineHeight: '28px',
  };

  const font300: Font = {
    fontFamily: fontTokens.fontFamily,
    fontWeight: 'normal',
    fontSize: '20px',
    lineHeight: '28px',
  };

  const font350: Font = {
    fontFamily: fontTokens.fontFamily,
    fontWeight: 'normal',
    fontSize: '22px',
    lineHeight: '28px',
  };

  const font400: Font = {
    fontFamily: fontTokens.fontFamily,
    fontWeight: 'normal',
    fontSize: '24px',
    lineHeight: '32px',
  };

  const font450: Font = {
    fontFamily: fontTokens.fontFamily,
    fontWeight: 'normal',
    fontSize: '26px',
    lineHeight: '32px',
  };

  const font500: Font = {
    fontFamily: fontTokens.fontFamily,
    fontWeight: 'normal',
    fontSize: '28px',
    lineHeight: '36px',
  };

  const font550: Font = {
    fontFamily: fontTokens.fontFamily,
    fontWeight: 'normal',
    fontSize: '30px',
    lineHeight: '36px',
  };

  const font600: Font = {
    fontFamily: fontTokens.fontFamily,
    fontWeight: 'normal',
    fontSize: '32px',
    lineHeight: '40px',
  };

  const font650: Font = {
    fontFamily: fontTokens.fontFamily,
    fontWeight: 'normal',
    fontSize: '34px',
    lineHeight: '44px',
  };

  const font700: Font = {
    fontFamily: fontTokens.fontFamily,
    fontWeight: 'normal',
    fontSize: '36px',
    lineHeight: '48px',
  };

  const font750: Font = {
    fontFamily: fontTokens.fontFamily,
    fontWeight: 'normal',
    fontSize: '38px',
    lineHeight: '52px',
  };

  const font800: Font = {
    fontFamily: fontTokens.fontFamily,
    fontWeight: 'normal',
    fontSize: '40px',
    lineHeight: '56px',
  };

  const font850: Font = {
    fontFamily: fontTokens.fontFamily,
    fontWeight: 'normal',
    fontSize: '42px',
    lineHeight: '60px',
  };

  const font900: Font = {
    fontFamily: fontTokens.fontFamily,
    fontWeight: 'normal',
    fontSize: '44px',
    lineHeight: '64px',
  };

  const font950: Font = {
    fontFamily: fontTokens.fontFamily,
    fontWeight: 'normal',
    fontSize: '46px',
    lineHeight: '68px',
  };

  const font1000: Font = {
    fontFamily: fontTokens.fontFamily,
    fontWeight: 'normal',
    fontSize: '48px',
    lineHeight: '72px',
  };

  return {
    font100,
    font150,
    font200,
    font250,
    font300,
    font350,
    font400,
    font450,
    font500,
    font550,
    font600,
    font650,
    font700,
    font750,
    font800,
    font850,
    font900,
    font950,
    font1000,
    ParagraphXSmall: font100,
    ParagraphSmall: font200,
    ParagraphMedium: font300,
    ParagraphLarge: font400,
    LabelXSmall: font150,
    LabelSmall: font250,
    LabelMedium: font350,
    LabelLarge: font450,
    HeadingXSmall: font550,
    HeadingSmall: font650,
    HeadingMedium: font750,
    HeadingLarge: font850,
    HeadingXLarge: font950,
    HeadingXXLarge: font1000,
  };
};

export default getTypography;
