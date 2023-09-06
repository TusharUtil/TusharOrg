({
	fetchOpp : function(component, event, helper) {
		helper.fetchOppHelper(component, event, helper);
	},
    handleSort : function(component, event, helper) {
        var fieldName = event.getParam('fieldName');
        var sortDirection = event.getParam('sortDirection');
        component.set("v.sortedBy", fieldName);
        component.set("v.sortedDirection", sortDirection);
        helper.sortData(component, fieldName, sortDirection);
	}
})