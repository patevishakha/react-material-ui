package com.bt.jain.PhoneEP.PhoneDB;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface PhoneEpRipository extends JpaRepository<Phone_EP , String> {

    @Query("from Phone_EP c ")
    List<Phone_EP> findAll(/*Pageable pageable*/);

    @Query("from Phone_EP c where c.label like %:keyword%")
    List<Phone_EP> findAll(@Param("keyword") String keyword);

}
