import { designUnit, timing } from './sizing';
import { getFontStyle } from './theme';

const button = `
  ${getFontStyle('button')}
  padding: ${designUnit(2)}px ${designUnit(3)}px;
  border:0;
  text-decoration: none;
  cursor:pointer;
  transition: all ${timing.normal} ease;
`


export const componentBase = {
  button
}
