import React from "react";
import ReactDOM from "react-dom";

const Pet = () => {
  const handleClickYes = () => {
    alert("haloo ara");
  };

  const handleClickNo = () => {
    alert("Give this link to ara plz :)");
  };

  return React.createElement(
    "div",
    {
      style: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center", // Memusatkan secara vertical dan horizontal
        minHeight: "100vh", // Mengisi seluruh tinggi viewport
      },
    },
    React.createElement(
      "div",
      { style: { marginBottom: "20px" } },
      React.createElement("img", {
        src: "./testcat.png",
        alt: "cat",
        width: "400",
        style: { alignSelf: "center" }, // Memusatkan gambar secara horizontal
      })
    ),
    React.createElement(
      "div",
      {
        style: {
          display: "flex",
          justifyContent: "space-between",
          width: "200px",
        },
      },
      React.createElement(
        "button",
        { onClick: handleClickYes, style: { marginRight: "10px" } },
        "Yes"
      ),
      React.createElement(
        "button",
        { onClick: handleClickNo, style: { marginLeft: "10px" } },
        "No"
      )
    )
  );
};

const App = () => {
  return React.createElement(Pet);
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));
