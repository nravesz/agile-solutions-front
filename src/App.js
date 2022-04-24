import React from "react";
import { Container } from "react-bootstrap";
import Header from "./components/Header";
import GraphOptions from "./components/GraphOptions";
import { Fragment } from "react";

const App = () => {
  return (
    <Fragment>
      <Header />
      <GraphOptions />
    </Fragment>
  )
}

export default App;