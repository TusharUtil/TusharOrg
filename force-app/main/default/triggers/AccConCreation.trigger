trigger AccConCreation on Account (after insert) {
    List<Contact> conList = new List<Contact>();
    
    for(Account acc:Trigger.new){
        Contact con = new Contact();
        con.AccountId = acc.Id;
        system.debug('acc.Id;=='+acc.Id);
        con.LastName = acc.Name;
        con.Phone = acc.Phone;
        
        conList.add(con);
        system.debug('con:::'+con);      
    }
    insert conList;
    
    set<Id> accountIds = new set<Id>();
    for(Contact ConRec:conList){
        accountIds.add(ConRec.AccountId);  
    }
    system.debug('accountIds--'+accountIds);
    
    List<Account> acclist=[select id,Client_Contact__c,Name,(select Id,LastName from Contacts) from Account where  Id IN:accountIds];
    
    system.debug('acclist--'+acclist);
    for(Account acc:accList){
        for(Contact Con:acc.Contacts)
            acc.Client_Contact__c=Con.Id;
        system.debug('Client_Contact__c--'+acc.Client_Contact__c);  
    }
    update acclist;
    
    //system.debug('conList::'+conList);
}