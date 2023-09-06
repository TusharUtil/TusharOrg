({
	doInit : function(component, event, helper) {
         debugger;
		helper.getChildRecord(component,event);
	},
    
    addSelected : function(component,event,helper){
         debugger;
        // create array[list] type temp.variable for store child records ids from selected chkbox.
        var tempIds = [];
        
        var getAllId = component.find("chkBox");
        
        for(var i=0;i<getAllId.length;i++){
            if(getAllId[i].get("v.value")==true){
                tempIds.push(getAllId[i].get("v.text"));
            }
        }
        helper.addSelectedHelper(component,event, tempIDs);
    }
})