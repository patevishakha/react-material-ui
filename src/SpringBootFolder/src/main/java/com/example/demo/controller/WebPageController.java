package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.WebPage;
import com.example.demo.repository.WebPageRepository;


@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/demo")
public class WebPageController {
	
	@Autowired
	private WebPageRepository webPageRepository;
	
	@GetMapping("/data")
	public List<WebPage> getAllData(){
		
		return webPageRepository.findAll();
	}
	
	@PostMapping("/data")
	public WebPage postAllData(@RequestBody WebPage webPage) {
		
		return webPageRepository.save(webPage);
	}
	
	@GetMapping("/data/{id}")
	public ResponseEntity<WebPage> getDataById(@PathVariable Long id){
		WebPage webpage = webPageRepository.findById(id).orElse(null);
		return ResponseEntity.ok(webpage);
	}
	
	@PutMapping("/data/{id}")
    public ResponseEntity<WebPage> updateData(@PathVariable Long id,@RequestBody WebPage webPage) {
		WebPage newWebPage = webPageRepository.findById(id).orElse(null);
		newWebPage.setRequestNO(webPage.getRequestNO());
		newWebPage.setCountryOfOrigin(webPage.getCountryOfOrigin());
		newWebPage.setInboundAccessType(webPage.getInboundAccessType());
		newWebPage.setIsMultiBuild(webPage.getIsMultiBuild());
		newWebPage.setBulkAccessNoWorkflow(webPage.getBulkAccessNoWorkflow());
		newWebPage.setSioAcceptatnceDate(webPage.getSioAcceptatnceDate());
//		System.out.println("sio acceptance date : "+webPage.getSioAcceptatnceDate());
		newWebPage.setCustomerCommitDate(webPage.getCustomerCommitDate());
        
		newWebPage.setRadio_button_value(webPage.getRadio_button_value());
		newWebPage.setSearch_type(webPage.getSearch_type());
		newWebPage.setCountry(webPage.getCountry());
		newWebPage.setSwitch_box(webPage.getSwitch_box());
		newWebPage.setSearch_no(webPage.getSearch_no());
		newWebPage.setQuantity(webPage.getQuantity());
		newWebPage.setAuto_look_up(webPage.getAuto_look_up());
		newWebPage.setExact(webPage.getExact());
//		System.out.println(webPage.getExact());
		
		newWebPage.setMultiline_operational_progress(webPage.getMultiline_operational_progress());
		
		newWebPage.setRadio_appId(webPage.getRadio_appId());
		newWebPage.setIsCaptureDialPlan(webPage.getIsCaptureDialPlan());
		newWebPage.setIsRoutingPlan(webPage.getIsRoutingPlan());
		newWebPage.setRouting_plan(webPage.getRouting_plan());
		
		newWebPage.setHt_RTO_Date(webPage.getHt_RTO_Date());
		newWebPage.setOrder_Placed_To_Ptt_Date(webPage.getOrder_Placed_To_Ptt_Date());
		newWebPage.setPtt_Service_Delivered_Date(webPage.getPtt_Service_Delivered_Date());
		newWebPage.setCreated_Access_No(webPage.getCreated_Access_No());
		
		newWebPage.setCreated_Access_No2(webPage.getCreated_Access_No2());
		
		
        WebPage updatedWebPage = webPageRepository.save(newWebPage);
        return ResponseEntity.ok(updatedWebPage);
	}   

}
