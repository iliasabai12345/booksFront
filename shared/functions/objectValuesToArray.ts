export function objectValuesToArray(object: any): any[] {
  const arr = [];
  for (let key in object) {
    object[key] && arr.push(object[key]);
  }
  return arr;
}
