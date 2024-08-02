// const heading = React.createElement("h1", { id: "title", className: "class" }, "Namaste Everyone!");

// const root = ReactDOM.createRoot(document.getElementById('root'));

// root.render(heading);

// const parent = React.createElement(
//   "div", { id: "parent" },
//   React.createElement("div", { id: "child" },
//     React.createElement("h1", {}, "I'am an H1 tag")
//   )
// );

const parent = React.createElement("div", { id: "parent" },
  [
    React.createElement("div", { className: "child" },
      [
        React.createElement("h1", {}, "I'm an h1 tag"),
        React.createElement("h1", {}, "I'm an h2 tag")
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