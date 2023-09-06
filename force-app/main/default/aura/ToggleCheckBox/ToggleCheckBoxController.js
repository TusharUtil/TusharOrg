({
	selectChange : function(component, event, helper) {
        var chkCmp = component.find("chkbox");
        component.set("v.toggleValue", chkCmp.get("v.toggleValue"));
	}
})