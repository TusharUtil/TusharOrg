public class LeadHandler {
	@AuraEnabled
    public static List<Lead> fetchLead(){
        return [SELECT Id, Name,Company,Status,Phone,Email FROM Lead];
    }
    
    @AuraEnabled
    public static void DeleteRecord(List<Lead> DeleteIds){
        List<Lead> delLd = new List<Lead>();
        for(Lead ld: [SELECT Id, Name,Company,Status,Phone,Email FROM Lead WHERE Id IN :DeleteIds]){
            delLd.add(ld);
        }
        if(delLd.size()>0){
            delete delLd;
        }
    }
}