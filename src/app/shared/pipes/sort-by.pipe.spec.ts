import { SortByPipe } from './sort-by.pipe';
import { sortBy } from "../../utils/sort-by";

describe('SortByPipe', () => {
  let pipe: SortByPipe;

  beforeEach(() => {
    pipe = new SortByPipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should sort array', () => {
    const stringArray: {value: string}[] = [
      { value: 'A' },
      { value: 'B' },
      { value: 'C' },
    ];
    const sortedArray = pipe.transform(stringArray, 'value', true);
    expect(sortedArray)
      .toEqual(stringArray);
  });

  it('should sort by value ascending without providing true', () => {
    const stringArray: {value: string}[] = [
      { value: 'A' },
      { value: 'B' },
      { value: 'C' },
    ];
    const sortedArray = pipe.transform(stringArray, 'value');
    expect(sortedArray)
      .toEqual(stringArray);

    expect(sortBy(stringArray, 'value'))
      .toEqual(sortedArray);
  });

  it('should sort array descending when asc is set to false', () => {
    const stringArray: {value: string}[] = [
      { value: 'A' },
      { value: 'B' },
      { value: 'C' },
    ];
    const sortedArray = pipe.transform(stringArray, 'value', false);
    expect(sortedArray)
      .toEqual(stringArray.reverse());
  });

  it('should return empty array when value is null', () => {
    const sortedArray = pipe.transform([]);
    expect(sortedArray)
      .toEqual([]);
  });
});
