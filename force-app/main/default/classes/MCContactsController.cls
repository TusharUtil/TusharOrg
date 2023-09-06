public class MCContactsController {
	@AuraEnabled
    public static List<contact> getContacts(){
        return [Select Id,name,phone,Contact.account.Name, Contact.account.industry,Contact.account.Type,Contact.account.Phone FROM Contact ORDER BY createdDate ASC];
    }
}