import React from "react";
import { Patients } from "/imports/Inteface";

const index = (data: Patients) => {
  return (
    <div>
      {"Patients :" + " " + data.name}
      <br />
      <li>Paternal Surname : {data.paternalSurname}</li>
      <li>Maternal Surname :{data.maternalSurname}</li>
      <li>rut : {data.rut}</li>
      <li>Region : {data.region}</li>
      <li>Comuna : {data.comuna}</li>
      <li>Postal Code : {data.postalCode}</li>
      <br />
    </div>
  );
};

export default index;
