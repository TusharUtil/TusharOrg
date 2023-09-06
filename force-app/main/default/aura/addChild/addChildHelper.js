({
	getChildRecs : function(component,event) {
        debugger;
		var action = component.get("c.getContacts");
        action.setCallback(this,function(actionResult){
            var state = actionResult.getState();
            if(state === "SUCCESS"){
                component.set('v.ChildRecordList',actionResult.getReturnValue());
            }
        });
        $A.enqueueAction(action);
	},
    
    addSelectedHelper:function(component,event,tempIDs){
        debugger;
        var ChildIds=tempIDs;
        var action = component.get('c.addParentAccount');
        action.setParams({
            "ParentId":component.get("v.recordId"),
            "lstofConIds":ChildIds
        });
        action.setCallback(this,function(response){
            var state = response.getState();
            if(state === "SUCCESS"){
                var toastEvent = $A.get("e.force:showToast");
                toastEvent.setparams({
                    "title":"Success!",
                    "message": "The CHILD Record's has been added successfully."
                });
                toastEvent.fire();
                 // refresh/reload the page view
                $A.get('e.force:refreshView').fire();
                
                // call init function again [clear selected checkboxes]
                this.getChildRecs(component,event);
            }
        })
         $A.enqueueAction(action);
    }
})