package com.GestionePrenotazioni.service;

import java.time.LocalDate;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.GestionePrenotazioni.model.Postazione;
import com.GestionePrenotazioni.model.Prenotazione;
import com.GestionePrenotazioni.model.TipoEnum;
import com.GestionePrenotazioni.model.Utente;
import com.GestionePrenotazioni.repository.PostazioneDaoRepository;
import com.GestionePrenotazioni.repository.PrenotazioneDaoRepository;

@Service
public class PrenotazioneService {
    
    @Autowired
    private PrenotazioneDaoRepository prenotazioneRepository;

    @Autowired
    private PostazioneDaoRepository postazioneRepository;


    public boolean isLiberaPerData(LocalDate data, Postazione postazione) {
         if(PrenotazioneDaoRepository.findByPostazioneAndData(postazione, data) instanceof Prenotazione){
         return true;
         }
         else{
            return false;
         }
    }


    public Prenotazione init(Postazione postazione, LocalDate data, Utente utente) {

        if (!isLiberaPerData(data, postazione)) {
            System.out.println("La postazione " + postazione.getCodice() + " non è disponibile per la data " + data);
        }
        if (PrenotazioneDaoRepository.findByPostazioneAndData(postazione, data) instanceof Prenotazione) {
            System.out.println("L'utente " + utente.getUsername() + " ha già prenotato la postazione " + postazione.getCodice() + " per la data " + data);
        }
        Prenotazione prenotazione = new Prenotazione(utente,postazione,data);
        return prenotazioneRepository.save(prenotazione);
    }

    
    public void cancellaPrenotazione(Prenotazione prenotazione) {
        prenotazioneRepository.delete(prenotazione);
    }

    
    public List<Postazione> cercaPostazioniPerTipoECitta(TipoEnum tipo, String citta) {
        return postazioneRepository.findByTipoAndEdificioCitta(tipo, citta);
    }

    
    public List<Prenotazione> getPrenotazioniUtente(Utente utente) {
        return prenotazioneRepository.findByUtente(utente);
    }

}