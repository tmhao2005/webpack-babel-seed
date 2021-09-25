import React, { lazy, Suspense } from "react";
import { Switch, Route } from "react-router-dom";

const Component = lazy(() => import("./Home"));
const PageNotFound = lazy(() => import("./404"));

export default function App() {
  return (
    <div className="App">
      <Switch>
        <Route
          path="/component"
          exact
          render={() => (
            <Suspense fallback={<div>Loading..</div>}>
              <Component />
            </Suspense>
          )}
        />

        <Route
          path="*"
          render={() => (
            <Suspense fallback={<div>Loading..</div>}>
              <PageNotFound />
            </Suspense>
          )}
        />
      </Switch>
    </div>
  );
}
