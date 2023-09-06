({
	doInit : function(component, event, helper) {
		var controllingFieldAPI = component.get("v.controllingFieldAPI");
        var dependentFieldAPI = component.get("v.dependingFieldAPI");
        var objDetails = component.get("v.objDetail");
        
        helper.fetchPicklistValues(component,objDetails,controllingFieldAPI,dependentFieldAPI);
	},
    
    onControllerFieldChange: function(component, event, helper) {     
        var controllerValueKey = event.getSource().get("v.value"); // get selected controller field value
        var depnedentFieldMap = component.get("v.dependentFieldMap");
        
        if (controllerValueKey != '--- None ---') {
            var ListOfDependentFields = depnedentFieldMap[controllerValueKey];
            
            if(ListOfDependentFields.length > 0){
                component.set("v.bDisabledDependentFld" , false);  
                helper.fetchDepValues(component, ListOfDependentFields);    
            }else{
                component.set("v.bDisabledDependentFld" , true); 
                component.set("v.listDependingValues", ['--- None ---']);
            }  
            
        } else {
            component.set("v.listDependingValues", ['--- None ---']);
            component.set("v.bDisabledDependentFld" , true);
        }
    },
})