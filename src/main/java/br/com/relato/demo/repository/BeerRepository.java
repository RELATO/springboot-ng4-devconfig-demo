package br.com.relato.demo.repository;

import br.com.relato.demo.domain.Beer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

//@RepositoryRestResource
public interface BeerRepository extends JpaRepository<Beer, Long> {
}