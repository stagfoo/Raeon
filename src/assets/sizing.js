
const baseDesignUnit = 8;

export function designUnit(multipler){
  return multipler * baseDesignUnit;
}

export const timing = {
  'fast': `0.1s`,
  'normal': `0.4s`,
  'slow': `0.8s`,
}
