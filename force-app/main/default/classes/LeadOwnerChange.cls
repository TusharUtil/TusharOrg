public class LeadOwnerChange {
    @AuraEnabled
    public static void changeOwner(String leadId, String newOwnerId){
        Lead ldRec = [Select Id,OwnerId From Lead Where Id =: leadId];
        ldRec.OwnerId = newOwnerId;
        update ldRec;
    }
}