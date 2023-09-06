({
	CustomerSearchHelper : function(component,event,helper) {
        debugger;
        var action = component.get("c.getAccountRecord");
        action.setParams({ 
            'pan_no' : component.get("v.panNo") , 
            'mobile_no' : component.get("v.mobileNo")
        });
        action.setCallback(this, function(response){
            var state = response.getState();          
            if (state === "SUCCESS") {
                var resData = response.getReturnValue();
                component.set("v.dataList", resData); 
                if($A.util.isEmpty(resData))
                {
                   alert('No Account found!');
                }
            }
        });
        $A.enqueueAction(action);
    }
})