//3.an apex trigger on the contact object and every time a new contact will be created and an account will be selected 
//in the creation of that contact object then on that account object
// a checkbox field ( Contact_Created__c ) will be checked true, which represent that this account has a contact.

trigger AccForContact on Contact (after insert,before update) {
    if(trigger.isAfter && trigger.isInsert){
        Set<id> newId = new Set<Id>();
        for(Contact con:Trigger.new){
            if(con.AccountId != null){
                newId.add(con.AccountId);
            }
        }
          
        List<Account> accList = [Select Id,Name,Contact_Created__c From Account Where Id IN : newId];
        for(Contact con:trigger.new){
            for(Account aa:accList){
                if(aa.Id == con.AccountId){
                   aa.Contact_Created__c = true;
                }
            }
        }
        if(accList.size()>0){
            update accList;
        }
    }
}