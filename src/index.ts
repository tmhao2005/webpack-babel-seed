export function replace<T>(
  arr: T[],
  predicate: (elem: T) => boolean,
  props: Partial<T>
) {
  const idx = arr.findIndex(predicate);
  const newOne: T = { ...arr[idx], ...props };

  return Object.assign([...arr], { [idx]: newOne });
}

export const throwError = async () => {
  await new Promise((resolve) => setTimeout(resolve));
  throw new Error("foo");
};

// Overloading can resolve this issue with ease
type Flow1 = {
  <T, U>(a: T, f: (a: T) => U): U;
  <T, U>(a: Promise<T>, f: (a: T) => U): Promise<U>;
};

const flow1: Flow1 = <T, U>(a: T | Promise<T>, f: (a: T) => U) =>
  a instanceof Promise ? a.then(f) : f(a);
flow1(Promise.resolve(4), (n: number) => n ** 2).then(console.log);

// TODO
// const objWithNumberAge = useUrl<{ age: number }>(["name", "age"]);
// the type of objWithNumberAge is expected to be: {name: string, age: number}

type ReturnMap = {
  a: number;
  b: string[];
};
function func<K extends keyof ReturnMap>(val: K): ReturnMap[K];
function func(val: keyof ReturnMap): ReturnMap[keyof ReturnMap] {
  if (val === "a") return 5;
  if (val === "b") return ["a", "b"];
  throw new Error();
}

// function ovl<T>(a: 'a', b: T): T;
// function ovl(a: 'a', b: number): string;
// function ovl(a: 'b', b: string): string;
// function ovl(a: 'a' | 'b', b: string | number): any {
//   if (a === 'a') {
//     console.log(b)
//   }
// }
