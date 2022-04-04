package net.javaguidesspringboot.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import net.javaguidesspringboot.model.country;
//import net.javaguidesspringboot.model.page1;
import net.javaguidesspringboot.repository.Countries;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/")
public class countryController {
	
	@Autowired
	private Countries countries;
	
	@GetMapping("/country")
	public List<country> getAllData(){
		return  countries.findAll();
	}

	@GetMapping("/country/id/{id}")
	public country getData(@PathVariable("id") int id){
		Optional<country> c = countries.findById(id);
		if (!c.isPresent()){
			throw new RuntimeException("User for this Id is not present");
		}
		return c.get();
	}

	@GetMapping("/country/{keyword}")
	public List<country> getAllData(@PathVariable("keyword") String keyword){
		return countries.findAll(keyword);
	}
	

}
