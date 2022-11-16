import React from "react";

import Form from "/imports/ui/Components/Form";

import Tabla from "/imports/ui/Components/Tabla";
const App = () => {
  return (
    <div className="container-fluid ">
      <div className="row">
        <div className="col-12 pt-3 pb-3 text-center bg-info ">
          <small className="fs-3 fw-bold  text-uppercase">
            Prueba Tecnica Meteor | TypeScript | Tailwind
          </small>
        </div>
        <div className="col-12 pt-4 text-center">
          <small className="fs-5 fw-bold text-uppercase  ">
            Tabla de Pacientes
          </small>
          <Tabla />
        </div>
        <div className="col-12">
          <Form />
        </div>
      </div>
    </div>
  );
};

export default App;
