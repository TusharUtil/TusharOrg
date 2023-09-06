({
	recordCreatedSuccess : function(component, event, helper) {
		//alert('yes');
        var eventSuccess =$A.get("e.force:showToast");
        eventSuccess.setParams({
            title : 'Success',
            message : 'Record Created!',
            type : 'success'
        });
        eventSuccess.fire();
	}
})