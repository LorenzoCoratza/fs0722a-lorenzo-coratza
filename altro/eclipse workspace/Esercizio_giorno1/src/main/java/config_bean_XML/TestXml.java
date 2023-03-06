package config_bean_XML;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@ToString
public class TestXml {

	private String nome;
	private String cognome;
	
	public TestXml(String nome) {
		super();
		this.nome = nome;
		this.cognome = "Rossi";
	}
	
	public String saluta() {
		return "Ciao " + this.nome + " " + this.cognome;
	}
	
}