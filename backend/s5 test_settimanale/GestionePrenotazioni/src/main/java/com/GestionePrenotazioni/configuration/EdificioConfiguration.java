package com.GestionePrenotazioni.configuration;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Scope;

import com.GestionePrenotazioni.model.Edificio;



@Configuration
public class EdificioConfiguration {
    

    @Bean
    @Scope("prototype")
    public Edificio edificio() {
        return new Edificio();
    }

}
