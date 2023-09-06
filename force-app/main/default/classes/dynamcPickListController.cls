public class dynamcPickListController {
	@AuraEnabled
    public static void createLead(Lead leadObj){
        try{
            insert leadObj;
        }
        catch(Exception e){
           e.getMessage();
           e.getLineNumber(); 
        }
        
    }
    
    @AuraEnabled
    public static Map<String,String> getIndustryFieldValue(){
        Map<String,String> indOptions = new Map<String,String>();
        Schema.DescribeFieldResult fResult = Lead.Industry.getDescribe();
        List<Schema.PicklistEntry> pValues = fResult.getPicklistValues();
        
        for(Schema.PicklistEntry p:pValues){
             indOptions.put(p.getValue(), p.getLabel());
        }
        return indOptions;
    }
}