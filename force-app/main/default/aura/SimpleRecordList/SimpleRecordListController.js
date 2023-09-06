({
    doInit : function(component, event, helper) {
        var action = component.get("c.getAccount");
        action.setCallback(this,function(response){
            var records = response.getReturnValue();
            var state = response.getState();
            if(state === "SUCCESS"){
                console.log('Records-->'+JSON.stringify(records));
                component.set("v.accountList",records);
            }
            else{
                console.log("Action failed with State"+ state);
            }
        })
    }
})