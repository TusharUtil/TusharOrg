public class EmailMessagingController {
	@AuraEnabled
    public static string processEmail(String recipient, String subject, String description){
        System.debug('recipient ===> '+recipient);
        System.debug('subject ===> '+subject);
        System.debug('description ===> '+description);
        String sMessage='';
        try{
            Messaging.SingleEmailMessage mail = new Messaging.SingleEmailMessage();
            String[] toAddresses = new String[] {recipient};
            mail.setToAddresses(toAddresses);
            mail.setSubject(subject);
            mail.setHtmlBody(description);
            Messaging.SendEmailResult [] results = Messaging.sendEmail(new Messaging.SingleEmailMessage[] {mail});
            System.debug('sMessage ==> '+sMessage);
            sMessage='SUCCESS';
        }
        catch(Exception ex){
            sMessage=ex.getLineNumber()+'\n'+ex.getMessage()+'\n'+ex.getStackTraceString();
        }
        return sMessage;
    }
}