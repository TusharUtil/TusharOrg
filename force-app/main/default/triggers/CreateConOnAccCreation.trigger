trigger CreateConOnAccCreation on Account (After insert) {
	if(trigger.isInsert && trigger.isAfter){
        AccountTriggerHelper.createContOnAccCreation(trigger.newMap);
    }
}