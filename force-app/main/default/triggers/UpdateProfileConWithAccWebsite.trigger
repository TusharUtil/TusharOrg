trigger UpdateProfileConWithAccWebsite on Account (After update) {
    if(trigger.isAfter && trigger.isUpdate){
        AccountTriggerHelper.updateConProfileWithAccWebsite(trigger.new);
    }
}