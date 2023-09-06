({
    getIndPicklistValues: function(component, event) {
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
    
    getSrcPicklistValues: function(component, event) {
         debugger;
        var action = component.get("c.getSourceFieldValue");
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
    
    getRatPicklistValues: function(component, event) {
         debugger;
        var action = component.get("c.getRating");
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
    
        getTypPicklistValues: function(component, event) {
             debugger;
        var action = component.get("c.getType");
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
    
    saveRecord: function(component, event) {
         debugger;
        var acc = component.get("v.account");
        var action = component.get("c.createAccContact");
        action.setParams({
            accObj : account
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