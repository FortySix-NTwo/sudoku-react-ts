/**
 * Compares two arrays (of any dimensions)
 * Returns boolean value indicating array equality (true if equal).
 * NOTE: Arrays are equal if their lengths and their contents match.
 * @param arr1 Column
 * @param arr2 Row
 */

const compareColRow = (arr1: any[], arr2: any[]): boolean => {
  if (arr1.length === 0 && arr2.length === 0) {
    return true
  }
  if (arr1.length !== arr2.length) {
    return false
  }

  let singleDimension: boolean =
    !Array.isArray(arr1[0]) || !Array.isArray(arr2[0])

  for (let idx = 0, len = arr1.length; idx < len; idx++) {
    let contentsDiffer = singleDimension
      ? arr1[idx] !== arr2[idx]
      : !compareColRow(arr1[idx], arr2[idx])
    if (contentsDiffer) {
      return false
    }
  }

  return true
}

export default compareColRow
