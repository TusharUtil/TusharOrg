//2. When a new Account is created, create a new Contact that has the following data points:

//  First Name = “Info”
//  Last Name = “Default”
//  Email = “info@websitedomain.tld”
//  Only_Default_Contact = TRUE
//  When the Account has more than 1 Contact, update Only_Default_Contact to FALSE.


trigger AccountContactCreation on Account (after insert) {
    Account acc = [Select Id,Only_Default_Contact__c From Account where Id IN : trigger.NEW];
    
    Contact con = new Contact();
    con.AccountId = acc.Id;
    con.FirstName = 'Info101';
    con.LastName = 'Default';
    con.Email = 'info@websitedomain.tld';
    insert con;
    
    
    acc.Only_Default_Contact__c = true;
    
    update acc;
}