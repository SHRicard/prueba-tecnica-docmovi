import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { cleanRut, validateRut, generateRut } from "rutlib";
import { useTracker } from "meteor/react-meteor-data";
import { Patients, Region } from "/imports/Inteface";
import { PatientsCollection } from "/imports/api/Patients";
import region from "/imports/lib/region.json";
import ruts from "/imports/lib/ruts.json";

const rutsRandoms = ruts.rut;

const Form = () => {
  const [successRegisters, setSuccessRegisters] = useState<boolean>(false);
  const {
    register,
    formState: { errors },
    watch,
    handleSubmit,
    reset,
    setValue,
  } = useForm<Patients>();

  const patients = useTracker(() =>
    PatientsCollection.find({}, { sort: { createdAt: -1 } }).fetch()
  );

  const createPatient = (value: Patients) => {
    setSuccessRegisters(false);
    PatientsCollection.insert({ ...value, createdAt: new Date() });
    setSuccessRegisters(true);
    reset();
  };

  const selectRegion: Region | undefined = region.regiones.find(
    (region) => region.region === watch("region")
  );

  return (
    <div className="container ">
      <form className="row" onSubmit={handleSubmit(createPatient)}>
        <div className="col-12 col-sm-6 py-2">
          <label className="form-label">RUT</label>
          <div className="input-group">
            <input
              className="form-control"
              id="rut"
              placeholder="Ingrese Rut"
              type="text"
              {...register("rut", {
                required: "el campo es requerido",
                validate: {
                  positive: (value) => {
                    if (patients.find((patient) => patient.rut === value)) {
                      return "Rut ya esta registrado";
                    }
                    return validateRut(cleanRut(`${value}`)) || "rut invalido";
                  },
                },
              })}
            />
            <button
              onClick={() =>
                setValue(
                  "rut",
                  rutsRandoms[Math.floor(Math.random() * rutsRandoms.length)]
                )
              }
              className="btn btn-outline-danger btn-sm"
              type="button"
              id="button-addon2"
            >
              Random
            </button>
          </div>
          {errors?.rut?.message && (
            <p className="text-danger">{errors.rut.message}</p>
          )}
        </div>
        <div className="col-sm-6" />
        <div className="col-12 col-sm-4 py-2">
          <label className="form-label">Nombres</label>
          <input
            className=" form-control"
            id="name"
            placeholder="Ingrese Nombres"
            type="text"
            {...register("name", {
              required: "el campo es requerido",
              minLength: {
                value: 3,
                message: "El campo Nombre es muy corto",
              },
            })}
          />
          {errors?.name?.message && (
            <p className="text-danger">{errors.name.message}</p>
          )}
        </div>

        <div className="col-12 col-sm-4 py-2">
          <label className="form-label">Apellido Paterno</label>
          <input
            className=" form-control"
            id="paternalSurname"
            placeholder="Ingrese Apellido Paterno"
            type="text"
            {...register("paternalSurname", {
              required: "el campo es requerido",
              minLength: {
                value: 3,
                message: "El campo Apellido Paterno es muy corto",
              },
            })}
          />
          {errors?.paternalSurname?.message && (
            <p className="text-danger">{errors.paternalSurname.message}</p>
          )}
        </div>

        <div className="col-12 col-sm-4 py-2">
          <label className="form-label">Apellido Materno</label>
          <input
            className=" form-control"
            id="maternalSurname"
            placeholder="Ingrese Apellido Materno"
            type="text"
            {...register("maternalSurname", {
              required: "el campo es requerido",
              minLength: {
                value: 3,
                message: "El campo Apellido Materno es muy corto",
              },
            })}
          />
          {errors?.maternalSurname?.message && (
            <p className="text-danger">{errors.maternalSurname.message}</p>
          )}
        </div>
        <div className="col-12 col-sm-4 py-2">
          <label className="form-label">Codigo Postal</label>
          <input
            className=" form-control"
            id="postalCode"
            placeholder="Ingrese Codigo Postal"
            type="text"
            {...register("postalCode", {
              required: "el campo es requerido",
              validate: (value) =>
                isNaN(value) ? "increse solo numero" : true,
              maxLength: { value: 7, message: "maximo 7 numeros" },
              minLength: { value: 7, message: "minimo 7 numeros" },
            })}
          />
          {errors?.postalCode?.message && (
            <p className="text-danger">{errors.postalCode.message}</p>
          )}
        </div>

        <div className="col-12 col-sm-4 py-2">
          <label className="form-label">Region</label>
          <select
            // className=" form-control"
            className="form-select"
            aria-label=".form-select-sm example"
            {...register("region", {
              required: "Selecione una Region",
              validate: (value) =>
                Number(value) === 1 ? "Ingrese una Region" : true,
            })}
          >
            <option value={1}>Selecione una Region</option>
            {region.regiones.map((value: Region) => (
              <option value={value.region}>{value.region}</option>
            ))}
          </select>
          {errors?.region?.message && (
            <p className="text-danger">{errors.region.message}</p>
          )}
        </div>

        <div className="col-12 col-sm-4 py-2">
          <label className="form-label">Comuna</label>
          <select
            className="form-select"
            aria-label=".form-select-sm example"
            {...register("comuna", {
              required: "el campo es requerido",
              validate: (value) =>
                Number(value) === 1 ? "Ingrese una Comuna" : true,
            })}
          >
            <option value={1}>Selecione una Comuna</option>
            {selectRegion?.comunas.map((comuna) => (
              <option value={comuna}>{comuna}</option>
            ))}
          </select>
          {errors?.comuna?.message && (
            <p className="text-danger">{errors.comuna.message}</p>
          )}
        </div>
        <div className="row justify-content-around">
          <button
            onClick={() => {
              setSuccessRegisters(false), reset();
            }}
            type="button"
            className="col-12 col-sm-2 col-md-1 p-0 my-3 btn btn-danger btn-lg"
          >
            Reset
          </button>

          <button
            type="submit"
            className="col-12 col-sm-2 col-md-1 p-0 my-3  btn btn-primary btn-lg"
          >
            Enviar
          </button>
        </div>
        {successRegisters && (
          <div>
            <div
              className="alert alert-info alert-dismissible fade show"
              role="alert"
            >
              <strong> Perfecto! </strong> El paciente fue creado con exito.
              <button
                type="button"
                className="btn-close"
                onClick={() => setSuccessRegisters(false)}
              ></button>
            </div>
          </div>
        )}
      </form>
    </div>
  );
};

export default Form;
