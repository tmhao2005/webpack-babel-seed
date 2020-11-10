import * as React from "react";
import DateFnsUtils from '@date-io/date-fns'
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import  "./index.css";

// console.log(styles)

// import { Button } from "antd";

// still don't know why `babel-jest` can work despite of configuring { esModuleInterop: false }
// I guess it doesn't use the `tsconfig.json`
console.log(DateFnsUtils)

export const Bar = () => (
  <MuiPickersUtilsProvider utils={DateFnsUtils}>                  
    <div styleName="bar">Hi guys</div>
  </MuiPickersUtilsProvider>
);

export default Bar;
