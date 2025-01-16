/**
 * Function to normally deep clone any object or value
 */
export function clone<T>(object: T): T {
  return structuredClone(object);
}
