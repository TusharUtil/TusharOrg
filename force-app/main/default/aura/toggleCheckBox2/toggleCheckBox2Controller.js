({
	selectChange : function(component, event, helper) {
		var chkcmp = component.find("chkbox");
        component.set("v.toggleValue" ,  chkcmp.get("v.value"));
        
	}
})