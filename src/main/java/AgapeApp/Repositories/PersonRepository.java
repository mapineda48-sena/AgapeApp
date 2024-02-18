package AgapeApp.Repositories;

import java.util.Optional;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import AgapeApp.Models.Person;

@Repository
public interface PersonRepository extends CrudRepository<Person, Integer> {
    Optional<Person> findByDocumento(String documento);
}