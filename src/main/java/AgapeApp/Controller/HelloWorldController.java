package AgapeApp.Controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

import AgapeApp.Models.Person;
import AgapeApp.Repositories.PersonRepository;

@Controller
public class HelloWorldController {
    private final PersonRepository personaRepository;

    public HelloWorldController(PersonRepository personaRepository) {
        this.personaRepository = personaRepository;
    }

    @GetMapping("/helloWorld")
    public String listarPersonas() {
        var record = new Person();

        record.setNombre("Miguel Pineda");
        record.setApellido("Pineda");

        personaRepository.save(record);

        return "helloWorld"; // Nombre del archivo HTML de la vista (sin la extensión .html)
    }
}
