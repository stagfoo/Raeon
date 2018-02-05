const coreColors = {
  red: '#FF008A',
  cyan: '#00FBF1',
  blue: '#2B2DFE',
  pink: '#FF05FA',
  green: '#85CF42',
  orange: '#FA6F0A',
  yellow: '#FDCA21',
  purple: '#6A00FD',
}
const hueShades = {
  redD1: '#AD005E',
  redL1: '#FF52AF',
  redL2: '#FF94CE',
  cyanD1: '#00C2BA',
  cyanL1: '#80FFFA',
  cyanL2: '#A8FFFF',
  blueD1: '#1E20B2',
  blueL1: '#2426C9',
  blueL2: '#8A9CFF',
  pinkD1: '#BA00B6',
  pinkL1: '#FF61FC',
  pinkL2: '#FFBDF7',
  greenD1: '#639932',
  greenL1: '#9BF44A',
  greenL2: '#BAFF75',
  orangeD1: '#DB6109',
  orangeL1: '#FA8C0A',
  orangeL2: '#FFAF75',
  yellowD1: '#CCA31B',
  yellowL1: '#FAD352',
  yellowL2: '#ECFF75',
  purpleD1: '#5100C2',
  purpleL1: '#964AFF',
  purpleL2: '#B47DFF',
}
const shades = {
  grey: '#272738',
  greyD1: '#08080A',
  greyL1: '#353552',
  greyL2: '#444470',
  blue: '#222278',
  blueD1: '#121252',
  blueD2: '#150A52',
  pink: '#E8D4F9',
  pinkL1: '#EFDFFF'
}

const colors = {
  shades,
  ...coreColors,
  ...hueShades
}
export default colors;