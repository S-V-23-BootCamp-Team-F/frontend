import React from "react";
import { Suspense, useState } from "react";
import "./App.css";
import Router from "../Router";

function App() {
  return (
    <Suspense fallback={"loading..."}>
      <div className="App">
        <Router />
      </div>
    </Suspense>
  );
}

export default App;
