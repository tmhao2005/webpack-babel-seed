import React from "react";
import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-json";
import "ace-builds/src-noconflict/theme-github";

// import 'ace-builds/webpack-resolver';
// OR

import ace from "ace-builds";
// @ts-ignore
import jsonWorkerUrl from "file-loader!ace-builds/src-noconflict/worker-json";

ace.config.setModuleUrl("ace/mode/json_worker", jsonWorkerUrl);

export default () => (
  <AceEditor
    mode="json"
    theme="github"
    name="UNIQUE_ID_OF_DIV"
    editorProps={{ $blockScrolling: true }}
  />
);
