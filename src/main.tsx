import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Router from "./router";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./api/axios";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "sonner";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Router />
      <Toaster/>
      <ReactQueryDevtools/>
    </QueryClientProvider>
  </React.StrictMode>
);
