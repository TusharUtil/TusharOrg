trigger DeleteCheck on Task (before delete) {
    
    for(task t:trigger.old){
        if(t.Owner.Profile.Name != 'System Administrator'){
            t.addError('Only Sys Admin Can Delete Task');
        }
    }
}