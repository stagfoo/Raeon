export const sizes = {
  xs: '375px',
  sm: '425px',
  md: '768px',
  lg: '1024px',
  xl: '1440px'
}
const width = 96;
const gutter = 4;

export function container(def){
  return `
    width: 90%;
    margin-left: auto;
    margin-right: auto;
  `
}
function getWidth(width, n1, gutter, n2, n3) {
  return ( width / n1 ) - (gutter * n2 / n3 );
}
// export function col(sheet, suffix){
//   for (var i = 1; i < 13; i++) {
//     sheet.add(`.col-${i}${suffix}`, `
//         width: ${getWidth()}
//     `)
//   }
// }


export function grid(sheet){
  //http://simplegrid.io/
  sheet.add('.container', container('auto'));
  sheet.add('.col-1-sm', `width: ${getWidth(width, 12, gutter, 11, 12)}`);
  sheet.add('.col-2-sm', `width: ${getWidth(width, 6, gutter, 10, 12)}`);
  // .col-1-sm { width:($width / 12)  - ($gutter * 11 / 12); }
  // .col-2-sm { width: ($width / 6) - ($gutter * 10 / 12); }
  // .col-3-sm { width: ($width / 4) - ($gutter * 9 / 12); }
  // .col-4-sm { width: ($width / 3) - ($gutter * 8 / 12); }
  // .col-5-sm { width: ($width / (12 / 5)) - ($gutter * 7 / 12); }
  // .col-6-sm { width: ($width / 2) - ($gutter * 6 / 12); }
  // .col-7-sm { width: ($width / (12 / 7)) - ($gutter * 5 / 12); }
  // .col-8-sm { width: ($width / (12 / 8)) - ($gutter * 4 / 12); }
  // .col-9-sm { width: ($width / (12 / 9)) - ($gutter * 3 / 12); }
  // .col-10-sm { width: ($width / (12 / 10)) - ($gutter * 2 / 12); }
  // .col-11-sm { width: ($width / (12 / 11)) - ($gutter * 1 / 12); }
  // .col-12-sm { width: $width; }
  // sheet.add('.container', container('auto'));
  // sheet.add('.container.xs', container(sizes.xs));
  // sheet.add('.container.sm', container(sizes.sm));
  // sheet.add('.container.md', container(sizes.md));
  // sheet.add('.container.lg', container(sizes.lg));
  // sheet.add('.container.xl', container(sizes.xl));
}