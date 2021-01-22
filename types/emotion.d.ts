import '@emotion/react';

declare module '@emotion/react' {
  export interface Theme {
    colors: {
      primaryColor: string;
      accentColor: string;
    };
  }
}
