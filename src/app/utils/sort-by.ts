import { sortBy as _sortBy } from 'lodash';

/**
 * Wrapper for the lodash utility.
 * If you need descending order, just revers the result from here.
 * How to USE - https://lodash.com/docs/4.17.11#sortBy
 *
 * You can pass a function to figure out the value if you want to sort deeply nested objects.
 * Or pass a string if you want to sort by the top level property.
 *
 * @param collection
 * @param propertyValue
 * @param asc
 */
export function sortBy<T>(collection: T[], propertyValue?: any, asc: boolean = true): T[] {
  if (!asc) {
    return _sortBy(collection, propertyValue)
      .reverse();
  }

  return _sortBy(collection, propertyValue);
}
