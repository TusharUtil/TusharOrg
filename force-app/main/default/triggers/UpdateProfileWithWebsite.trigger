trigger UpdateProfileWithWebsite on Account (after Update) {
    if(Trigger.isAfter && Trigger.isUpdate){
        Set<id> AccountIdSet = new Set<id>();
        for(Account acc:trigger.new){
            if(acc.Website != null){
                AccountIdSet.add(acc.Id);
                System.debug('AccountIdSet>>>>'+AccountIdSet);
            }
        }
        if(AccountIdSet.size()>0){
            List<Contact> conList = [Select Id,FirstName,LastName,AccountId,Profile__c,Account.Website From Contact Where AccountId In: AccountIdSet];
            system.debug('conList>>>>'+conList);
            for(Contact con: conList){
                system.debug('con>>>>'+con);
                if(con.FirstName != null){
                    con.Profile__c = con.account.website + '/' + con.FirstName.substring(0,1) +  con.LastName ;
                }
                update conList;
                system.debug('UPDATED conList>>>>'+conList);
            }
        }
    }
}