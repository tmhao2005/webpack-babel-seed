type ArrayKeys<T> = Array<keyof T>;

// Length
type Length<T extends any[]> = T['length'];

type testLength1 = Length<[string, string]>; // 2

// Head
type Head<T extends any[]> = T extends [any, ...any[]] ? T[0] : never;

type testHead1 = Head<[string, number]> // string

// Tail
type Tail<T extends any[]> = ((...args: T) => any) extends ((ignore: any, ...args: infer R) => any) ? R : never;

type testTail1 = Tail<[string, number, boolean]> // [number, boolean]

// HasTail
type HasTail<T extends any[]> = T extends ([any] | []) ? false : true;

type testHasTail1 = HasTail<[1]>
type testHasTail2 = HasTail<[]>

// Last
type Last<T extends any[]> = {
  0: Last<Tail<T>>,
  1: Head<T>,
} [
  HasTail<T> extends true
  ? 0
  : 1
]

type testLast1 = Last<[1, 2]> // 2

// Prepend
type Prepend1<V, T extends any[]> = ((a1: V, ...a2: T) => any) extends ((...a: infer R) => any) ? R : never;

type testPrepend1 = Prepend1<1, [2, 3]>

// Key
type ValueType<T, K> = K extends keyof T ? T[K] : never;
type Key<T, K> = K extends keyof T ? K : string;

type testReadValue = ValueType<{ foo: 1 }, 'foo'>

// Operation: auto read the value type
type Operation<T, K> = {
  key: K
  operation: 'add' | 'delete'
  value: ValueType<T, K>
}

type BuildOperation<T> = <K>(arg: K) => (arg: Operation<T, K>) => Operation<T, K>

type User = { name: string; age: number }

type testBuild1 = BuildOperation<User>

function build<T>(): BuildOperation<T> {
  return (a) => (b) => ({
    key: a,
    ...b,
  });
}

const bar = build<User>()('age' as const)({
  key: 'age',
  value: 20,
  operation: 'add'
});
