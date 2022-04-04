package com.bt.jain.PhoneEP.CountryEntity;

import javax.persistence.*;

@Entity
@Table(name="tbl_countries")
public class Country {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;

	@Column(name = "country_name")
	private String name;
	private String sortname;
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getSortname() {
		return sortname;
	}
	public void setSortname(String sortname) {
		this.sortname = sortname;
	}
	public Country(int id, String name, String sortname) {
		super();
		this.id = id;
		this.name = name;
		this.sortname = sortname;
	}
	public Country()
	{
		
	}
}
