({
    fetchOppHelper : function(component, event, helper) {
        debugger;
        component.set('v.mycolumns', [
            //label:'OpportunityId' ,fieldName:'Opp Id', type:'Id',sortable:true},
            { label:'OpportunityName' ,fieldName:'Name', type:'Text',sortable:true},
            { label:'Amount' ,fieldName:'Amount', type:'Currency',sortable:true},
            { label:'StageName' ,fieldName:'StageName', type:'Text',sortable:true},
            { label:'CloseDate' ,fieldName:'CloseDate', type:'date',sortable:true},
            { label:'Probability' ,fieldName:'Probability',type:'text',sortable:true},
            
        ]);
            var action = component.get("c.fetchOpportunity");
            action.setParams({
            });
            action.setCallback(this, function(response){
            var state = response.getState();
            if (state === "SUCCESS") {
            component.set("v.opppList", response.getReturnValue());
            }
            });
            $A.enqueueAction(action);
            },
            
    sortData: function (component, fieldName, sortDirection) {
        var fname = fieldName;
        var data = component.get("v.opppList");
        var reverse = sortDirection !== 'asc';
        data.sort(this.sortByfield(fieldName, reverse))
        component.set("v.opppList", data);
    },
    
    sortByfield: function (field, reverse) {
        var key = function(x) {return x[field]};
        reverse = !reverse ? 1 : -1;
        return function (a, b) {
            return a = key(a), b = key(b), reverse * ((a > b) - (b > a));
        }
    },

})