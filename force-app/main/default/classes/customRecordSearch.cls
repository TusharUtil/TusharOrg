public class customRecordSearch {
    @AuraEnabled(cacheable=true)
    Public static List<Account> getAccountRecord(String pan_no,string mobile_no){
        
        if(String.isNotBlank(pan_no) && !String.isBlank(mobile_no)){
            system.debug('pan_no'+pan_no);
          List<Account>  recordlst = [Select Id,Name,Rating,Pan_Number__c,Mobile_Number__c FROM Account WHERE Pan_Number__c =:pan_no AND Mobile_Number__c =:mobile_no LIMIT 1];
            if(recordlst !=null){
                System.debug('recordlst ===> '+recordlst);
                return recordlst;
            }   
        }
        return null;
    }   
}