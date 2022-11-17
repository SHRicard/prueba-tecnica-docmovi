import React from "react";
import Form from "/imports/ui/Components/Form";
import Tabla from "/imports/ui/Components/Tabla";

const App = () => {
  return (
    <div className="container-fluid bg-light ">
      <div className="row d-flex justify-content-center">
        <nav className="navbar navbar-dark bg-secondary">
          <div className="container-fluid">
            <a className="navbar-brand px-3" href="#">
              Prueba Tecnica
            </a>
          </div>
        </nav>

        <div className="col-12 col-md-10 my-5 border">
          <h2 className="fs-4 my-3 fw-bold text-center text-uppercase">
            Crear Paciente
          </h2>
          <Form />
        </div>

        <div className="col-12 col-md-10 mx-0 px-0 pt-2 border ">
          <h4 className=" fw-bold text-uppercase text-center py-3">
            Lista de Pacientes
          </h4>
          <Tabla />
        </div>
      </div>
    </div>
  );
};

export default App;
