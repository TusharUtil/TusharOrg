({
    //Load Account Industry Picklist
    doInit: function(component, event, helper) {        
        helper.getOptionsPicklist(component, event);
        helper.getTypePicklist(component,event);
        helper.getChannelPicklist(component, event);
        helper.getModePicklist(component,event);
        
    },
     
    //handle Save
    handleSave : function(component, event, helper) {
        helper.save(component, event);
    },
    
    //handle Cancel
    handleCancel : function(component,event,helper) {
        $A.get("e.force:closeQuickAction").fire();
    },
     
    //handle Payment Option Selection
    handleOptionChange : function(component, event, helper) {
        var option = component.find("payOptPicklist").get('v.value');
        // var payOpt = component.find('PayOption').get('v.value');
        component.set("v.optValue",option);
        alert(option);
    },
    
    //handle Payment Type Selection
    handleTypeChange : function(component, event, helper) {
        var type = component.find("payTypPicklist").get('v.value');
        component.set("v.typValue",type);
        alert(type);
    },
    
    //handle Payment Channel Selection
    handlePayChannel : function(component,event, helper){
        debugger;
        var channel = component.find("payChannelPicklist").get('v.value');
        component.set("v.chnValue",channel);
        alert(channel);
    },
    
    //handle Payment Mode Selection
    handleModeChange : function(component,event, helper){
        debugger;
        var mode = component.find("payModPicklist").get('v.value');
        component.set("v.chnValue",mode);
        alert(mode);
    }
})