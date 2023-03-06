package com.GestionePrenotazioni.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.GestionePrenotazioni.model.Utente;


@Repository
public interface UtenteDaoRepository extends JpaRepository<Utente, Long> {
	 
		Utente findByUsername(String username);

	    List<Utente> findByNomeCompletoContainingIgnoreCase(String nomeCompleto);

	}
