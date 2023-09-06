({
	getPicklistValues : function(component, event) {
        debugger;
        var action = component.get("c.getIndustryFieldValue");
        action.setCallback(this, function(response) {
            var state = response.getState();
            if (state === "SUCCESS") {
                var result = response.getReturnValue();
                var fieldMap = [];
                for(var key in result){
                    fieldMap.push({key: key, value: result[key]});
                }
                component.set("v.fieldMap", fieldMap);
            }
        });
        $A.enqueueAction(action);
    },
    
    saveLead: function(component, event){
        var lead = component.get("v.lead");
        var action = component.get("c.createLead");
        action.setParams ({
            leadObj : lead
        });
        action.setCallback(this,function(response){
            var state = response.getState();
            if(state === "SUCCESS"){
                
                alert('Record Created Successfully!!');
            } else if(state === "ERROR"){
                var errors = action.getError();
                 if (errors) {
                    if (errors[0] && errors[0].message) {
                        alert(errors[0].message);
                    }
                }
            }
        });       
        $A.enqueueAction(action);
    }

    
})