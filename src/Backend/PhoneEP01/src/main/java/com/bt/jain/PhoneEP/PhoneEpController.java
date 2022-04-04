package com.bt.jain.PhoneEP;

import com.bt.jain.PhoneEP.PhoneDB.PhoneEpRipository;
import com.bt.jain.PhoneEP.PhoneDB.PhoneEpService;
import com.bt.jain.PhoneEP.PhoneDB.Phone_EP;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000/")
@RestController
public class PhoneEpController {

    @Autowired
    PhoneEpService phoneEpService;

    @GetMapping("/phone-ep")
    public List<Phone_EP> retrieveAllUser(){
        return phoneEpService.retriveAll();
    }

//    @GetMapping("/phone-ep/{label}")
//    public Phone_EP retrieveUser(@PathVariable String label){
//        return phoneEpService.retrieveUser(label);
//    }

    @GetMapping("/phone-ep/{label}")
    public Phone_EP getAllData(@PathVariable("label") String label){
        return phoneEpService.retrieveUser(label);
    }

    @Transactional//(rollbackFor = Exception.class)
    @PostMapping("/phone-ep")
    public String createUser(@RequestBody Phone_EP phoneEp){
        return phoneEpService.createUser(phoneEp);
    }

    @Transactional
    @DeleteMapping("/phone-ep/{label}")
    public String deleteUser(@PathVariable String label){
        return phoneEpService.deleteUser(label);
    }

    @Transactional//(rollbackFor = Exception.class)
    @PutMapping("/phone-ep")
    public String updateUser(@RequestBody Phone_EP phoneEp){
        return phoneEpService.createUser(phoneEp);
    }

}


