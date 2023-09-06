({
	doinit : function(component, event, helper) {
        debugger;
		var action = component.get("c.getAccountDetails");
        var self = this;
        action.setCallback(this,function(actionResult){
            component.set("v.Acclist",actionResult.getReturnValue)
        });
        $A.enqueueAction(action);
	},
    
    delete: function(component,event,helper){
    debugger;
    	var action = component.get("c.getAccountData");
    	action.setParams({
    	"AccountId":event.target.id
		});
		action.setCallback(this,function(response){
    	component.set("v.Acclist",response.getReturnValue());
		});
		$A.enqueueAction(action);
	},
})