import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function AgregarEmpleado() {
  const [empleado, setEmpleado] = useState({
    nombre: "",
    departamento: "",
    sueldo: ""
  });

  const { nombre, departamento, sueldo } = empleado;
  const navigate = useNavigate();

  const onInputChange = (e) => {
    setEmpleado({ ...empleado, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const urlBase = "http://localhost:8080/api/empleados";
    await axios.post(urlBase, empleado);
    navigate("/");
  };

  return (
    <div className="container">
      <div className="container text-center" style={{ margin: "30px" }}>
        <h3>Agregar Empleado</h3>
      </div>

      <form onSubmit={(e) => onSubmit(e)}>
        <div className="mb-3">
          <label htmlFor="nombre" className="form-label">Nombre</label>
          <input
            type="text"
            className="form-control"
            id="nombre"
            name="nombre"
            required={true}
            value={nombre}
            onChange={(e) => onInputChange(e)}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="departamento" className="form-label">Departamento</label>
          <input
            type="text"
            className="form-control"
            id="departamento"
            name="departamento"
            value={departamento}
            onChange={(e) => onInputChange(e)}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="sueldo" className="form-label">Sueldo</label>
          <input
            type="number"
            step="any"
            className="form-control"
            id="sueldo"
            name="sueldo"
            required={true}
            value={sueldo}
            onChange={(e) => onInputChange(e)}
          />
        </div>

        <div className="d-flex justify-content-center gap-3" style={{ margin: "30px" }}>
          <button type="submit" className="btn btn-warning btn-lg">Agregar</button>
          <a href="/" className="btn btn-danger btn-lg">Regresar</a>
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
}
