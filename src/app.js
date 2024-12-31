import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";

// App Layout Component
const AppLayout = () => {
  return (
    <div>
      <Header />
      <Body />
    </div>
  );
};

// Rendering the app
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
