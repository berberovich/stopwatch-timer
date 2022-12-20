import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
import StopwatchContextProvider from "./components/context/StopwatchContextProvider";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <StopwatchContextProvider>
      <App />
    </StopwatchContextProvider>
  </StrictMode>
);
