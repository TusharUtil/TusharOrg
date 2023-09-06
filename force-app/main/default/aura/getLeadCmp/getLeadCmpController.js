({
	getLeadData : function(component, event, helper) {
		var action = component.get("c.getLead");
        action.setCallback(this,function(response){
            var state = response.getState();
            if(state == 'SUCCESS'){
                var returnData = response.getReturnValue();
                component.set("v.getLeadList",returnData);
            }
        });
        $A.enqueueAction(action);
	}
})