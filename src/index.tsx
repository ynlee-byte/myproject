import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { TestJh } from "./screens/TestJh/TestJh";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <TestJh />
  </StrictMode>,
);
