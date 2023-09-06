public class dataTableController {
	@AuraEnabled
    public static List<accountListWrapper> fetchAccountWrapper(){
        List<accountListWrapper> lstaccWrap = new list<accountListWrapper>();
        for(Account acc: [Select id,Name,Type,Phone From Account]){
            lstaccWrap.add(new accountListWrapper(false,acc));
        }
        return lstaccWrap;
    }
    /* wrapper class */  
    public class accountListWrapper {
        @AuraEnabled public boolean isChecked {get;set;}
        @AuraEnabled public  account objAccount{get;set;}
        public accountListWrapper(boolean isChecked, account objAccount){
            this.isChecked = isChecked;
            this.objAccount = objAccount;
        }
    }
}