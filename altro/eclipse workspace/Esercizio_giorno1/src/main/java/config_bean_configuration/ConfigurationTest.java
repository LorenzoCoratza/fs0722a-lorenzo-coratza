package config_bean_configuration;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Scope;

@Configuration
public class ConfigurationTest {
	
	@Bean
	@Scope("singleton")
	public Test test() {
		return new Test("Mario", "Rossi");
	}
	
	@Bean
	@Scope("prototype"  

}