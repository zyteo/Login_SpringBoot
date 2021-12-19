package com.springbootreact.login.model;

//for validation
import javax.validation.constraints.NotBlank;
//refer https://stackoverflow.com/questions/11189398/difference-between-sizemax-value-and-minvalue-and-maxvalue
import javax.validation.constraints.Size;

//for mongoDB
import org.springframework.data.annotation.Id;

import org.springframework.data.mongodb.core.mapping.Document;

//set the collection name that will be used by the model. If the collection doesn’t exist, MongoDB will create it.
@Document("Users")
	
//create the user model
public class User {
//	create the required details in user
	
	@Id
	private String id;
	
	@NotBlank
	private String username;
	
	@NotBlank
	private String name;
	
	@NotBlank
	@Size(max = 120)
	private String password;
	
	private String role;
	
//	above was private - which defines the scope
//	this now extends the scope - refer https://www.javatpoint.com/public-vs-private-java
	public User( String name, String username, String password, String role) {

      this.name = name;
      this.username = username;
      this.password = password;
      this.role = role;
  }
	
//	From here on below are methods (functions in classes)
//	getProperty and setProperty - 
//	getProperty returns the property, while setProperty does not have a return statement - takes in an argument and set this.property 
	public String getName() {
		return name;
	}
	
	public void setName(String name) {
	    this.name = name;
	  }
	
	public String getUsername() {
		return username;
	}
	
	public void setUsername(String username) {
	    this.username = username;
	  }

	public String getPassword() {
		return password;
	}
	
	public void setPassword(String password) {
	    this.password = password;
	  }
	
	public String getRole() {
		return role;
	}
	
	public void setRole(String role) {
	    this.role = role;
	  }

	public String getId() {
  return id;
}


}
