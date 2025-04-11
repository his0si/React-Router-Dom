import React from "react";
import { createRoot } from "react-dom/client";

function Home() {
  return (
    <div>
      <h1>홈 페이지</h1>
      <a href="/about.html">소개로 이동</a>
    </div>
  );
}

const root = createRoot(document.getElementById("root"));
root.render(<Home />);


