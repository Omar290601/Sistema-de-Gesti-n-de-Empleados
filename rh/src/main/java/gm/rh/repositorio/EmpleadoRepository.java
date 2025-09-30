package gm.rh.repositorio;

import gm.rh.modelo.Empleado;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EmpleadoRepository extends JpaRepository<Empleado, Long> {
    // Puedes agregar métodos personalizados aquí si lo necesitas
}