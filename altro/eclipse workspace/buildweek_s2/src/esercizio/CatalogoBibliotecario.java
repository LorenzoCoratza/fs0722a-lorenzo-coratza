package esercizio;


import java.io.File;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;
import java.util.stream.Collectors;
import java.util.stream.Stream;

import org.apache.commons.io.FileUtils;

public class CatalogoBibliotecario {
	
	private String ISBN;
	   private String titolo;
	   private int annoPub;
	   private String numeroPag;

	
	
	static Scanner sc = new Scanner(System.in);
	static File file=new File("file/disco.txt");
	
    public static void main(String[] args) throws Exception {
    	
    	
List<Catalogo> libreria = new ArrayList<Catalogo>();
		
		Libreria(libreria);
		rimozione(libreria);
    	sceltaCerca(libreria);
    	salvataggioSuDisco(libreria);
    	letturaDaDisco();
    	
    	
    	
    }
    
public static List<Catalogo> Libreria(List<Catalogo>libreria) {
		
		String risposta = "y";

		while (risposta.equals("y")) {
			System.out.println("Inserire un libro o una rivista? (y/n)");
			risposta = sc.nextLine();

			if (risposta.equals("y")) {
				libreria.add(sceltaCatalogo(libreria));
			} else if (!risposta.equals("n")) {
				System.out.println("Input non valido. Inserire y o n.");
				Libreria(libreria);
			}else {
				System.out.println("Fine creazione Libreria");
			}
		}
		
		return libreria;
	}
	
	public static Catalogo sceltaCatalogo(List<Catalogo> libreria) {
		System.out.println("Quale tipo di lettura vuoi inserire? 1 Libro / 2 Rivista");
		String risposta2 = sc.nextLine();
		if (risposta2.equals("1")) {
			return creaLibro(libreria);
		} else if (risposta2.equals("2")) {
			return creaRivista(libreria);
		} else {
			System.out.println("Risposta non valida, inserire 1 o 2.");
			sceltaCatalogo(libreria);
		}
		return null;
		
	}
	
	public static Libri creaLibro(List<Catalogo> libreria) {
		  System.out.println("Inserisci ISBN: ");
		  String isbn = sc.nextLine();
		  for (Catalogo lettura : libreria) {
		    if (lettura.getISBN().equals(isbn)) {
		      System.out.println("Esiste già un libro con lo stesso ISBN nella libreria");
		      return null;
		    }
		  }

		  System.out.println("Inserisci titolo: ");
		  String titolo = sc.nextLine();
		  boolean isValid = false;
		  int Pubblicato = 0;
		  while (!isValid) {
		    System.out.println("Inserisci anno di pubblicazione: ");
		    try {
		    	Pubblicato  = Integer.parseInt(sc.nextLine());
		      isValid = true;
		    } catch (NumberFormatException e) {
		      System.out.println("Errore: Inserire un numero valido per l'anno di pubblicazione");
		    }
		  }

		  isValid = false;
		  String numeroPagine = "";
		  while (!isValid) {
		    System.out.println("Inserisci numero di pagine: ");
		    try {
		      numeroPagine = sc.nextLine();
		      isValid = true;
		    } catch (NumberFormatException e) {
		      System.out.println("Errore: Inserire un numero valido per il numero di pagine");
		    }
		  }			
		  System.out.println("Inserisci autore");
		  String autore = sc.nextLine();
		  System.out.println("Inserisci genere");
		  String genere = sc.nextLine();

		  Libri nuovoLibro = new Libri(isbn, titolo, Pubblicato , numeroPagine, autore, genere);
		  return nuovoLibro;
		}
	
	public static Riviste creaRivista(List<Catalogo> libreria) {
		  System.out.println("Inserisci ISBN: ");
		  String isbn = sc.nextLine();
		  for (Catalogo lettura : libreria) {
		    if (lettura.getISBN().equals(isbn)) {
		      System.out.println("Esiste già un libro con lo stesso ISBN nella libreria");
		      return null;
		    }
		  }

		System.out.println("Inserisci titolo: ");
		String titolo= sc.nextLine();
		boolean isValid = false;
		int Pubblicato  = 0;
		while (!isValid) {
		  System.out.println("Inserisci anno di pubblicazione: ");
		  try {
			  Pubblicato  = Integer.parseInt(sc.nextLine());
		    isValid = true;
		  } catch (NumberFormatException e) {
		    System.out.println("Errore: Inserire un numero valido per l'anno di pubblicazione");
		  }
		}

		isValid = false;
		String numeroPagine = "";
		while (!isValid) {
		  System.out.println("Inserisci numero di pagine: ");
		  try {
		    numeroPagine = sc.nextLine();
		    isValid = true;
		  } catch (NumberFormatException e) {
		    System.out.println("Errore: Inserire un numero valido per il numero di pagine");
		  }
		}	
		Periodicita periodicita = null;
		while (periodicita == null) {
		    System.out.println("Inserisci Periodicità (SETTIMANALE,MENSILE,SEMESTRALE)");
		    String periodicitaInput = sc.nextLine();

		    switch (periodicitaInput.toUpperCase()) {
		      case "SETTIMANALE":
		        periodicita = Periodicita.SETTIMANALE;
		        break;
		      case "MENSILE":
		        periodicita = Periodicita.MENSILE;
		        break;
		      case "SEMESTRALE":
		        periodicita = Periodicita.SEMESTRALE;
		        break;
		      default:
		        System.out.println("Periodicità non valida. Riprova.");
		        break;
		    }
		}
		
		Riviste nuovaRivista= new Riviste(isbn,titolo,Pubblicato,numeroPagine,periodicita);
		return nuovaRivista;
	}
    	
	public static List<Catalogo> rimozione(List<Catalogo> libreria){
		
		String risposta = "y";

		while (risposta.equals("y")) {
			System.out.println("Eliminare un elemento? (y/n)");
			risposta = sc.nextLine();

			if (risposta.equals("y")) {
		
		
		System.out.println("Inserisci codice ISBN");
		String isbn=sc.nextLine();
		int indexToRemove = -1;
		for(int i=0; i<libreria.size(); i++) {
			Catalogo lettura = libreria.get(i);
			if(lettura.getISBN().equals(isbn)) {
				indexToRemove = i;
				System.out.println("Rimozione Effettuata");
				break;
			}
		}
		if(indexToRemove != -1) {
			libreria.remove(indexToRemove);
		} else {
			System.out.println("Lettura non trovata.");
			rimozione(libreria);
		}
		return libreria;
		}else {
			System.out.println("Fine cancellazione");
		}
	}
		return libreria;
    

}
	public static List<Catalogo> ricercaAnnoPubblicazione(List<Catalogo> libreria){
		System.out.println("Inserisci anno di pubblicazione per la ricerca");
		int anno = Integer.parseInt(sc.nextLine());
		try {
			Stream<Catalogo> streamLibreria = libreria.stream();
			List<Catalogo> risultati = streamLibreria.filter(el -> el.getAnnoPub() == anno)
					.collect(Collectors.toList());
			if (risultati.isEmpty()) {
				System.out.println("Nessun risultato trovato.");
			} else {
				System.out.println("Ecco i risultati della ricerca: ");
				for (Catalogo lettura : risultati) {
					System.out.println(lettura);
				}
			}
		} catch (NumberFormatException e) {
			System.out.println("L'anno di pubblicazione deve essere un numero intero.");
		}
		return libreria;
	}
	
	public static List<Catalogo> ricercaAutore(List<Catalogo> libreria) {
		System.out.println("Inserisci il nome dell'autore per la ricerca: ");
		String autore = sc.nextLine();
		
		List<Catalogo> libriAutore = libreria.stream()
				.filter(lettura -> {
					if (lettura instanceof Libri) {
						Libri libro = (Libri) lettura;
						return libro.getAutore().equals(autore);
					} else {
						return false;
					}
				})
				.collect(Collectors.toList());
		
		if (!libriAutore.isEmpty()) {
			System.out.println("Ecco i risultati della ricerca:");
			for (Catalogo libro : libriAutore) {
				System.out.println(libro.toString());
			}
		} else {
			System.out.println("Nessun libro trovato per l'autore- " + autore);
		}
		
		return libreria;
	}
	
	public static List<Catalogo> sceltaCerca(List<Catalogo> libreria) {
		
		
		String risposta = "y";

		while (risposta.equals("y")) {
			System.out.println("Vuoi cercare un libro o un autore? (y/n)");
			risposta = sc.nextLine();

			if (risposta.equals("y")) {

				System.out.println("Come vuoi cercarlo? 1 Anno Pubblicazione / 2 Autore / 3 Codice Univoco");
				String risposta2 = sc.nextLine();
				if (risposta2.equals("1")) {
					return ricercaAnnoPubblicazione(libreria);
				} else if (risposta2.equals("2")) {
					return  ricercaAutore(libreria);
				}
				else if (risposta2.equals("3")) {
					return  ricercaISBN(libreria);
				}else {
					System.out.println("Risposta non valida, inserire 1 , 2 o 3.");
					sceltaCatalogo(libreria);
				}
			
				
			
			} else if (!risposta.equals("n")) {
				System.out.println("Input non valido. Inserire y o n.");
				Libreria(libreria);
			}else {
				System.out.println("Fine ricerca");
			}
		}
		return libreria;
	}
		
	public static List<Catalogo> ricercaISBN(List<Catalogo> libreria){
		System.out.println("Inserisci il codice univoco(ISBN)");
		String ISBN = sc.nextLine();
			Stream<Catalogo> streamLibreria = libreria.stream();
			List<Catalogo> risultati = streamLibreria.filter(el -> el.getISBN() == ISBN)
					.collect(Collectors.toList());
			
			if (risultati.isEmpty()) {
				System.out.println("Nessun risultato trovato.");
			} else {
				System.out.println("Ecco i risultati della ricerca: ");
				for (Catalogo lettura : risultati) {
					System.out.println(lettura);
				}
			} 
		return libreria;
	}
	
	
	
	public static void salvataggioSuDisco(List<Catalogo> libreria) throws IOException {
		String testo="";
		for (Catalogo lettura : libreria) {
			testo=lettura.toString()+"/";
		}
		System.out.println("File da salvare: "+testo);
		FileUtils.writeStringToFile(file, testo,"UTF-8");
		System.out.println("File salvato con successo");
	}
	
	public static void letturaDaDisco() throws IOException {
		String txtFile= FileUtils.readFileToString(file, "UTF-8");
		System.out.println("File da disco: "+txtFile);
	}
}
