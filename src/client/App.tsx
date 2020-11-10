import * as React from "react";
// @ts-ignore
import loadable from '@loadable/component';
// @ts-ignore
import url from "../../images/HT50.jpg";
// @ts-ignore
import logo from "../../images/instagram-logo.jpeg";

// const Bar = loadable(
//   () => import('./Bar')
// );

import Bar from "@/client/Bar";

export function App() {
  return (
    <>
      <Bar />
      <img src={logo} />
      <img src={url} />
    </>
  )
}
