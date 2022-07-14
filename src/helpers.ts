type Predicate = <T>(value: T, index: number, array: T[]) => unknown;
export function filterValues<T extends Record<string, any>>(obj: Record<string, any>, predicate: Predicate): T {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  return Object.fromEntries(Object.entries(obj).filter(([_, v], i, arr) => predicate(v, i, arr))) as T;
}

/**
 * Filter all values equals null or undefined.
 * @param obj
 */
export function filterVoid<T extends Record<string, any>>(obj: Record<string, any>): T {
  return filterValues(obj, (v) => typeof v !== 'undefined' && v !== null);
}
