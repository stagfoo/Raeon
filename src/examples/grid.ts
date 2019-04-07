import { grid } from 'style/grid'
import Fairybread from 'fairybread';

export const container = new Fairybread({render:'raw'}).css`
  .container {
   ${grid('container')};
  }
`;
export const columns = new Fairybread({render: 'raw'}).css`
  .col-1-sm {
    ${grid('')}
  }
 `
