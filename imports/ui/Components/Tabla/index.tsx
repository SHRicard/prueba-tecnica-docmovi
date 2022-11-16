import React from "react";
// import { Patients } from "/imports/Inteface";
import { PatientsCollection } from "/imports/api/Patients";
import { useTracker } from "meteor/react-meteor-data";

const Tabla = () => {
  const patient = useTracker(() =>
    PatientsCollection.find({}, { sort: { createdAt: -1 } }).fetch()
  );

  return (
    <div className="container-fluid">
      <table className="table table-dark table-striped">
        <thead>
          <tr>
            {/* <th scope="col">Id Del Paciente</th> */}
            <th scope="col">Nombre</th>
            <th scope="col">Apellido Paterno</th>
            <th scope="col">Apellido Materno</th>
            <th scope="col">Rut</th>
            <th scope="col">Codigo Postal</th>
            <th scope="col">Region</th>
            <th scope="col">Comuna</th>
          </tr>
        </thead>
        <tbody>
          {patient.map((value) => (
            <tr>
              {/* <td>{value._id}</td> */}
              <td>
                <input type="checkbox" />
                {value.name}
              </td>
              <td>{value.paternalSurname}</td>
              <td>{value.maternalSurname}</td>
              <td>{value.rut}</td>
              <td>{value.postalCode}</td>
              <td>{value.region}</td>
              <td>{value.comuna}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default Tabla;
