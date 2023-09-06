// 9.create an apex trigger on the contact object which is fire whenever a new contact is created or updated 
// and show the default description accordingly.

trigger ContactBeforeInsertUpdate on Contact (before insert,before update) {
    for(Contact con:trigger.New){
        if(trigger.isInsert){
           con.Description = 'Contact Created Successfully by Insert Trigger';
        }
        if(trigger.isUpdate){
            con.Description = 'Contact Updated Succesfully';
        }
    }
}