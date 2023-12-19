// Calculating clamp value for Responsive Typography,
// will use minimun desired fontsize, maximum fontsize, viewport width min and max
// maximum viewport width - 1920px, min viewport width = 280px ( samsung galaxy fold);
// havent implemented px to rem so make sure to use rem as fontsize in Clamp function

const convertToRem = (fontsize: string) => {
  return parseInt(fontsize, 10) / 16;
};

const Clamp = (minSize: number, maxSize: number) => {
  const minVw = convertToRem("280");
  const maxVw = convertToRem("1920");
  const slope = (maxSize - minSize) / (maxVw - minVw);
  const yAxisIntersection = -minVw * slope + minSize;
  const preferredValue = `${yAxisIntersection}rem + ${slope * 100}vw`;
  return `clamp(${minSize}rem, ${preferredValue} , ${maxSize}rem)`;
};

export default Clamp;
