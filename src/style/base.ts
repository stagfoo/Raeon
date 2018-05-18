
//why?
import colors from 'style/colors';
import { coreGradients, cross } from 'style/gradient';
import { base, feedback } from 'style/buttons';

export default function bodyStyles(sheet) {
  return `
  margin:0;
  padding:0;
  background: #fff;
  font-family: 'Ubuntu', sans-serif;
  display: inline-block;
  height: 100%;
  width: 100%;
  left: 0;
  top: 0;
  font-size: 100%;
 `
}
