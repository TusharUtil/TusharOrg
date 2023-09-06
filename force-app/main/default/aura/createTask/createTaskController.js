({
    createTask : function(component, event, helper) {
        debugger;
        var Subject = component.get("v.taskSubject");
        var Description = component.get("v.taskDescription");
        var DueDate = component.get("v.taskDueDate");
        
        var action= component.get("c.createTaskapex");
        action.setParams({
            "LeadId": component.get("v.recordId"),
            "taskSub":Subject,
            "taskDesc":Description,
            "taskdueDate":DueDate
        });
        
        action.setCallback(this,function(response){
            var state = response.getState();
            if(state==="SUCCESS"){
                //alert('Task Created Successfully');
                
                var toastEvent = $A.get("e.force:showToast");
                toastEvent.setParams({
                    title : 'Success',
                    message: 'Task has been Created',
                    duration:' 5000',
                    key: 'info_alt',
                    type: 'success',
                    mode: 'pester'
                });
                toastEvent.fire();
                
            }else{
                var toastEvent = $A.get("e.force:showToast");
                toastEvent.setParams({
                    title : 'Error',
                    message:'This is an error message',
                    duration:' 5000',
                    key: 'info_alt',
                    type: 'error',
                    mode: 'pester'
                });
                toastEvent.fire();
            }
        });
        $A.enqueueAction(action); 
    }
})