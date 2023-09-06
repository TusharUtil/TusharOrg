({
	fetchAcc : function(component, event, helper) {
        helper.fetchAccHelper(component, event, helper);
    },

    onChange: function (cmp, event, helper) {
        var selectedPicklistValue= component.find("statusPicklist").get("v.value");
        alert("selectedPicklistValue ==>" +selectedPicklistValue)

    },

    doInit : function(component, event, helper) {
       helper.fetchAccHelper(component, event, helper);
    }
})