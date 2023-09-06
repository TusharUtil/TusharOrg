public class SendEmailHandler {
    
    @AuraEnabled
    public static list<EmailMessage> fetchEmailMessageRecords(){
        return [SELECT Id, ActivityId, FromAddress, ToAddress, FromName, IsClientManaged, MessageIdentifier, Subject, TextBody FROM EmailMessage];
    }
    
    
    @AuraEnabled
    public static string processEmail(String email,String subject,String message){
        System.debug('email ===> '+email);
        System.debug('subject ===> '+subject);
        System.debug('message ===> '+message);
        String sMessage='';
        try{
            Messaging.SingleEmailMessage mail = new Messaging.SingleEmailMessage();
            String[] toAddresses = new String[] {email};
            mail.setToAddresses(toAddresses);
            mail.setSubject(subject);
            mail.setHtmlBody(message);
            Messaging.SendEmailResult [] results = Messaging.sendEmail(new Messaging.SingleEmailMessage[] {mail});
            
            sMessage='SUCCESS';
            System.debug('sMessage ==> '+sMessage);
        }
        catch(Exception ex){
            sMessage=ex.getLineNumber()+'\n'+ex.getMessage()+'\n'+ex.getStackTraceString();
        }
        return sMessage;
    }
}