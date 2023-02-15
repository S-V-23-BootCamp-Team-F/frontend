import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import "./utils/api.ts";
import * as Sentry from "@sentry/react";
import { BrowserTracing } from "@sentry/tracing";

Sentry.init({
  dsn: "https://feebae7786a84033be2b7696fb45b807@o4504683587371008.ingest.sentry.io/4504683590057984",
  integrations: [new BrowserTracing()],

  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0,
});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
