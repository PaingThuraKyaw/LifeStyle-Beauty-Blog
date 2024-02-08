import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Router from "./router";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./api/axios";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Router />
    </QueryClientProvider>
  </React.StrictMode>
);
