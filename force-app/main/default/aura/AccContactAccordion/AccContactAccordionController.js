({
	doInit : function(component, event, helper) {
		var action = component.get('c.showAccForContact');
        
        action.setCallback(this,function(response){
            var state = response.getState();
            console.log('state:>>>'+state);
            if(component.isValid() && state==="SUCCESS"){
                component.set("v.acccList",response.getReturnValue());
                console.log('v.acccList=>>>>'+JSON.stringify(response.getReturnValue()));
            }
        });
        $A.enqueueAction(action);
	}
})