import React from "react";
// import { Patients } from "/imports/Inteface";
import { PatientsCollection } from "/imports/api/Patients";
import { useTracker } from "meteor/react-meteor-data";

const Tabla = () => {
  const patient = useTracker(() =>
    PatientsCollection.find({}, { sort: { createdAt: -1 } }).fetch()
  );

  const removePatient = (value: String) => {
    PatientsCollection.remove(value);
  };

  const TableLg = () => {
    return (
      <table className="table d-none d-xxl-block">
        <thead>
          <tr className="text-start">
            <th scope="col">Nombre</th>
            <th scope="col">Apellido Paterno</th>
            <th scope="col">Apellido Materno</th>
            <th scope="col">Rut</th>
            <th scope="col">Codigo Postal</th>
            <th scope="col">Region</th>
            <th scope="col">Comuna</th>
            <th scope="col">Borrar</th>
          </tr>
        </thead>
        <tbody>
          {patient.map((value) => (
            <tr className="text-start">
              <td>{value.name}</td>
              <td>{value.paternalSurname}</td>
              <td>{value.maternalSurname}</td>
              <td>{value.rut}</td>
              <td>{value.postalCode}</td>
              <td>{value.region}</td>
              <td>{value.comuna}</td>
              <td>
                <button
                  type="button"
                  onClick={() => removePatient(String(value._id))}
                  className="btn btn-outline-danger"
                >
                  <i className="bi bi-trash3-fill" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

  const TableXs = () => {
    return (
      <table className="table d-block d-xxl-none">
        <thead>
          <tr className="text-start">
            <th scope="col">Rut</th>
            <th scope="col">Nombre Completo</th>
            <th scope="col">Region y Comuna</th>
            <th scope="col">Borrar</th>
          </tr>
        </thead>
        <tbody>
          {patient.map((value) => (
            <tr className="text-start">
              <td>{value.rut}</td>
              <td>
                {`${value.name} ${value.paternalSurname} ${value.maternalSurname}`}
              </td>

              <td>
                {`${value.region} / ${value.comuna}`} <strong>CP:</strong>
                {`${value.postalCode}`}
              </td>
              <td>
                <button
                  type="button"
                  onClick={() => removePatient(String(value._id))}
                  className="btn btn-outline-danger"
                >
                  <i className="bi bi-trash3-fill" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

  return (
    <div className="container ">
      <TableLg />
      <TableXs />
    </div>
  );
};
export default Tabla;
