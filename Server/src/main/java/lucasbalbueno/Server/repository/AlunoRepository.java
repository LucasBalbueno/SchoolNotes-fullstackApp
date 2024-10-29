package lucasbalbueno.Server.repository;

import lucasbalbueno.Server.entities.Aluno;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AlunoRepository extends JpaRepository<Aluno, Integer> {
}
