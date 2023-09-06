({
	doInit : function(component, event, helper) {
        debugger;
		helper.getChildRecs(component,event);
	},
    addSelected : function(component,event,helper){
        debugger;
        var tempIDs = [];
        var getAllId = component.find("checkBox");
        for(var i=0;i<getAllId.length;i++){
            if(getAllId[i].get("v.value")==true){
                tempIDs.push(getAllId[i].get("v.text"));
            }
        }
        
        helper.addSelectedHelper(component,event,tempIDs); 
    }
})