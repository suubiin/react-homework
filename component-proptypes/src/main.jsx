import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import '@/styles/main.css';
import CountButton from "@/component/CountButton";

const domNode = document.getElementById("root");
ReactDOM.createRoot(domNode).render(
  <StrictMode>
    <CountButton initialCount={1}/>
  </StrictMode>
);
