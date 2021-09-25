import React from "react";
import DateFnsUtils from "@date-io/date-fns";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";

// import { Button } from "antd";
// still don't know why `babel-jest` can work despite of configuring { esModuleInterop: false }
// I guess it doesn't use the `tsconfig.json`
// console.log(DateFnsUtils);

import styled from "styled-components";
// @ts-ignore
import svg from "../../../images/test.svg";
import css from "./index.module.css";

const Test = styled(svg)``;

export const Bar = () => {
  const [open, setOpen] = React.useState(false);

  return open ? (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <div styleName="bar">Foo</div>
      <div className={css.bar}>Bar</div>
      <Test />
    </MuiPickersUtilsProvider>
  ) : (
    <button onClick={() => setOpen(true)} className="btn">
      Click me
    </button>
  );
};
