package com.GestionePrenotazioni.repository;

import java.time.LocalDate;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.GestionePrenotazioni.model.Postazione;
import com.GestionePrenotazioni.model.Prenotazione;
import com.GestionePrenotazioni.model.Utente;

@Repository
public interface PrenotazioneDaoRepository extends JpaRepository<Prenotazione, Long> {
    
   List<Prenotazione> findByUtente(Utente utente);
   static Prenotazione findByPostazioneAndData(Postazione postazione, LocalDate data) {
	// TODO Auto-generated method stub
	return null;
}
 
    List<Prenotazione> findByData(LocalDate data);

   List<Prenotazione> findByUtenteUsername(String username);   

    boolean existsByPostazioneAndData(Postazione postazione, LocalDate data);
   
}
