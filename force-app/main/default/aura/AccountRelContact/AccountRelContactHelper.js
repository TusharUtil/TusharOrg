({
    fetchAccountHelper :function(component, event, helper) {
         component.set('v.mycolumns',[
             {label:'Account Name',fieldName:'Name',type:'text'},
             {label:'Industry',fieldName:'Industry',type:'text'},
             {label:'Phone',fieldName:'Phone',type:'Phone'},
             {label:'Website',fieldName:'Website',type:'url'}
         ])
        var action=component.get("c.fetchAccounts");

        action.setParams({ "accountType":component.get("v.accountType")
           });

        action.setCallback(this,function(response){
            var state = response.getState();
            if(state === "SUCCESS"){
                var allValues = response.getReturnValue();
                
                component.set('v.acctList', allValues);
            }
            else if(state === "ERROR") {
                var errors = response.getError();
                if(errors){
                    if(errors[0] && errors[0].message){
                        console.log("Error Message: " + errors[0].message);
                    }
                }
                else{
                    console.log("Unknown Error");
                }
            }
        });
        $A.enqueueAction(action);
    }
    
    
})