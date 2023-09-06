public class AccountController {
	@AuraEnabled
    public static List<Account> fetchAccount(){
        return [Select Id,Name,BillingState,Website,Phone From Account];
    }
}