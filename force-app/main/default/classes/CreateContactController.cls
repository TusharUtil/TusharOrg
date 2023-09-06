public class CreateContactController {
    @AuraEnabled
    Public static Contact createCon(Contact con){
        try{
            insert con;
            return con;
        }catch(Exception e){
            system.debug('error>>>>>>'+e.getMessage());
            // throw new AuraHandledException(e.getMessage());
            return null;
        }
        
    }
    @AuraEnabled
    public static List<Contact> displayCon() {
        return [SELECT Id,FirstName,LastName,Phone,Email,BirthDate from Contact Where CreatedDate =TODAY];
    }
}