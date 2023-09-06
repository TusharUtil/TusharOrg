//10. Send a Email to each new Contact.

trigger ContactEmailTrigger on Contact (before insert) {
    List<Messaging.SingleEmailMessage> Email = new List<Messaging.SingleEmailMessage>();
    
    for(Contact con:Trigger.new){
        if(con.Email != null && con.FirstName != null){
            Messaging.SingleEmailMessage mail = new Messaging.SingleEmailMessage();
            
            List<string> sendTo = new List<string>();
            sendTo.add(con.Email);
            mail.setToAddresses(sendTo);
            
            mail.setSubject('Your Contact Details are Added');
            String body = 'Dear ' + con.FirstName + ', '; 
            body += 'According to the ContactEmailTrigger trigger';
            body += 'your contact details were added successful';
            mail.setHtmlBody(body);
            Email.add(mail);
        }
    }
    Messaging.sendEmail(Email);
}