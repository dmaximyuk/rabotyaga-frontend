export function hexToRgb(hex: string): string {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  if (!result) return hex;
  return `rgb(${parseInt(result[1], 16)}, ${parseInt(
    result[2],
    16,
  )}, ${parseInt(result[3], 16)})`;
}
