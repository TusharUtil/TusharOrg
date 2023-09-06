public class addChildController {
	@AuraEnabled
    public static List<Contact> getContacts(){
        List<Contact> totalList = new List<Contact>();
        for(Contact con:[Select Id,Name,Email FROM Contact]){
            totalList.add(con);
        }
        return totalList;
    }
    
    @AuraEnabled
    public static void addParentAccount(String ParentId,List<String> lstofConIds){
        list<Contact> lstContacts = new list<Contact>();
        for(string sContactId: lstofConIds){
            Contact con = new Contact();
            con.Id = sContactId;
            con.AccountId = ParentId;
            lstContacts.add(con);
        }
        update lstContacts;
    }
    
}