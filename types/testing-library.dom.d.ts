import "@testing-library/dom";
declare module "@testing-library/dom" {
  export type BoundFunction<T> = T extends (
    attribute: string,
    element: HTMLElement,
    text: infer P,
    options: infer Q
  ) => infer R
    ? (text: P, options?: Q) => R
    : T extends (
        a1: any,
        text: infer P,
        options: infer Q,
        waitForElementOptions: infer W
      ) => infer R
    ? (text?: P, options?: Q, waitForElementOptions?: W) => R
    : T extends (a1: any, text: infer P, options: infer Q) => infer R
    ? (text: P, options?: Q) => R
    : never;
}
