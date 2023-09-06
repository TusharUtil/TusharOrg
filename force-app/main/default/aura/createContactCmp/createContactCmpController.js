({
    CreateContact : function(component, event, helper) {
        debugger;
        
        var action = component.get('c.createCon');
        // var data = component.get('v.ContactListData');
        
        var params = component.get('v.ContactListData');
        action.setParams({'con': JSON.stringify(params) });
        action.setCallback(this, function(response) {
            //store state of response
            var state = response.getState();
            if (state === "SUCCESS") {
                var result = response.getReturnValue();
                 $A.get('e.force:refreshView').fire();
                if(result !=null){
                   alert("SUCCESS")
                }               
            }
        });
        $A.enqueueAction(action);
    },
    displayContact : function(component, event, helper) {
        //Calling server-side apex method.
        var action = component.get('c.displayCon');
        action.setCallback(this, function(response) {
            //store state of response
            var state = response.getState();
            if (state === "SUCCESS") {
                //storing response to attribute.
                //then we are using this for iteration.
                component.set('v.ConListToDisplay', response.getReturnValue());               
            }
        });
        $A.enqueueAction(action);
    },
    openModel: function(component, event, helper) {
      // Set isModalOpen attribute to true
      component.set("v.isModalOpen", true);
   },
    closeModel: function(component, event, helper) {
      // Set isModalOpen attribute to false  
      component.set("v.isModalOpen", false);
   },
    openModelTwo: function(component, event, helper) {
      // Set isModalOpenSecond attribute to true
      component.set("v.isModalOpenSecond", true);
   },
    closeModel: function(component, event, helper) {
      // Set isModalOpenSecond attribute to false  
      component.set("v.isModalOpenSecond", false);
        $A.get('e.force:refreshView').fire();
   },
    
})