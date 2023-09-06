public with sharing class AccountListController {
    @AuraEnabled
    public static List<Account> getAccount(){
        try {
           List<Account> accList = [Select Id,Name,Phone,Industry,Description From Account Limit 15];
           return accList; 
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
}