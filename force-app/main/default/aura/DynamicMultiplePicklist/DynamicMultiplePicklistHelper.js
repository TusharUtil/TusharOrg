({
    //get Options Picklist Value
    getOptionsPicklist: function(component, event) {
        var action = component.get("c.getPayOptions");
        action.setCallback(this, function(response) {
            var state = response.getState();
            if (state === "SUCCESS") {
                var result = response.getReturnValue();
                var optionMap = [];
                for(var key in result){
                    optionMap.push({key: key, value: result[key]});
                }
                component.set("v.optionMap", optionMap);
            }
        });
        $A.enqueueAction(action);
    },
    
    getTypePicklist: function(component,event){
        var action = component.get("c.getPayType");
        action.setCallback(this, function(response) {
            var state = response.getState();
            if (state === "SUCCESS") {
                var result = response.getReturnValue();
                var typeMap = [];
                for(var key in result){
                    typeMap.push({key: key, value: result[key]});
                }
                component.set("v.typeMap", typeMap);
            }
        });
        $A.enqueueAction(action);
    },
    
    getChannelPicklist: function(component, event){
        var action = component.get("c.getPayChannel");
        action.setCallback(this, function(response) {
            var state = response.getState();
            if (state === "SUCCESS") {
                var result = response.getReturnValue();
                var chnMap = [];
                for(var key in result){
                    chnMap.push({key: key, value: result[key]});
                }
                component.set("v.chnMap", chnMap);
            }
        });
        $A.enqueueAction(action);
    },
    
    getModePicklist: function(component,event){
    	var action = component.get("c.getPayMode");
        action.setCallback(this, function(response) {
            var state = response.getState();
            if (state === "SUCCESS") {
                var result = response.getReturnValue();
                var modMap = [];
                for(var key in result){
                    modMap.push({key: key, value: result[key]});
                }
                component.set("v.modMap", modMap);
            }
        });
        $A.enqueueAction(action);

    },
     
    //handle Account Save
    save : function(component, event) {
        var oppo = component.get("v.opp");
        var action = component.get("c.getPayOptions");
        action.setParams({
            objopp : oppo
        });
        action.setCallback(this,function(response){
            var state = response.getState();
            if(state === "SUCCESS"){
                alert('Record is Created Successfully');
            } else if(state === "ERROR"){
                var errors = action.getError();
                if (errors) {
                    if (errors[0] && errors[0].message) {
                        alert(errors[0].message);
                    }
                }
            }else if (status === "INCOMPLETE") {
                alert('No response from server or client is offline.');
            }
        });       
        $A.enqueueAction(action);
    }
})