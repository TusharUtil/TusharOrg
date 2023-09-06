({
	getAccountData : function(component, event, helper) {
		var action = component.get("c.getAccount");
        action.setCallback(this,function(response){
            var state = response.getState();
            if(state == 'SUCCESS'){
                var returnData = response.getReturnValue();
                component.set("v.getAccList",returnData);
            }
        });
         $A.enqueueAction(action);
	}
})