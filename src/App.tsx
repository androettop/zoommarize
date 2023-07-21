import React from "react";
import { globalCss } from "./utils/theme";

const globalStyles = globalCss({
  body: { margin: 0, fontFamily: "$default" },
});

function App() {
  globalStyles();
  return <div>test</div>;
}

export default App;
