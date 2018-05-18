import { grid } from 'style/grid'
import Fairybread from 'fairybread';

export const container = new Fairybread({render:'raw'}).css`
  .container {
   ${grid('container')};
  }
`;

