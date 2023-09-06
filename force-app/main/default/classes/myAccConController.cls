public class myAccConController {
    @AuraEnabled
    public static void createAccContact (Account accObj,String conFirstName,String conLastName,String conPhone,String conEmail){
        
        insert accObj;
        
        Contact con = new Contact();
        con.AccountId = accObj.Id;
        con.FirstName = conFirstName;
        con.LastName = conLastName;
        con.Phone = conPhone;
        con.Email = conEmail;
        
        insert con;
    }
    
    @AuraEnabled 
    public static Map<String, String> getSourceFieldValue(){
        Map<String, String> options = new Map<String, String>();
        
        Schema.DescribeFieldResult sourcefieldResult = Account.AccountSource.getDescribe();
        
        List<Schema.PicklistEntry> asValues = sourcefieldResult.getPicklistValues();
        for (Schema.PicklistEntry p: asValues) {
            
            options.put(p.getValue(), p.getLabel());
        }
        return options;
    }
    
    @AuraEnabled 
    public static Map<String, String> getIndustryFieldValue(){
        Map<String, String> options = new Map<String, String>();
        
        Schema.DescribeFieldResult industryfieldResult = Account.Industry.getDescribe();
        
        List<Schema.PicklistEntry> pValues = industryfieldResult.getPicklistValues();
        for (Schema.PicklistEntry p: pValues) {
            
            options.put(p.getValue(), p.getLabel());
        }
        return options;
    }
    
    @AuraEnabled
    public static Map<String,String> getRating(){
        Map<String, String> options = new Map<String, String>();
        Schema.DescribeFieldResult ratingfieldResult = Account.Rating.getDescribe();
        
        List<Schema.PicklistEntry> pValues = ratingfieldResult.getPicklistValues();
        for (Schema.PicklistEntry p: pValues) {
            
            options.put(p.getValue(), p.getLabel());
        }
        return options;
        
        
    }
    
     @AuraEnabled
    public static Map<String,String> getType(){
        Map<String, String> options = new Map<String, String>();
        Schema.DescribeFieldResult typefieldResult = Account.Type.getDescribe();
        
        List<Schema.PicklistEntry> pValues = typefieldResult.getPicklistValues();
        for (Schema.PicklistEntry p: pValues) {
            
            options.put(p.getValue(), p.getLabel());
        }
        return options;
        
        
    }
}