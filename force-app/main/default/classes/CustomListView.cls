public class CustomListView {
	 @AuraEnabled
        public static List <Account> fetchAccounts(String accountType) { //Pass accountType from lightning 
            List<Account> accList = new List<Account>();
            //query based on passed value  
            if(String.isNotBlank(accountType)){
            accList = [SELECT Id, Name, BillingState,Website, Phone, Industry, Type from Account WHERE Industry =:accountType];
           }
           else{
                 //add limit according to your requirement or implement pagination
                 accList = [SELECT Id, Name, BillingState,Website, Phone, Industry, Type from Account LIMIT 5000];
           }
            //return list of accounts
            return accList;
        }
}