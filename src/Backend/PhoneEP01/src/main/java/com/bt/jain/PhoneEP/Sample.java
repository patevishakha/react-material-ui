package com.bt.jain.PhoneEP;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class Sample {

    @GetMapping("/hello/{name}")
    public String Hello(@PathVariable String name){ return "Hello "+ name;}
}
