package com.GestionePrenotazioni.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.GestionePrenotazioni.model.Edificio;


@Repository
public interface EdificioDaoRepository extends JpaRepository<Edificio, Long> {
	  Edificio findByNome(String nome);

	    List<Edificio> findByCitta(String citta);
	   

	}
