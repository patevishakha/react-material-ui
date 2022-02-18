package com.example.demo.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.model.WebPage;

@Repository
public interface WebPageRepository extends JpaRepository<WebPage, Long> {
		List<WebPage> findAll();
}
