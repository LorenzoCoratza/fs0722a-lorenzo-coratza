package corso_java;

public class Veicolo {
	
	String modello;
	String marca;
	String colore;
	String targa;
	int cilindrata;
	
	public Veicolo(String modello,String marca,String targa,String colore,int cilindrata) {
	
		this.modello = modello;
		this.marca = marca;
		this.targa = targa;
		this.colore = colore;
		this.cilindrata = cilindrata;
		
	}

	public void start() {
		System.out.println("Veicolo avviato");
	}
	
	public void stop() {
		System.out.println("Veicolo fermato");
	}
	
	public void info() {
		return this.marca + " " + this.modello + this.colore + "c.c:" + this.cilindrata + this.targa;
		
	}
}
