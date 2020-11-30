import * as React from "react";

// @ts-ignore
import loadable from '@loadable/component';
// @ts-ignore
import logo from "images/instagram-logo.jpeg";

const Bar = loadable(
  () => import('./Bar')
);


import { ReactSelectTestComponent } from "@/client/Select";
import url from "images/HT50.jpg";

export function App() {
  return (
    <>
      <ReactSelectTestComponent options={[
        { label: 'Ronaldo', value: 'cr7' },
        { label: 'Messi', value: 'm10' }
      ]} />
      <img width="400" height="200" src={logo} />
      <img src={url} />
    </>
  );
}
