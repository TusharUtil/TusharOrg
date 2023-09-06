trigger CreateAccOnConCreeation on Contact (After insert) {
    if(trigger.isInsert && trigger.isAfter){
        AccountTriggerHelper.createAccOnConCreation(trigger.new);
    }
}