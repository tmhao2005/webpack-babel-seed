export {};

declare module 'react' {
  interface HTMLAttributes<T> {
    styleName?: string;
  }
}
