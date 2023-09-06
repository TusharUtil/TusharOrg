public class MyAccordionController {
	@AuraEnabled
    public static List<Account> showAccForContact(){
        List<Account> accList= [Select Id,Name,Rating,Phone,(Select Name,Email,Phone From Contacts) FROM Account Order By Name LIMIT 10];
        return accList;
    }
}