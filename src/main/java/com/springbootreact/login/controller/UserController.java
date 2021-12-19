package com.springbootreact.login.controller;


import com.springbootreact.login.model.User;
import com.springbootreact.login.repository.UserRepository;
import java.util.Optional;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api")
public class UserController {

  @Autowired
  UserRepository userRepository;

//  get request for logging in - get user details for frontend to use
  @GetMapping("/user/{username}")
  public ResponseEntity<User> getTutorialById(@PathVariable("username") String username) {
		    try {
		    	Optional<User> userData = userRepository.findByUsername(username);

//		    	if username doesnt exist
		      if (userData.isEmpty()) {
		        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		      }
//		      else username exists, return the user
		      return new ResponseEntity<>(userData.get(), HttpStatus.OK);
//		      handle errors
		    } catch (Exception e) {
		      return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		    }

  }

//  post request for signing up - creating new user
  @PostMapping("/signup")
  public ResponseEntity<User> createUser(@RequestBody User user) {
	  try {
//		  first check if username/name exists
//		  Not sure how to set message payload response, so I set as httpstatus 403 and 409.
		  if (userRepository.existsByUsername(user.getUsername())) {
			  return new ResponseEntity<>(null, HttpStatus.FORBIDDEN);
			}

			if (userRepository.existsByName(user.getName())) {
				return new ResponseEntity<>(null, HttpStatus.CONFLICT);
			}
//		  If all good - 
//		  Create new user
		    User _user = userRepository.save(new User(user.getName(), user.getUsername(), user.getPassword(), "User"));
		    return new ResponseEntity<>(_user, HttpStatus.CREATED);
//		    handle errors
		  } catch (Exception e) {
		    return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		  }
  }
  

//  for deleting user
  @DeleteMapping("/user/{id}")
  public ResponseEntity<HttpStatus> deleteUser(@PathVariable("id") String id) {
	    try {
	      userRepository.deleteById(id);
	      return new ResponseEntity<>(HttpStatus.NO_CONTENT);
	    } catch (Exception e) {
	      return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
	    }
	  }

}
