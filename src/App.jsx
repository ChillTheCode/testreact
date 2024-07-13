import React from "react";
import { createRoot } from "react-dom/client";

const Pet = () => {
  const handleClickYes = () => {
    alert("haloo ara");
  };

  const handleClickNo = () => {
    alert("Give this link to ara plz :)");
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center", // Memusatkan secara vertical dan horizontal
        minHeight: "100vh", // Mengisi seluruh tinggi viewport
      }}
    >
      <div style={{ marginBottom: "20px" }}>
        <img
          src="./testcat.png"
          alt="cat"
          width="400"
          style={{ alignSelf: "center" }} // Memusatkan gambar secara horizontal
        />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "200px",
        }}
      >
        <button onClick={handleClickYes} style={{ marginRight: "10px" }}>
          Yes
        </button>
        <button onClick={handleClickNo} style={{ marginLeft: "10px" }}>
          No
        </button>
      </div>
    </div>
  );
};

const App = () => {
  return <Pet />;
};

const root = createRoot(document.getElementById("root"));
root.render(<App />);
