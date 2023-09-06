({
	handleFinish : function(component, event, helper) {
		alert('Finished...');
        component.set("v.selectedStep","Step 1");
	},
    selectStep1 : function(component, event, helper) {
        component.set("v.selectedStep","Step 1");
	},
     selectStep2 : function(component, event, helper) {
        component.set("v.selectedStep","Step 2");
	},
     selectStep3 : function(component, event, helper) {
        component.set("v.selectedStep","Step 3");
	},
     selectStep4 : function(component, event, helper) {
        component.set("v.selectedStep","Step 4");
	},
     selectStep5 : function(component, event, helper) {
        component.set("v.selectedStep","Step 5");
	},
    
    handleNext : function(component, event, helper) {
        var getselectedStep = component.get("v.selectedStep");
        if(getselectedStep == "Step 1"){
           component.set("v.selectedStep","Step 2"); 
        }
        else if(getselectedStep == "Step 2"){
           component.set("v.selectedStep","Step 3"); 
        }
        else if(getselectedStep == "Step 3"){
           component.set("v.selectedStep","Step 4"); 
        }
        else if(getselectedStep == "Step 4"){
           component.set("v.selectedStep","Step 5"); 
        }    
	},
    
    handlePrev : function(component, event, helper) {
        var getselectedStep = component.get("v.selectedStep");
        if(getselectedStep == "Step 5"){
           component.set("v.selectedStep","Step 4"); 
        }
        else if(getselectedStep == "Step 4"){
           component.set("v.selectedStep","Step 3"); 
        }
        else if(getselectedStep == "Step 3"){
           component.set("v.selectedStep","Step 2"); 
        }
        else if(getselectedStep == "Step 2"){
           component.set("v.selectedStep","Step 1"); 
        }    
	},
    
})