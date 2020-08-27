/**
 * compare two arrays of any dimension
 * returns true only when equal each other
 * @param arr1 column
 * @param arr2 row
 */
function compareColRow(arr1: any[], arr2: any[]): boolean {
  if (!Array.isArray(arr1) && !Array.isArray(arr2)) return arr1 === arr2;
  if (arr1.length !== arr2.length) return false;

  for (let i = 0, len = arr1.length; i < len; i++) {
    if (!compareColRow(arr1[i], arr2[i])) return false;
  }
  return true;
}

export default compareColRow;
