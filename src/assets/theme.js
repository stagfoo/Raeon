export const theme = require('../theme.json');
export const {
  colors,
  fontSizes,
  fonts,
  fontWeights,
  lineHeights,
  textStyles
 } = theme;

export function getFontStyle(name){
  console.log(`font-family: "${textStyles[name].fontFamily}", sans-serif;`)
   return `
    font-family: "${textStyles[name].fontFamily}", sans-serif;
    font-weight:${textStyles[name].fontWeight};
    font-size: ${textStyles[name].fontSize}px;
    line-height: ${textStyles[name].lineHeight};
   `
 }
