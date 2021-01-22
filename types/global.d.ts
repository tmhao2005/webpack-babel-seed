export {};
declare global {
  declare namespace NodeJS {
    interface Global {
      navigator: any;
    }
  }
}
