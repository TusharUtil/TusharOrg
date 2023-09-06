({
	getChildRecord : function(component,event) {
        debugger;
		var action = component.get('c.getOpps');
        action.setCallback(this,function(actionResult){
            var state = actionResult.getState();
            if(state === "SUCCESS"){
                component.set('v.ChildRecordOppList',actionResult.getReturnValue());
            }
        });
        $A.enqueueAction(action);
	},
    
    addSelectedHelper : function(component,event, tempIDs){
         debugger;
        var action = component.get('c.getParentAcc');
        action.setParams({
            "ParentId" : component.get("v.recordId"),
            "lstOppIds" : tempIDs
        });
        
        action.setCallback(this,function(response){
            var state = response.getState();
            if(state === "SUCCESS"){
                var toastEvent = $A.get("e.force:showToast");
          			toastEvent.setParams({
        				"title": "Success!",
        				"message": "The Child Opportunity record's has been added successfully."
    				});
                    toastEvent.fire();
                $A.get('e.force:refreshView').fire();
                this.getChildRecord(component,event);
            }
        })
    }
})