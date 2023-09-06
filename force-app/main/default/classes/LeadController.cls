//Program For Dynamic PickLists From Lead Object

public class LeadController {
    
    public List<string> industry=new List<string>();
    @AuraEnabled
    public static void createLead(Lead objLead){
        try{
            insert objLead;
        }catch(Exception ex){
            throw new AuraHandledException(ex.getMessage());
        }      
    }
    
    @AuraEnabled
    public static List<String> getPickListValues(String objectName,String fieldName){
        List<String> pickListValuesList= new List<String>();
        
        Schema.SObjectType sob = Schema.getGlobalDescribe().get(objectName) ;
        Schema.DescribeSObjectResult dr = sob.getDescribe() ;
        Map<String,Schema.SObjectField> fields = dr.fields.getMap() ;
        Schema.DescribeFieldResult fieldResult = fields.get(fieldName).getDescribe();
        List<Schema.PicklistEntry> ple = fieldResult.getPicklistValues();
        
        //System.debug(ple[0].getvalue());
        for (Schema.PicklistEntry a : ple){
         pickListValuesList.add(String.ValueOf(a.getLabel()).trim());      
            
        }
		        
        system.debug('pickListValuesList>>>>'+pickListValuesList);
        return pickListValuesList;
    }
    
    
    public class wrapLead{
        public List<string> industry;
        public List<string> rating;
        public List<string> salutation;
        public List<string> leadSource;
        public List<string> status;
        
        public wrapLead(string industry,string rating,string salutation,string leadSource,string status){
            this.industry.add(industry);
            this.rating.add(rating);
            this.salutation.add(salutation);
            this.leadSource.add(leadSource);
            this.status.add(status);
        }
    }
}