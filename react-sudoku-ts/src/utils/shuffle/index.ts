/**
 * Fisher-Yates shuffle algorithm
 * for further details please follow this link
 * https://en.wikipedia.org/wiki/Fisher–Yates_shuffle
 * @param {any[]} array
 */

function shuffle(array: any[]) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1))
    ;[array[i], array[j]] = [array[j], array[i]]
  }
}

export default shuffle
