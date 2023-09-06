({
    doInit : function(component, event, helper) {
        helper.getIndPicklistValues(component, event);
        helper.getSrcPicklistValues(component, event);
        helper.getRatPicklistValues(component, event);
        helper.getTypPicklistValues(component, event);
    },
    
    handleSource : function(component, event, helper) {
        var source = component.get("v.account.AccountSource");
        alert(source);
    },
    
    handleIndustry : function(component, event, helper) {
        var industry = component.get("v.account.Industry");
        alert(industry);
    },
    
    handleRating : function(component, event, helper) {
        var rating = component.get("v.account.Rating");
        alert(rating);
    },
    
    handleType : function(component, event, helper) {
        var type = component.get("v.account.Type");
        alert(type);
    },
    
    createAccRelCont : function(component, event, helper) {
        helper.saveRecord(component, event);
    }
})