import shuffle from '.';

describe('shuffle', () => {
  it('returns an array with sum length after shuffle', () => {
    const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    shuffle(array);
    expect(array).toHaveLength(9);
  });
  it('returns an array of same elements after shuffle', () => {
    const array = [1, 2, 3];
    shuffle(array);
    expect(array).toContain(1);
    expect(array).toContain(2);
    expect(array).toContain(3);
  });
});
