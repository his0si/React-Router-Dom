import React from "react";
import { createRoot } from "react-dom/client";

function About() {
  return (
    <div>
      <h1>소개 페이지</h1>
      <a href="/home.html">홈으로 이동</a>
    </div>
  );
}

const root = createRoot(document.getElementById("root"));
root.render(<About />);
