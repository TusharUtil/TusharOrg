({
	doInit : function(component, event, helper) {
		helper.getPicklistValues(component, event);
	},
    
    LeadSave : function(component, event, helper) {
        helper.saveLead(component, event);
    },
    
     handleOnChange : function(component, event, helper) {
        var industry = component.get("v.lead.Industry");
        alert(industry);
    }
    
})