// #1
const BLAH_DELETE = 'BLAH_DELETE';
const BLAH_EDIT = 'BLAH_EDIT';

export type DeleteAction = {
  type: typeof BLAH_DELETE
  payload: {
    id: string;
  };
};

export type EditAction = {
  type: typeof BLAH_EDIT
  payload: {
    id: string;
    name: string;
  };
};

type MyAction = DeleteAction | EditAction

type ValueType<T, K> = K extends keyof T ? T[K] : never;

type ExtractPayload<A, T> = A extends { type: T, payload: infer R } ? R : never;

type Curry<A> = <T extends ValueType<A, 'type'>>(arg: T) => (payload: ExtractPayload<A, T>) => {
  type: T
  payload: ExtractPayload<A, T>
};

// type Curry1<A, T> = (payload: ExtractPayload<A, T>) => {
//   type: T
//   payload: ExtractPayload<A, T>
// };

export const makeActionCreator = <A>(): Curry<A> => action => payload => ({
  type: action,
  payload,
});

// declare function makeActionCreator<A>(params: infer R): Curry<A>;

const deleteBlah = makeActionCreator<MyAction>()('BLAH_DELETE');
deleteBlah({
 id: ''
}); // Correct
// deleteBlah({ id: '', name: '' }) // Error

const obj = {
  PROP_A:  "VALUE_A",
  PROP_B:  "VALUE_B",
} as const;

type Values<T> = T extends { [K in string]: infer R } ? R : never;

export type testValues = Values<typeof obj> // VALUE_A | VALUE_B

// #2
export const colors = {
  accent: "#F3534A",
};

export type ColorType = keyof typeof colors;

type ColorStyle<T extends string> = Record<ColorType, Record<T, string>>;

function getColorStyle<T extends string>(propertyName: T): ColorStyle<T> {
  // { [x: string]: string } !== { [P in string]: string }
  return {
    accent: {
 [propertyName]: colors.accent
},
  } as ColorStyle<T>; // have to cast
}

//
type MyType = {
  a: string;
  b: string;
  c: number;
};

type OnlyStringKeys<T> = { [K in keyof T]: T[K] extends string ? K : never }[keyof T]

type testOnlyString = Pick<MyType, OnlyStringKeys<MyType>>; // a | b
