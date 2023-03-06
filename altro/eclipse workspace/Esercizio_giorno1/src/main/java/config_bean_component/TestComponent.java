package config_bean_component;

import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Component;

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
@Component("TestComponent")
@Scope("prototype")
public class TestComponent {

	private String nome;
	private String cognome;
	
	public TestComponent(String nome) {
		super();
		this.nome = nome;
		this.cognome = "Rossi";
	}
	
	public String saluta() {
		return "Ciao " + this.nome + " " + this.cognome;
	}
	
}