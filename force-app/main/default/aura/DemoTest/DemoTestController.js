({
	handleRecordUpdated: function(component, event, helper) {
        var eventParams = event.getParams();
        if(eventParams.changeType === "LOADED") {
            // Record is loaded, perform any necessary actions
            console.log("Record loaded:", component.get("v.record"));
        } else if(eventParams.changeType === "ERROR") {
            // Error occurred while loading the record
            console.log("Error loading record: ", eventParams.error);
        }
    }
})