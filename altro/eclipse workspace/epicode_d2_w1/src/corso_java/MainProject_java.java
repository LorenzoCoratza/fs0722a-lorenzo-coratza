package corso_java;

public class MainProject_java {
	
	public static void main(String[]args) {
		System.out.println("MainProject");
		
		/*Veicolo v = new Veicolo();
		v.marca = "Fiat";
		v.modello = "500";
		v.colore = "Nera";
		v.cilindrata = 1200;
		v.targa = "AB123CD";*/
		Veicolo v = new Veicolo("500","Fiat","Nera","Nera",1200)
		
		System.out.println(v.info());
	}

}
