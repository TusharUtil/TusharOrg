public class AccordionController {
	@AuraEnabled
    public static List<Contact> getContacts(){
        List<Contact> conList = new List<Contact>();
        for(Contact con:[Select Id,Name,Phone,Email,MailingStreet,MailingCity,MailingState,MailingPostalCode,MailingCountry FROM Contact LIMIT 10]){
            conList.add(con);
        }
        return conList;
        
    }
}