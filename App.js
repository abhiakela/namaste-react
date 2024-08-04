import React from "react";
import ReactDOM from "react-dom/client"

const parent = React.createElement("div", { id: "parent" },
  [
    React.createElement("div", { className: "child" },
      [
        React.createElement("h1", {}, "I'm an h1🚀 tag"),
        React.createElement("h1", {}, "I'm an h2 tag🎯")
      ]
    ),
    React.createElement("div", { className: "child2" },
      [
        React.createElement("h1", {}, "I'm an h1 tag"),
        React.createElement("h1", {}, "I'm an h2 tag")
      ]
    )
  ]
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent)