public class inlineEditCtrl {
	@AuraEnabled
    public static List <Account> getAccount() {
        List <Account> lstOfAccount = [SELECT id, Name, Rating, website FROM Account LIMIT 5];
        return lstOfAccount;
    }
    
    @AuraEnabled
    public static List <Account> saveAccount(List<Account> lstAccount) {
        update lstAccount;
        return lstAccount;
    }
    
    @AuraEnabled
    public static List < String > getselectOptions(sObject objObject, string fld) {       
        List < String > allOpts = new list < String > ();
        Schema.sObjectType objType = objObject.getSObjectType();
        Schema.DescribeSObjectResult objDescribe = objType.getDescribe();
        MAP < String, Schema.SObjectField > fieldMap = objDescribe.fields.getMap();
        List < Schema.PicklistEntry > values = fieldMap.get(fld).getDescribe().getPickListValues();
        for (Schema.PicklistEntry a: values) {
            allOpts.add(a.getValue());
        }
        allOpts.sort();
        return allOpts;
    }    
}