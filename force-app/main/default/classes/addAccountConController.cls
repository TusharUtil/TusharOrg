public class addAccountConController {
	@AuraEnabled
    public static void getAccount(Account accRec,String name,Integer numEmployee,String source,String industry,String rating,String type,String website,String conFirstName,String conLastName,String conPhone,String conEmail){
        Account acc= new Account();
        acc.Name = name;
        acc.NumberOfEmployees = numEmployee;
        acc.AccountSource = source;
        acc.Industry = industry;
        acc.Rating = rating;
        acc.Type = type;
        acc.Website = website;
        insert acc;
        system.debug('account created');
              
        Contact con = new Contact();
        con.AccountId = acc.Id;
        con.FirstName = conFirstName;
        con.LastName = conLastName;
        con.Phone = conPhone;
        con.Email = conEmail;
        
        insert con;
        system.debug('contact related to account created');
    }
}