package esercizio;

public class Riviste extends Catalogo {
    
    private Periodicita periodicita;

    public Riviste(String ISBN, String titolo, int annoPub, String numeroPag, Periodicita periodicita) {
        super(ISBN, titolo, annoPub, numeroPag);
        this.periodicita = periodicita;
    }

    public Periodicita getPeriodicita() {
        return periodicita;
    }

    @Override
    public int getAnnoPub() {
        return super.getAnnoPub();
    }

    @Override
    public String getISBN() {
        return super.getISBN();
    }

    @Override
    public String getNumeroPag() {
        return super.getNumeroPag();
    }

    @Override
    public String getTitolo() {
        return super.getTitolo();
    }

}