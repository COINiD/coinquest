import React from "react";
import { hydrate, render } from "react-dom";
import Index from "./pages/index";

const rootElement = document.getElementById("root");
if (rootElement.hasChildNodes()) {
  hydrate(<Index />, rootElement);
} else {
  render(<Index />, rootElement);
}
