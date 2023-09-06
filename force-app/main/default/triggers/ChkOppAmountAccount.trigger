//6.When an Opportunity is greater than $20k, mark is_gold to TRUE.


trigger ChkOppAmountAccount on Account (After update) {
/*  Integer amount = 20000;
    For(Account acc: trigger.new){
        system.debug('acc>>>>'+acc);
        List<opportunity> oppList = [Select Id,Name,Amount,AccountId From Opportunity Where AccountId =: acc.Id AND Amount >= 20000];
        if(oppList.size()>0){
            system.debug('oppList>>>>'+oppList.size());
            acc.is_gold__c = true;
        }else{
            acc.is_gold__c = false;
        }
        update acc;
    }  */
}