({
	doInit : function(component, event, helper) {
        var today = new Date();
        
        var options = { weekday: 'short', hour:'numeric',minute:'numeric' };
        var formattedDate = today.toLocaleDateString(undefined, options);
        component.set('v.currentDate', today);
        component.set('v.formattedDate',formattedDate);
        
    }
})