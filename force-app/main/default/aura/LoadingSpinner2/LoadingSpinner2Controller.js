({
	myAction : function(component, event, helper) {
		
	},
    startLoader : function(component, event, helper) {
		component.set("v.spinner",true);
	},
    stopLoader : function(component, event, helper) {
		component.set("v.spinner",false);
	}
})