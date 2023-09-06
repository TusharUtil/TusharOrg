public class OppMPLController {
	@AuraEnabled
    public static void createOpportunity(Opportunity objopp){
        try{
            insert objopp;
        }catch(Exception e) { //throw exception message
            throw new AuraHandledException(e.getMessage());
        }
    }
    
    @AuraEnabled //get Opportunity PaymentOption Picklist Values
    public static Map<String, String> getPayOptions(){
        Map<String, String> options = new Map<String, String>();
        //get Opportunity PaymentOption Field Describe
        Schema.DescribeFieldResult fieldResult = Opportunity.Payment_Options__c.getDescribe();
        //get Opportunity PaymentOption Picklist Values
        List<Schema.PicklistEntry> pList = fieldResult.getPicklistValues();
        for (Schema.PicklistEntry p: pList) {
            //Put Picklist Value & Label in Map
            options.put(p.getValue(), p.getLabel());
        }
        return options;
    }
    
    @AuraEnabled //get Opportunity PaymentType Picklist Values
    public static Map<String, String> getPayType(){
        Map<String, String> options = new Map<String, String>();
        //get Opportunity PaymentType Field Describe
        Schema.DescribeFieldResult fieldResult = Opportunity.Payment_Type__c.getDescribe();
        //get Opportunity PaymentType Picklist Values
        List<Schema.PicklistEntry> pList = fieldResult.getPicklistValues();
        for (Schema.PicklistEntry p: pList) {
            //Put Picklist Value & Label in Map
            options.put(p.getValue(), p.getLabel());
        }
        return options;
    }
    
    @AuraEnabled //get Opportunity PaymentChannel Picklist Values
    public static Map<String, String> getPayChannel(){
        Map<String, String> options = new Map<String, String>();
        //get Opportunity PaymentChannel Field Describe
        Schema.DescribeFieldResult fieldResult = Opportunity.Payment_Channel__c.getDescribe();
        //get Opportunity PaymentChannel Picklist Values
        List<Schema.PicklistEntry> pList = fieldResult.getPicklistValues();
        for (Schema.PicklistEntry p: pList) {
            //Put Picklist Value & Label in Map
            options.put(p.getValue(), p.getLabel());
        }
        return options;
    }
    
    @AuraEnabled //get Opportunity PaymentMode Picklist Values
    public static Map<String, String> getPayMode(){
        Map<String, String> options = new Map<String, String>();
        //get Opportunity PaymentMode Field Describe
        Schema.DescribeFieldResult fieldResult = Opportunity.Payment_Mode__c.getDescribe();
        //get Opportunity PaymentMode Picklist Values
        List<Schema.PicklistEntry> pList = fieldResult.getPicklistValues();
        for (Schema.PicklistEntry p: pList) {
            //Put Picklist Value & Label in Map
            options.put(p.getValue(), p.getLabel());
        }
        return options;
    }
}