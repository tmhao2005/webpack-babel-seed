
declare module '*.jpg' {
  const url: string;
  export default url;
}

declare module '*.jpeg' {
  const url: string;
  export default url;
}

type Baz = {
  new(): any;
}

// declare module 'baz' {
//   const classes = await import('../src/index');
//   export class ClassA extends classes.ClassA {}
// }
