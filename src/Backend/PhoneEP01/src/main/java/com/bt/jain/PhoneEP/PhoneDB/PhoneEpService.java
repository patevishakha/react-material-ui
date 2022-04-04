package com.bt.jain.PhoneEP.PhoneDB;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Component
public class PhoneEpService {

    @Autowired
    PhoneEpRipository phoneEpRipository;

    public List<Phone_EP> retriveAll(){
        return phoneEpRipository.findAll();
    }

    public List<Phone_EP> retrieveAll(String label) { return  phoneEpRipository.findAll(label);}

    public Phone_EP retrieveUser(String label){
        Optional<Phone_EP> phoneEp = phoneEpRipository.findById(label);
        if (!phoneEp.isPresent()){
            throw new RuntimeException("User for this Id is not present");
        }
        return phoneEp.get();
    }

    @Transactional
    public String createUser(Phone_EP phoneEp){

        try{
            if (phoneEp.getNumber()==null){
                throw new NullPointerException("Phone End point is empty");
            }
            phoneEpRipository.save(phoneEp);

        }
        catch(Exception e){
            return   "Error message: "+ e.getMessage() +"\n status : " +e.toString();
        }
        return  phoneEp.getNumber() +" is added to H2 database";
    }

    @Transactional
    public String deleteUser(String label){
        phoneEpRipository.deleteById(label);
        return "PhoneEP with label "+ label +" is deleted from database";
    }



}
