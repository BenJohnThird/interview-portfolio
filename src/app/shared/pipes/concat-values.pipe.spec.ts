import { ConcatValuesPipe } from './concat-values.pipe';

describe('ConcatValuesPipe', () => {
  let pipe: ConcatValuesPipe;

  beforeEach(() => {
    pipe = new ConcatValuesPipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should concat array even without providing join text', () => {
    const stringArray: string[] = ['Angular', 'Typescript', 'Firebase'];
    const concatValue: string = pipe.transform(stringArray);
    expect(concatValue)
      .toBe('Angular, Typescript, Firebase');
  });

  it('should return empty string when concatenating with empty array', () => {
    const emptyArray: string[] = [];
    const concatValue: string = pipe.transform(emptyArray);
    expect(concatValue)
      .toBe('');
  });
});
