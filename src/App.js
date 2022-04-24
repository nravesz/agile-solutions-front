import React from "react";
import Header from "./components/Header";
import GraphController from "./components/GraphController";
import { Fragment } from "react";

const App = () => {
  return (
    <Fragment>
      <Header />
      <GraphController />
    </Fragment>
  )
}

export default App;