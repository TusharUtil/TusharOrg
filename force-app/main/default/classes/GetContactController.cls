public class GetContactController {
    @AuraEnabled
    public static List<Contact> getCont(){
        return [Select Id,Name,Phone,Email From Contact];
    }
}