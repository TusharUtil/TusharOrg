({
    doAction : function(component, event, helper) {
        var InputCmp = component.find("inputCmp");
        var Value = InputCmp.get("v.value");

        if(Value >= 50){
            component.set("v.flag",true);
            component.set("v.flagHeader",true);
        }
        else{
            component.set("v.flag",false);
            component.set("v.flagHeader",true);
        }
    }
})
