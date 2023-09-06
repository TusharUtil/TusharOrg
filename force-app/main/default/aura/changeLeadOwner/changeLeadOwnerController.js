({
	changeUserRecord : function(component, event, helper) {
        debugger;
		var action = component.get("c.changeOwner");
        var selectUId = component.get("v.selectUserId");
        
        action.setParams({
            "leadId":component.get("v.recordId"),
            "newOwnerId": selectUId.Id
        });
        action.setCallback(this,function(response) {
            var state = response.getState();
            if (state === "SUCCESS") {
                alert('Success');
            }else{
                alert('Error');
            }
        });
        $A.enqueueAction(action);
        $A.get('e.force:refreshView').fire();
	}
    
})