import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'concatValues'
})
/**
 * Angular pipe that concat string of array
 */
export class ConcatValuesPipe implements PipeTransform {

  public transform(values: string[], joinText = ', '): string {
    if (!values?.length) {
      return '';
    }

    return values
      .join(joinText);
  }

}
