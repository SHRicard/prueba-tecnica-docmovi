import React from "react";
import { useForm } from "react-hook-form";
import { Patients, Region } from "/imports/Inteface";
import { PatientsCollection } from "/imports/api/Patients";
import region from "/imports/lib/region.json";
import { cleanRut, validateRut } from "rutlib";

const Form = () => {
  // const [region, setRegion] = useState();

  const {
    register,
    formState: { errors },
    watch,
    handleSubmit,
    reset,
  } = useForm<Patients>();

  const createPatient = (value: Patients) => {
    PatientsCollection.insert({ ...value, createdAt: new Date() });
    reset();
  };

  const selectRegion: Region | undefined = region.regiones.find(
    (region) => region.region === watch("region")
  );

  return (
    <div className="container">
      <div className="row ">
        <div className="col-5 ">
          <div className="col-12 text-center">
            <h2>Formulario</h2>
          </div>
          <form onSubmit={handleSubmit(createPatient)}>
            {/* start input name */}
            <div className="col-12 form-floating mb-3">
              <input
                className="form-control"
                id="floatingInput"
                placeholder="Nombre"
                type="text"
                {...register("name", {
                  required: "el campo es requerido",
                  minLength: {
                    value: 3,
                    message: "El campo Nombre es muy corto",
                  },
                })}
              />
              <label htmlFor="floatingInput">Nombre</label>
              {errors?.name?.message && (
                <p className="text-danger">{errors.name.message}</p>
              )}
            </div>
            {/* end input name */}
            {/* start input paternal Surname */}

            <div className="col-12 form-floating mb-3">
              <input
                className="form-control"
                id="floatingInput"
                placeholder="paternalSurname"
                type="text"
                {...register("paternalSurname", {
                  required: "el campo es requerido",
                  minLength: {
                    value: 3,
                    message: "El campo Apellido Paterno es muy corto",
                  },
                })}
              />
              <label htmlFor="floatingInput">Apellido Paterno</label>
              {errors?.paternalSurname?.message && (
                <p className="text-danger">{errors.paternalSurname.message}</p>
              )}
            </div>
            {/* end input paternal Surname */}
            {/* start input maternal Surname*/}

            <div className="col-12 form-floating mb-3">
              <input
                className="form-control"
                id="floatingInput"
                placeholder="maternalSurname"
                type="text"
                {...register("maternalSurname", {
                  required: "el campo es requerido",
                  minLength: {
                    value: 3,
                    message: "El campo Apellido Materno es muy corto",
                  },
                })}
              />
              <label htmlFor="floatingInput">Apellido Materno</label>
              {errors?.maternalSurname?.message && (
                <p className="text-danger">{errors.maternalSurname.message}</p>
              )}
            </div>
            {/* end input maternal Surname */}
            {/* start input Rut */}

            <div className="col-12 form-floating mb-3">
              <input
                className="form-control"
                id="floatingInput"
                placeholder="rut"
                type="text"
                {...register("rut", {
                  required: "el campo es requerido",
                  validate: (value) =>
                    validateRut(cleanRut(`${value}`)) || "rut invalido",
                })}
              />
              <label htmlFor="floatingInput">Rut</label>
              {errors?.rut?.message && (
                <p className="text-danger">{errors.rut.message}</p>
              )}
            </div>

            {/* end input Rut */}
            {/* start input Postal Code */}

            <div className="col-12 form-floating mb-3">
              <input
                className="form-control"
                id="floatingInput"
                placeholder="Codigo Postal"
                type="text"
                {...register("postalCode", {
                  required: "el campo es requerido",
                  validate: (value) =>
                    isNaN(value) ? "increse solo numero" : true,
                  maxLength: { value: 7, message: "maximo 7 numeros" },
                  minLength: { value: 7, message: "minimo 7 numeros" },
                })}
              />
              <label htmlFor="floatingInput">Codigo Postal</label>
              {errors?.postalCode?.message && (
                <p className="text-danger">{errors.postalCode.message}</p>
              )}
            </div>
            {/* end input Postal Code */}
            {/* start div select */}
            <div className="">
              <select
                className="form-select form-select-lg mb-3"
                aria-label=".form-select-lg example"
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
              <select
                className="form-select form-select-sm"
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
            {/* end div select */}
            <div className="d-grid pt-2 pb-2">
              <button type="submit" className="btn btn-primary">
                Enviar
              </button>
            </div>
            {/* <input type="submit" value="Enviar" /> */}
          </form>
        </div>

        <div className="col-5">
          <div className="row">
            <div className="col-12 text-center">
              <h2>Actualizar Datos</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
