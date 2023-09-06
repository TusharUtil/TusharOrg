({
    handleLeadSave : function(component, event, helper) {
        var objLead = component.get("v.objLead");
        var action = component.get("c.createLead");
        action.setParams({
            objLead : objLead
        });
        action.setCallback(this,function(a){
            var state = a.getState();
            if(state === "SUCCESS"){
                var toastEvent = $A.get("e.force:showToast");
                toastEvent.setParams({
                    title : 'Success',
                    message: 'This is a success message',
                    duration:' 5000',
                    key: 'info_alt',
                    type: 'success',
                    mode: 'pester'
                });
                toastEvent.fire(); 
                 $A.get('e.force:refreshView').fire();
            } else if(state === "ERROR"){
                var errors = action.getError();
                if (errors) {
                    if (errors[0] && errors[0].message) {
                        alert(errors[0].message);
                    }
                }
            }else if (status === "INCOMPLETE") {
                alert('No response from server or client is offline.');
            }
        });       
        $A.enqueueAction(action);
    },
    
    //Call by aura:waiting event  
    handleShowSpinner: function(component, event, helper) {
        component.set("v.isSpinner", true); 
    },
    
    //Call by aura:doneWaiting event 
    handleHideSpinner : function(component,event,helper){
        component.set("v.isSpinner", false);
    },
    // PickList Value
    doInit: function(component, event, helper) {
        debugger;
        var action = component.get("c.getIndustry");
        var inputIndustry = component.find("Industry");
        var opts=[];
        action.setCallback(this, function(a) {
            opts.push({
                
                value: ""
            });
            for(var i=0;i< a.getReturnValue().length;i++){
                opts.push({value: a.getReturnValue()[i]});
            }
            console.log('opts--', opts);
            inputIndustry.set("v.options", opts);
             
        });
        $A.enqueueAction(action); 
    },
    
    onPicklistChange: function(component, event, helper) {
        //get the value of select option
        var selectedIndustry = component.find("Industry");
        alert(selectedIndustry.get("v.value"));
    },
})