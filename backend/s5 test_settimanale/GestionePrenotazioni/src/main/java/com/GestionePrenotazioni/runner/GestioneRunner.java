package com.GestionePrenotazioni.runner;

import java.time.LocalDate;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

import com.GestionePrenotazioni.model.Edificio;
import com.GestionePrenotazioni.model.Postazione;
import com.GestionePrenotazioni.model.Prenotazione;
import com.GestionePrenotazioni.model.TipoEnum;
import com.GestionePrenotazioni.model.Utente;
import com.GestionePrenotazioni.service.EdificioService;
import com.GestionePrenotazioni.service.PostazioneService;
import com.GestionePrenotazioni.service.PrenotazioneService;
import com.GestionePrenotazioni.service.UtenteService;

@Component
public class GestioneRunner implements ApplicationRunner {
	
    
    @Autowired 
    private PostazioneService postazioneService;
    
    @Autowired 
    private EdificioService edificioService;

    @Autowired 
    private UtenteService utenteService;

    @Autowired 
    private PrenotazioneService prenotazioneService;

@Override
public void run(ApplicationArguments args) throws Exception {

      
       Utente u1 = utenteService.init("MarioR","Mario Rossi","mario@example.com");

       Edificio e1 = edificioService.init("Sede Vittoria","Via verdi 20","Roma");

        Postazione p1 = postazioneService.init("123","postazione vittoria",TipoEnum.PRIVATO,200,e1);

       Prenotazione pre1 = prenotazioneService.init(p1,LocalDate.now(),u1);
   }

}