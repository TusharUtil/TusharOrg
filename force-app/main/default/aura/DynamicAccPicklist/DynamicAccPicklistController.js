({
	doInit : function(component, event, helper) {
        debugger;
		helper.getIndustryPicklist(component, event);
	},
    
    handleAccountSave : function(component, event, helper) {
		helper.saveAccount(component, event);
	},
    
    handleCompanyOnChange : function(component, event, helper) {
        debugger;
		var industry = component.get("v.acc.Industry");
       // alert(industry);
	},
})