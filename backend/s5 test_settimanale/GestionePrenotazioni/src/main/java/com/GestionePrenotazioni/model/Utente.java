package com.GestionePrenotazioni.model;

import java.util.List;

import org.hibernate.annotations.Table;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.OneToMany;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Utente {
    
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private String username;
    private String nomeCompleto;
    private String email;

    @OneToMany(mappedBy = "utente")
    private List<Prenotazione> prenotazioni;


    public Utente(String username, String nomeCompleto, String email, List<Prenotazione> prenotazioni) {
        this.username = username;
        this.nomeCompleto = nomeCompleto;
        this.email = email;
        this.prenotazioni = prenotazioni;
    }

}
