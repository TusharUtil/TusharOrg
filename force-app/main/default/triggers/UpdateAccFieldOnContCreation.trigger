trigger UpdateAccFieldOnContCreation on Contact (After insert,before Update) {
    if(trigger.isAfter && trigger.isInsert){
        AccountTriggerHelper.AccountForContact(trigger.new);
    }
}