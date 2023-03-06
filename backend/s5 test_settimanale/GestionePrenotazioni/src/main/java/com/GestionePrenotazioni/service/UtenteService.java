package com.GestionePrenotazioni.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.GestionePrenotazioni.model.Prenotazione;
import com.GestionePrenotazioni.model.Utente;
import com.GestionePrenotazioni.repository.UtenteDaoRepository;

@Service
public class UtenteService {
    
    @Autowired
    private UtenteDaoRepository utenteRepository;
    
   
    public Utente getUtenteByUsername(String username) {
        if(utenteRepository.findByUsername(username) instanceof Utente){
          Utente utente= utenteRepository.findByUsername(username);
            return utente;
        }
        else{
            System.out.println("Utente non trovato");
            return  null;
        }
    }
   
    public Utente init(String username, String nomeCompleto, String email) {
        if (utenteRepository.findByUsername(username) != null) {
            System.out.println("Username già esistente");
            return null;
        }
        else{
        List<Prenotazione> prenotazioni = new ArrayList<Prenotazione>();
        Utente utente = new Utente(username, nomeCompleto, email,prenotazioni);
        return utenteRepository.save(utente);
        }
    }

    public Utente init(Utente utente) {
        return utenteRepository.save(utente);
    }

    public void delete(Utente utente) {
        utenteRepository.delete(utente);
    }

    public Utente findById(Long id) {
        return utenteRepository.findById(id).get();
    }

    public void update(Utente utente) {
        utenteRepository.save(utente);
    }

}
