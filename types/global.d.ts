export {};
declare global {
  declare namespace NodeJS {
    interface Global {
      navigator: any;
    }
  }

  // interface Promise<T> {
  //   finally<T>(f: () => void): Promise<T>,
  // }

  interface PromiseConstructor {
    timeout(n: number): any;
  }
}
