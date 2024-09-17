import React, { useState } from "react";

//create your first component
const Home = () => {
  const [selectColor, setSelectColor] = useState("red");
  const [lights, setLights] = useState(["red", "yellow", "green"]);

  // Function para cambiar de color
  const cycleColors = () => {
    const currentIndex = lights.indexOf(selectColor);
    const nextIndex = (currentIndex + 1) % lights.length;
    setSelectColor(lights[nextIndex]);
  }; // miramos cual es el current index y despues le sumamos +1 para pasar al siguiente color

  // Function añadir morado
  const togglePurpleLight = () => {
    if (lights.includes("purple")) {
      setLights(lights.filter((color) => color !== "purple"));
    } else {
		setLights([...lights, "purple"])
	} // los ... es para contar con todos los elementos de la lista (?)
  };

  return (
    <div className="d-flex justify-content-center">
      <div className="traffic-light">
        <div
          onClick={() => setSelectColor("red")}
          className={"light red " + (selectColor === "red" ? " glow" : "")}
        ></div>
        <div
          onClick={() => setSelectColor("yellow")}
          className={"light yellow " + (selectColor === "yellow" ? " glow" : "")}
        ></div>
        <div
          onClick={() => setSelectColor("green")}
          className={"light green " + (selectColor === "green" ? " glow" : "")}
        ></div>
        {lights.includes("purple") && (
          <div
            onClick={() => setSelectColor("purple")}
            className={"light purple " + (selectColor === "purple" ? " glow" : "")}
          ></div>
        )}
      </div>
      <div className="mt-3">
        <button onClick={cycleColors} className="btn btn-primary mx-2">
          Cambiar de color
        </button>
        <button onClick={togglePurpleLight} className={"btn mx-2 " +(lights.includes("purple") ? "btn-danger" : "btn-success")}>
          {lights.includes("purple") ? "Quitar Morado" : "Añadir Morado"}
        </button> 
        {/* comprobamos si la lista contiene el color morado */}
      </div>
    </div>
  );
};

export default Home;
