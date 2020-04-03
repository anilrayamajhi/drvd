import React from "react";
import {
  StylesProvider,
  createGenerateClassName,
} from "@material-ui/core/styles";

import { Main, InputLength } from "./Components";

//Custom Provide/Redux like store.
import { StoreProvider } from "./hooks/appState";

// helper function to avoid namespace conflict
const generateClassName = createGenerateClassName({
  //add prefix to generated css in prod mode to conflict namespace
  // specially on  multi - entry app
  productionPrefix: "drvd-",
});

function App() {
  return (
    <StylesProvider generateClassName={generateClassName}>
      <StoreProvider>
        <InputLength />
        <Main />
      </StoreProvider>
    </StylesProvider>
  );
}

export default App;
