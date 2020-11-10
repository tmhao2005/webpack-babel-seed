export function replace<T>(arr: T[], predicate: (elem: T) => boolean, props: Partial<T>) {
  const idx = arr.findIndex(predicate);
  const newOne: T = { ...arr[idx], ...props }

  return Object.assign([...arr], { [idx]: newOne })
}
