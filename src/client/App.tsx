import React from "react";
import loadable from '@loadable/component';
import { BrowserRouter, Switch, Route } from "react-router-dom";

const Baz = loadable(() => import(/* webpackChunkName: "baz" */'./Bar'));

import { ReactSelectTestComponent } from "@/client/Select";
import Ace from "@/client/Ace";

// import url from "images/HT50.jpg";
// function loadImage(name: string) {
//   return import(`images/${name}`);
// }

export function App() {
  const v = 1;
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" render={() => {
          const templates = require.context('images', true, /\.(jpg|jpeg)$/);

          return (
            <>
              {templates.keys().map((elem) => (
                <img key={elem} src={templates(elem).default} />
              ))}
            </>
          );
        }}
        />
        <Route path="/editor" render={Ace} />
        <Route path="/select" render={() => (
          <ReactSelectTestComponent options={[
            { label: 'Ronaldo', value: 'cr7' },
            { label: 'Messi', value: 'm10' }
          ]} />
        )} />
        <Route path="/baz" component={Baz} />
      </Switch>
    </BrowserRouter>
  );
}
