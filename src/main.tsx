import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import "./utils/api.ts";
import * as Sentry from "@sentry/react";
import { BrowserTracing } from "@sentry/tracing";

//dsn: 이벤트 전송을 위한 식별키
//release: 앱 버전 (주로 package.json에 명시한 버전을 사용 _버전별 오류 추적 용이키 위함)
//environment: 앱 환경  (dev, production 등)
//normalizeDepth: 컨텍스트 데이터를 주어진 깊이로 정규화
//integrations: 플랫폼 SDK별 통합 구성 설정 (react의 경우 react-router integration 설정가능)
Sentry.init({
  dsn: "https://e42fe574771b422296f6764163327d8d@o4504683587371008.ingest.sentry.io/4504683725258752",
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
