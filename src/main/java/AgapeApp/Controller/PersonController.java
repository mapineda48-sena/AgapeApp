package AgapeApp.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

import AgapeApp.Models.Person;
import AgapeApp.Repositories.PersonRepository;

@Controller
public class PersonController {

    @Autowired
    private PersonRepository personaRepository;

    @PostMapping("/createPerson")
    public String CreatePersonPost(Person record) {
        personaRepository.save(record);

        return "redirect:/success.html"; // Redirige directamente al archivo estático
    }

    @PostMapping("/deletePersons")
    public String DeletePersonPost() {
        personaRepository.deleteAll();

        return "redirect:/success.html"; // Redirige directamente al archivo estático
    }

    @PostMapping("/updatePerson")
    public String UpdatePersonPost(@RequestParam("documento") String documento, @RequestParam("nombre") String nombre) {
        var record = personaRepository.findByDocumento(documento);

        record.ifPresent(person -> {
            person.setNombre(nombre);
            personaRepository.save(person);
        });

        return "redirect:/success.html"; // Redirige directamente al archivo estático
    }
}
