public class AccountTriggerHelper {
    
    
    ////////////////////////////////// 1.Create New Account When Contact is Created./////////////////////////////////////////////////////////////////////
    
    public static void createAccOnConCreation(List<Contact> conList){
        List<Account> accToInsert = new List<Account>();
        for(Contact con:conList){
            if(con.AccountId == NULL){
                Account acc = new Account();
                acc.Name = con.LastName;
                acc.Phone = con.Phone;
                // acc.Id = con.AccountId;
                accToInsert.add(acc);
                system.debug('accToInsert>>>>>'+accToInsert);
            }
        }
        if(!accToInsert.isEmpty()){
            insert accToInsert;
        }
    }
    
    
    /////////////////////////////////2.When a new Account is created, create a new Contact that has the following data points./////////////////////////////   
    
    public static void createContOnAccCreation(Map<id,Account> newMapAcc){
        List<Account> acc = [Select Id,Only_Default_Contact__c From Account Where Id in: newMapAcc.keySet()];
        List<Contact> conList = new List<Contact>();
        for(Account a:acc){
            System.debug('a>>>>>>>>>'+a);
            Contact con = new Contact();
            con.AccountId = a.Id;
            con.FirstName = 'Info';
            con.LastName = 'Default';
            con.Email = 'info@websitedomain.tld';
            conList.add(con);
            System.debug('conList>>>>>>>>>'+conList);
            
            if(conList.size()>0){
                a.Only_Default_Contact__c = true;
            }
        }
        update acc;
        if(!conList.isEmpty()){
            insert conList;
        }
    }
    
    
    ///////////////////////////////// 3.Create Trigger on Contact when Contact is created mapped with account then Account field Contact_Created__c must be true ////////////////////////////
    
    public static void AccountForContact(List<Contact> conList){
        set<Id> idSet = new Set<id>();
        for(Contact con:conList){
            if(con.AccountId != null){
                idSet.add(con.AccountId);
            }
        }  
        List<Account> accList = [Select Id,Name,Contact_Created__c From Account Where Id in: idSet];
        for(Contact con:conList){
            for(Account acc: accList){
                if(acc.id == con.AccountId){
                    acc.Contact_Created__c = true;
                }               
            }
        }
        if(accList.size()>0){
            update accList;
        }
    }  
    
    ///////////////////////////////// 4./////////////////////////////
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    ///////////////////////////////// 5.When an Account is updated and the Website is filled in, update all the Profile field on all Contacts/////////////////////////////    
    
    public static void updateConProfileWithAccWebsite(List<Account> accList){
        Set<Id> accIdSet = new Set<Id>();
        for(Account acc:accList){
            if(acc.Website != null){
                accIdSet.add(acc.Id);
            }
        }
        if(accIdSet.size()>0){
            List<Contact> conList = [Select Id,FirstName,LastName,AccountId,Account.Website,Profile__c From Contact Where AccountId In: accIdSet];
            for(Contact con:conList){
                if(con.FirstName != null){
                    con.Profile__c = con.account.website +'/'+ con.FirstName.substring(0,3) + con.LastName;
                }
            }
            update conList;
        }
    }
    
    ///////////////////////////////// 6.When an Opportunity Amount is greater than $20k, mark is_gold field on Account to TRUE/////////////////////////////
    
    public static void updateAccWithOppAmt(List<Opportunity> oppList){
        
        List<Account> accToUpdate = new List<Account>();
        Set<Id> idSet = new Set<Id>();
        
        for(Opportunity opp:oppList){
            if(opp.Amount >= 20000){
                idSet.add(opp.AccountId);
            }
        }
        if(!idSet.isEmpty()){
            accToUpdate = [select Id,is_gold__c From Account Where Id In: idSet];
            for(Account acc:accToUpdate){
                acc.is_gold__c = true;
            }
            update acctoUpdate;
            System.debug('Updated Account value>>>>'+acctoUpdate);
        }
        
    }
    
    ///////////////////////////////// 7./////////////////////////////
    
    
    
    
    
    
}