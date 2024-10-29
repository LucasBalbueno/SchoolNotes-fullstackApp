package lucasbalbueno.Server.config;

import lucasbalbueno.Server.entities.Aluno;
import lucasbalbueno.Server.repository.AlunoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Profile;

import java.util.Arrays;

@Configuration
public class TestConfig implements CommandLineRunner {

    @Autowired
    private AlunoRepository alunoRepository;

    @Override
    public void run(String... args) throws Exception {
        Aluno a1 = new Aluno(1, "Lucas Balbueno", 8, 7.5, 9, 7, 5, 80 );
        alunoRepository.saveAll(Arrays.asList(a1));
    }
}
