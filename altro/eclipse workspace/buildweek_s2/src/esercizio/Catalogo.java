package esercizio;

public abstract class Catalogo {
    
	   private String ISBN;
	   private String titolo;
	   private int annoPub;
	   private String numeroPag;

	   public Catalogo(String ISBN, String titolo, int annoPub, String numeroPag) {
	        this.ISBN = ISBN;
	        this.titolo = titolo;
	        this.annoPub = annoPub;
	        this.numeroPag = numeroPag;
	    }

	    public String getISBN() {
	        return ISBN;
	    }

	    public String getTitolo() {
	        return titolo;
	    }

	    public int getAnnoPub() {
	        return annoPub;
	    }

	    public String getNumeroPag() {
	        return numeroPag;
	    }
	}
