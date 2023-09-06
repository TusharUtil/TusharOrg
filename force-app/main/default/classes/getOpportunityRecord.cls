public class getOpportunityRecord {
	@AuraEnabled
    public static Opportunity fetchOppRec(string recordId,string PaymentOptions,string PaymentType,String PaymentMode,String PaymentChannel,Decimal UpFrontPayment){
        
        try{
            
            Opportunity opp = new Opportunity();
            if(!String.isBlank(recordId)){
                 opp.Id = recordId;
            }
            if(!String.isBlank(PaymentOptions)){
                opp.Payment_Options__c = PaymentOptions;
            }
            if(!String.isBlank(PaymentType)){
                opp.Payment_Type__c = PaymentType;
            }
                
            if(!String.isBlank(PaymentMode)){
                opp.Payment_Mode__c = PaymentMode;
            }
            if(!String.isBlank(PaymentChannel)){
                opp.Payment_Channel__c = PaymentChannel;
            }
            String amount = String.valueOf(UpFrontPayment);
            if(!String.isBlank(amount)){
                opp.UpFront_Payment__c = UpFrontPayment;
            }
            
            update opp;
            System.debug('opp'+opp);
            return opp;
              
        }catch(Exception e){
            System.debug('The Error ::'+e.getMessage() +' AND Error Line No :'+e.getLineNumber());
            
        }
        return null;
    }
}