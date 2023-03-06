package config_bean_configuration;

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
public class Test{

	private String base;
	private String condimento;
	

	
	public Test (String condimento) {
		super();
		this.base = "pomodoro e mozzarella";
		this.condimento = condimento;
	}
	
	public String condimento() {
		return "Scegli tra" + this.nome + " " + this.cognome;
	}
	
	
	
}