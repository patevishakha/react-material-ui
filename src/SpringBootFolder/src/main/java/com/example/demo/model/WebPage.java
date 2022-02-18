package com.example.demo.model;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="webpage_user_info")
public class WebPage {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	
	@Column(name = "requestNO")
	private String requestNO;
	@Column(name = "countryOfOrigin")
	private String countryOfOrigin;
	@Column(name = "inboundAccessType")
	private String   inboundAccessType;
	@Column(name = "isMultiBuild")
	private Boolean isMultiBuild;
	@Column(name = "bulkAccessNoWorkflow")
	private String bulkAccessNoWorkflow;
	@Column(name = "sioAcceptatnceDate")
	private String sioAcceptatnceDate;
	@Column(name = "customerCommitDate")
	private String customerCommitDate;
//	@Column(name = "sioAcceptatnceDate")
//	private Date sioAcceptatnceDate;
//	@Column(name = "customerCommitDate")
//	private Date customerCommitDate;

	@Column(name = "radio_button_value")
	private String radio_button_value;
	@Column(name = "search_type")
	private String search_type;
	@Column(name = "country")
	private String country;
	@Column(name = "switch_box")
	private String switch_box;
	@Column(name = "search_no")
	private Long search_no;
	@Column(name = "quantity")
	private Long quantity;
	@Column(name = "auto_look_up")
	private Boolean auto_look_up;
	@Column(name = "exact")
	private Boolean exact;
	
	@Column(name = "multiline_operational_progress")
	private String multiline_operational_progress;
	
    //1
	@Column(name = "radio_appId")
	private String radio_appId;
	@Column(name = "isCaptureDialPlan")
	private Boolean isCaptureDialPlan;
    //2
	@Column(name = "isRoutingPlan")
	private String isRoutingPlan;
	@Column(name = "routing_plan")
	private String routing_plan;

	
    //1
//	@Column(name = "ht_RTO_Date")
//	private Date ht_RTO_Date;
//	@Column(name = "order_Placed_To_Ptt_Date")
//	private Date order_Placed_To_Ptt_Date;
//	@Column(name = "ptt_Service_Delivered_Date")
//	private Date ptt_Service_Delivered_Date;
	@Column(name = "ht_RTO_Date")
	private String ht_RTO_Date;
	@Column(name = "order_Placed_To_Ptt_Date")
	private String order_Placed_To_Ptt_Date;
	@Column(name = "ptt_Service_Delivered_Date")
	private String ptt_Service_Delivered_Date;
    //2
	@Column(name = "created_Access_No")
	private String created_Access_No;

	
	@Column(name = "created_Access_No2")
	private String created_Access_No2;
	
	
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getRequestNO() {
		return requestNO;
	}
	public String getMultiline_operational_progress() {
		return multiline_operational_progress;
	}
	public void setMultiline_operational_progress(String multiline_operational_progress) {
		this.multiline_operational_progress = multiline_operational_progress;
	}
	public String getRadio_appId() {
		return radio_appId;
	}
	public void setRadio_appId(String radio_appId) {
		this.radio_appId = radio_appId;
	}
	public Boolean getIsCaptureDialPlan() {
		if(isCaptureDialPlan!=null) {
		return isCaptureDialPlan;
		}else {
			return false;
		}
	}
	public void setIsCaptureDialPlan(Boolean isCaptureDialPlan) {
		this.isCaptureDialPlan = isCaptureDialPlan;
	}
	public String getIsRoutingPlan() {
		if(isRoutingPlan!=null) {
			return isRoutingPlan;
			}else {
				return "No";
			}
		
	}
	public void setIsRoutingPlan(String isRoutingPlan) {
		this.isRoutingPlan = isRoutingPlan;
	}
	public String getRouting_plan() {
		return routing_plan;
		
	}
	public void setRouting_plan(String routing_plan) {
		this.routing_plan = routing_plan;
	}
	
	
	public String getSioAcceptatnceDate() {
		return sioAcceptatnceDate;
	}
	public void setSioAcceptatnceDate(String sioAcceptatnceDate) {
		this.sioAcceptatnceDate = sioAcceptatnceDate;
	}
	public String getCustomerCommitDate() {
		return customerCommitDate;
	}
	public void setCustomerCommitDate(String customerCommitDate) {
		this.customerCommitDate = customerCommitDate;
	}
	public String getHt_RTO_Date() {
		return ht_RTO_Date;
	}
	public void setHt_RTO_Date(String ht_RTO_Date) {
		this.ht_RTO_Date = ht_RTO_Date;
	}
	public String getOrder_Placed_To_Ptt_Date() {
		return order_Placed_To_Ptt_Date;
	}
	public void setOrder_Placed_To_Ptt_Date(String order_Placed_To_Ptt_Date) {
		this.order_Placed_To_Ptt_Date = order_Placed_To_Ptt_Date;
	}
	public String getPtt_Service_Delivered_Date() {
		return ptt_Service_Delivered_Date;
	}
	public void setPtt_Service_Delivered_Date(String ptt_Service_Delivered_Date) {
		this.ptt_Service_Delivered_Date = ptt_Service_Delivered_Date;
	}
	public Long getSearch_no() {
		if(search_no!=null) {
		return search_no;
		}else {
			return Long.valueOf(0);
		}
	}
	public void setSearch_no(Long search_no) {
		this.search_no = search_no;
	}
	public Long getQuantity() {
		if(quantity!=null) {
		return quantity;
		}else {
			return Long.valueOf(0);
		}
		
	}
	public void setQuantity(Long quantity) {
		this.quantity = quantity;
	}

	public String getCreated_Access_No() {
		return created_Access_No;
	}
	public void setCreated_Access_No(String created_Access_No) {
		this.created_Access_No = created_Access_No;
	}
	public String getCreated_Access_No2() {
		return created_Access_No2;
	}
	public void setCreated_Access_No2(String created_Access_No2) {
		this.created_Access_No2 = created_Access_No2;
	}
	public void setRequestNO(String requestNO) {
		this.requestNO = requestNO;
	}
	public String getCountryOfOrigin() {
		return countryOfOrigin;
	}
	public void setCountryOfOrigin(String countryOfOrigin) {
		this.countryOfOrigin = countryOfOrigin;
	}
	public String getInboundAccessType() {
		return inboundAccessType;
	}
	public void setInboundAccessType(String inboundAccessType) {
		this.inboundAccessType = inboundAccessType;
	}
	public Boolean getIsMultiBuild() {
		if(isMultiBuild!=null) {
		return isMultiBuild;
		}else {
			return false;
		}
	}
	public void setIsMultiBuild(Boolean isMultiBuild) {
		this.isMultiBuild = isMultiBuild;
	}
	public String getBulkAccessNoWorkflow() {
		return bulkAccessNoWorkflow;
	}
	public void setBulkAccessNoWorkflow(String bulkAccessNoWorkflow) {
		this.bulkAccessNoWorkflow = bulkAccessNoWorkflow;
	}
	
	public String getRadio_button_value() {
		return radio_button_value;
	}
	public void setRadio_button_value(String radio_button_value) {
		this.radio_button_value = radio_button_value;
	}
	public String getSearch_type() {
		return search_type;
	}
	public void setSearch_type(String search_type) {
		this.search_type = search_type;
	}
	public String getCountry() {
		return country;
	}
	public void setCountry(String country) {
		this.country = country;
	}
	public String getSwitch_box() {
		return switch_box;
	}
	public void setSwitch_box(String switch_box) {
		this.switch_box = switch_box;
	}
	
	public Boolean getAuto_look_up() {
		if(auto_look_up!=null) {
			return auto_look_up;
		}
		else {
			return false;
		}
		
	}
	public void setAuto_look_up(Boolean auto_look_up) {
		this.auto_look_up = auto_look_up;
	}
	public Boolean getExact() {
		if(exact!=null) {
			return exact;
		}
		else {
			return false;
		}
		
	}
	public void setExact(Boolean exact) {
		this.exact = exact;
	}

}
