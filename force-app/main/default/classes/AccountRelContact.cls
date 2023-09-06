public class AccountRelContact {
	/* @AuraEnabled(cacheable=true)
    public static List<Account> showAccountsForAccordion (String searchKey ,integer lmt){
        String query= 'SELECT Id, Name,(select id,Name,AccountId from contacts Where AccountId != Null),'+
                '(select id,Name,AccountId from opportunities Where AccountId != Null) FROM Account';
         if ( searchKey != Null ) {
            String key = '%' + searchKey + '%';
            query += ' WHERE Name LIKE :key limit '+ lmt;
        }system.debug(Database.query( query ));
         return Database.query( query );
        
    }  */
    
    @AuraEnabled(cacheable=true)
     public static List<Account> fetchAccounts(){
            List<Account> accList = [Select Id,Name,Industry,BillingState,Website,Phone,Type from Account];
            return accList;
        }
    
}