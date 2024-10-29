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

    public Aluno create(Aluno obj) {
        return repository.save(obj);
    }

    public void delete(int id) {
        repository.deleteById(id);
    }

    public Aluno getById(int id) {
        Optional<Aluno> obj = repository.findById(id);
        return obj.get();
    }

    public List<Aluno> getAll() {
        return repository.findAll();
    }

    public Aluno update(Aluno obj) {
        Optional<Aluno> newObj = repository.findById(obj.getId());
        updateAluno(newObj, obj);
        return repository.save(newObj.get());
    }

    private void updateAluno(Optional<Aluno> newObj, Aluno obj) {
        newObj.get().setName(obj.getName());
        newObj.get().setGrade1(obj.getGrade1());
        newObj.get().setGrade2(obj.getGrade2());
        newObj.get().setGrade3(obj.getGrade3());
        newObj.get().setGrade4(obj.getGrade4());
        newObj.get().setGrade5(obj.getGrade5());
        newObj.get().setFrequency(obj.getFrequency());
    }
}
