({
	deltingCheckboxLeads : function(component, event, deltIds) {
        debuggers;
		var action = component.get('c.DeleteRecord');
         action.setParams({
            "DeleteIds": deltIds
        });
        action.setCallback(this, function(response) {
            var state = response.getState();
            //If state is sucess then refreshing the View.
            if (state === "SUCCESS") {
                debuggers;
                console.log('Inside delete'+state);
                //Refresh the View.
                $A.get('e.force:refreshView').fire();
            }
        });
         
        $A.enqueueAction(action);
    }
	
})