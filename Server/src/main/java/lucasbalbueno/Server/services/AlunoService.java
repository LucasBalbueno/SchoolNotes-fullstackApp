package lucasbalbueno.Server.services;

import lucasbalbueno.Server.entities.Aluno;
import lucasbalbueno.Server.repository.AlunoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class AlunoService {

    @Autowired
    private AlunoRepository repository;

    public void createAluno(Aluno obj) {
        repository.save(obj);
    }

    public void deleteAluno(int id) {
        repository.deleteById(id);
    }

    public Aluno getAlunobyId(int id) {
        Optional<Aluno> obj = repository.findById(id);
        return obj.get();
    }

    public List<Aluno> getAllAlunos() {
        return repository.findAll();
    }

    public Aluno updateAluno(Aluno obj) {
        Optional<Aluno> newObj = repository.findById(obj.getId());
        update(newObj, obj);
        return repository.save(newObj.get());
    }

    private void update(Optional<Aluno> newObj, Aluno obj) {
        newObj.get().setName(obj.getName());
    }
}
