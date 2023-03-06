package com.GestionePrenotazioni.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.GestionePrenotazioni.model.Edificio;
import com.GestionePrenotazioni.model.Postazione;
import com.GestionePrenotazioni.model.TipoEnum;
import com.GestionePrenotazioni.repository.PostazioneDaoRepository;

@Service
public class PostazioneService {
    
    @Autowired
    private PostazioneDaoRepository postazioneDaoRepository;

    public Postazione init(Postazione postazione) {
		return postazioneDaoRepository.save(postazione);
	}

	public Postazione init(String codice, String descrizione,TipoEnum tipo, Integer maxOccupanti, Edificio edificio) {
		Postazione postazione = new Postazione(codice,descrizione,tipo,maxOccupanti,edificio);
		return postazioneDaoRepository.save(postazione);
	}

	public void delete(Postazione postazione) {
		postazioneDaoRepository.delete(postazione);
	}

	public Postazione findById(Long id) {
		return postazioneDaoRepository.findById(id).get();
	}

	public void update(Postazione postazione) {
		postazioneDaoRepository.save(postazione);
	}
}
