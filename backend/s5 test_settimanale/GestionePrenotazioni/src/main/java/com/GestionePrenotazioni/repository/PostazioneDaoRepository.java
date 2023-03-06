package com.GestionePrenotazioni.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import org.springframework.stereotype.Repository;

import com.GestionePrenotazioni.model.Postazione;
import com.GestionePrenotazioni.model.TipoEnum;

@Repository
public interface PostazioneDaoRepository extends JpaRepository<Postazione,Long> {
    
    List<Postazione> findByTipoAndEdificioCitta(TipoEnum tipo, String citta);
  
    List<Postazione> findByEdificioCitta(String citta);

    Postazione findByCodice(String codice);
    
    boolean existsByCodice(String codice);
   
    
}