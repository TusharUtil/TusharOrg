({
	getContactData : function(component, event, helper) {
		//alert('We are Here');
		var action = component.get("c.getCont");
        action.setCallback(this,function(response){
            var state = response.getState();
            if(state == 'SUCCESS'){
                var returnData = response.getReturnValue();
                component.set("v.getConList",returnData);
            }
        });
        $A.enqueueAction(action);
	}
})