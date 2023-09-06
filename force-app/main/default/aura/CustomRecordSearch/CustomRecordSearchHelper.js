({
	CustomerSearchHelper : function(component,event,helper) {
		debugger;
        var action = component.get("c.getAccountRecord");
        action.setParams({
            'pan_no': component.get("v.panNo"),
            'mobile_no': component.get("v.mobileNo")
        });
        action.setCallback(this,function(response){
            var state = response.getState();
            if(state === "SUCCESS"){
                var result = response.getReturnValue();
                component.set("v.dataList",result); 
               component.set("v.isShowData",true);
                   
                
            }
        });
        $A.enqueueAction(action);
	}
})