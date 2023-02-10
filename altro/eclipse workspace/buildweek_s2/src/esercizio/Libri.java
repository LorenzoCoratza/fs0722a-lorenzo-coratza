package esercizio;

public class Libri extends Catalogo {
    
    private String autore;
    private String genere;
    
    public Libri(String ISBN, String titolo,int annoPub, String numeroPag, String autore, String genere) {
        super(ISBN, titolo, annoPub, numeroPag);
        this.autore = autore;
        this.genere = genere;
    }
    public String getAutore() {
        return autore;
    }
    public String getGenere() {
        return genere;
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
