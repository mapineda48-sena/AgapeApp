package AgapeApp.Repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import AgapeApp.Models.Person;

@Repository
public interface PersonRepository extends CrudRepository<Person, Integer> {
}