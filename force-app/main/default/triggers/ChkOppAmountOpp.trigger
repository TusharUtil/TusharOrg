//6.When an Opportunity is greater than $20k, mark is_gold to TRUE

trigger ChkOppAmountOpp on Opportunity (after Insert,after update) {
    List<Account> acctoUpdate = new List<Account>();
    Set<Id> ids = new Set<Id>();
    
    for(Opportunity opp:Trigger.new){
        System.debug('opp>>>>'+opp);
        if(opp.Amount >= 20000){
            ids.add(opp.AccountId);																																																																																																																									
        }
    }
    if(!ids.isEmpty()){
        acctoUpdate = [Select id,is_gold__c From Account Where id in : ids];
        System.debug('acctoUpdate>>>>'+acctoUpdate);
        for(Account acc: acctoUpdate){
            acc.is_gold__c = true;
        }
         update acctoUpdate;
        System.debug('Updated Account value>>>>'+acctoUpdate);
    }
   
}