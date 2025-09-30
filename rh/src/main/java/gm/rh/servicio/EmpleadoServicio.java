package gm.rh.servicio;

import java.util.List;
import gm.rh.modelo.Empleado;

public interface EmpleadoServicio {

    List<Empleado> listarEmpleados();
    Empleado obtenerEmpleadoPorId(Long id);
    Empleado guardarEmpleado (Empleado empleado); // crea o actualiza
    void eliminarEmpleado(Long id);

}