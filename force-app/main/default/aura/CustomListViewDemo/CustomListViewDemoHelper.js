({
	fetchAccHelper : function(component, event, helper) {
        component.set('v.mycolumns', [
            {label: 'Account Name', fieldName: 'Name', type: 'text'},
                {label: 'Industry', fieldName: 'Industry', type: 'text'},
                {label: 'Phone', fieldName: 'Phone', type: 'Phone'},
                {label: 'Website', fieldName: 'Website', type: 'url '}
            ]);
        var action = component.get("c.fetchAccounts");
        action.setParams({
          "accountType":component.get("v.accountType")});// pass account type to apex 
        action.setCallback(this, function(response){
            var state = response.getState();
            if (state === "SUCCESS") {
                component.set("v.acctList", response.getReturnValue());
            }
        });
        $A.enqueueAction(action);
    }
})