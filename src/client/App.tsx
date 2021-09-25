import React, { useEffect, useRef, useState } from "react";
import loadable from "@loadable/component";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { ReactSelectTestComponent } from "@/client/Select";
import Ace from "@/client/Ace";

import "leaflet/dist/leaflet.css";

const Baz = loadable(() => import(/* webpackChunkName: "baz" */ "./Bar"));

// import url from "images/HT50.jpg";
// function loadImage(name: string) {
//   return import(`images/${name}`);
// }

// this can't be work due to webpack
// const loadPage = (page: string) => {
//   return React.lazy(() => import(`./${page}`))
// }

export function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route
          exact
          path="/"
          render={() => {
            const templates = require.context("images", true, /\.(jpg|jpeg)$/);
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
        <Route
          path="/select"
          render={() => (
            <ReactSelectTestComponent
              options={[
                { label: "Ronaldo", value: "cr7" },
                { label: "Messi", value: "m10" },
              ]}
            />
          )}
        />
        <Route path="/baz" component={Baz} />
      </Switch>
    </BrowserRouter>
  );
}
