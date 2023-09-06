public class deleteAccount {
	@AuraEnabled
    public static List <Account> getAccountDetails(){
        return [Select Id,Name,Phone,Industry From Account];
    }
    
    @AuraEnabled
    public static List<Account> getAccountData(String AccountId){
        Account delAccount = [Select Id,Name From Account Where Id=: AccountId];
        delete delAccount;
        return getAccountDetails();
    }
}