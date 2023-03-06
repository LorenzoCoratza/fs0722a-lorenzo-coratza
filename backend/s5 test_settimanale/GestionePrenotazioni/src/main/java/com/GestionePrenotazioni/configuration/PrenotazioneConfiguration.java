package com.GestionePrenotazioni.configuration;


import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Scope;

import com.GestionePrenotazioni.model.Prenotazione;


@Configuration
public class PrenotazioneConfiguration {
    
    @Bean
    @Scope("prototype")
    public Prenotazione  prenotazioneTest(){
        return new Prenotazione();
    }

}