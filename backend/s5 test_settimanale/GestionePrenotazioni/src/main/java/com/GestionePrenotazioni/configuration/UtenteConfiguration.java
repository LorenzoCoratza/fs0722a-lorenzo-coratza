package com.GestionePrenotazioni.configuration;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Scope;

import com.GestionePrenotazioni.model.Utente;

public class UtenteConfiguration {
    
        @Bean
        @Scope("prototype")
        public Utente utente() {
            return new Utente();
        }
    
    

}
