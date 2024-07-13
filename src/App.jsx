import React from "react";
import { createRoot } from "react-dom";

const Pet = (props) => {
  return React.createElement(
    "div",
    {
      style: { display: "flex", flexDirection: "column", alignItems: "center" },
    },
    [
      React.createElement("h1", {}, props.name),
      React.createElement("h1", {}, props.animal),
      React.createElement("h1", {}, props.breed),
      React.createElement("img", {
        src: props.image,
        alt: props.name,
        width: "200",
        align: "center",
      }),
    ]
  );
};
const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Anjing"),
    React.createElement(Pet, {
      animal: "Dog",
      name: "luna",
      breed: "Havanese",
      image: "./family_guy.jpg",
    }),
    React.createElement(Pet, {
      animal: "Dog",
      name: "luna",
      breed: "Havanese",
      image: "./family_guy.jpg",
    }),

    React.createElement(Pet, {
      animal: "Dog",
      name: "luna",
      breed: "Havanese",
      image: false,
    }),
  ]);
};

const root = createRoot(document.getElementById("root"));
root.render(React.createElement(App));
