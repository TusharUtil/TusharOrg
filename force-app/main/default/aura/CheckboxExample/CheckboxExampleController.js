({
	selectChange : function(cmp, event, helper) {
		var checkCmp = cmp.find("chkbox");
        cmp.set("v.toggleValue",checkCmp.get("v.value"));
	}
})