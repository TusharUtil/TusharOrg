({
    doInit : function(component, event, helper) {
        
        component.set('v.columns',[
            {label: 'Lead name', fieldName:'Name', type: 'text'},
            {label: 'Company', fieldName:'Company', type: 'text'},
            {label: 'Phone', fieldName:'Phone', type: 'phone'},
            {label: 'Email', fieldName:'Email', type: 'email'},
            {label: 'Status', fieldName:'Status', type: 'Picklist'}
        ]);
        
        var action= component.get('c.fetchLead');
        action.setCallback(this,function(response){
            var state = response.getState();
            if(state === "SUCCESS"){
                component.set('v.data',response.getReturnValue());
            }
        });
        $A.enqueueAction(action);
    },
    updateSelectedText : function(component, event) {
        
        var selectedRows = event.setParam('selectedRows') ;
        component.set('v.selectedRowsCount',selectedRows.length);
        var slectCount =selectedRows.length;
        console.log('slectCount'+slectCount);
        var setRows = [];
        for ( var i = 0; i < selectedRows.length; i++ ) {
            
            setRows.push(selectedRows[i]);
            
        }
        component.set("v.selectedLeads", setRows);
        console.log('selected data:'+setRows);
        if(slectCount>0){
            component.set('v.ButtonShow', true);
        }else{
            component.set('v.ButtonShow', false);
        }
    },
    handleClick : function(component, event, helper){
        debuggers;
        //Created var that store the recordIds of selected rows.
        var records = component.get("v.selectedLeads");
        //Console log.
        console.log(records);
        //Calling helper to perform delete action.
        helper.deltingCheckboxLeads(component, event, records);
    },
 
    // function to handle the Modal Popup window.
    handleConfirmDialog : function(component, event, helper) {
        component.set('v.showDeleteBox', true);
    },
 
    //Function to handle Cancel Popup.
    handleConfirmDialogCancel : function(component, event, helper) {
        console.log('Cancel');
        component.set('v.showDeleteBox', false);
    },
    
})