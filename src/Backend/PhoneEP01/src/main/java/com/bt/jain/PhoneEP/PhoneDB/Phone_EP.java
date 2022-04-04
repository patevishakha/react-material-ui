package com.bt.jain.PhoneEP.PhoneDB;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import java.math.BigInteger;

@Entity
public class Phone_EP {

    @Id
    private String label;

    @Column(name = "Number_End_Point")
    private BigInteger number;

    @Column(name = "Destination_name")
    private String country;

    private String locationId;

    @Column(name = "suffix_forwarding")
    private Boolean suffixForwarding ;

    private Boolean overflow;

    private Boolean queuing;

    public Phone_EP(){
    }

    public Phone_EP(String label, BigInteger number, String country, String locationId, Boolean suffixForwarding, Boolean overflow, Boolean queuing) {
        this.label = label;
        this.number = number;
        this.country = country;
        this.locationId = locationId;
        this.suffixForwarding = suffixForwarding;
        this.overflow = overflow;
        this.queuing = queuing;
    }

    public String getLabel() {
        return label;
    }

    public BigInteger getNumber() {
        return number;
    }

    public String getCountry() {
        return country;
    }

    public String getLocationId() {
        return locationId;
    }

    public Boolean getSuffixForwarding() {
        return suffixForwarding;
    }

    public Boolean getOverflow() {
        return overflow;
    }

    public Boolean getQueuing() {
        return queuing;
    }


}
