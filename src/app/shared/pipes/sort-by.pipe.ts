import { Pipe, PipeTransform } from '@angular/core';
import { sortBy } from "../../utils/sort-by";

@Pipe({
  name: 'sortBy'
})
export class SortByPipe implements PipeTransform {

  /**
   * This is used for more advanced sorting. For simpler sorting needs, use sort.pipe.
   * @param value
   * @param args - A function or a sort property. See lodash's sort for details
   * @param asc
   */
  public transform<T>(value: T[], args?: any, asc: boolean = true): T[] {
    if (!value) {
      return [];
    }

    return sortBy(value, args, asc);
  }

}
