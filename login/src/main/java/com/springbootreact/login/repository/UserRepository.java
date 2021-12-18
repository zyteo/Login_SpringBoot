package com.springbootreact.login.repository;

//repository for persisting and accessing data

import org.springframework.data.mongodb.repository.MongoRepository;
import java.util.Optional;

import com.login.springbootlogin.model.User;

//The API implementation happens in the repository. It acts as a link between the model and the database, and has all the methods for CRUD operations.

//We first create an UserRepository public interface which extends the MongoRepository interface.
public interface UserRepository extends MongoRepository<User, String> {

//	this is for logging in - checking if user exists
	Optional<User> findByUsername(String username);
	
//  this existsbyusername/name is for later, checking if value already exists when signing up
  boolean existsByUsername(String username);

	boolean existsByName(String name);

}
