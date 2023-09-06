public class addChildOppController {
	@AuraEnabled
    public static void getOpps(){
        List<Opportunity> oppList = new List<Opportunity>();
        for(Opportunity opp:[Select Id,Name,Amount,CloseDate,StageName From Opportunity]){
            oppList.add(opp);
        }
        insert oppList;
    }
    
    @AuraEnabled
    public static void getParentAcc(String ParentId,List<String> lstOppIds){
        list<Opportunity> opps = new list<Opportunity>();
        for(String oppId:lstOppIds){
            Opportunity oty = new Opportunity();
            oty.AccountId = ParentId;
            oty.Id = oppId;
            opps.add(oty);
        }
        update opps;
    }
}