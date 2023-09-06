public class OpportunityController {
	@AuraEnabled
    public static List<Opportunity> fetchOpportunity(){
        List<Opportunity> oppList = [Select Id,Name,Amount,StageName,CloseDate,Probability From Opportunity];
        return oppList;
    }
}