public class GetLeadController {
	@AuraEnabled
    public static List<Lead> getLead(){
        return [Select Id,Name,Phone,Company,Status,Rating From Lead];
    }
}