package config_bean;

@Configuration
public class ConfigurationTest {

	@Bean
	public Test test() {
		return new Test("Mario", "Rossi");
	}
}
