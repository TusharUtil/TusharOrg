public class GetAccountController {
	@AuraEnabled
    public static List<Account> getAccount(){
        return [Select Id,Name,Phone,Description From Account];
    }
}