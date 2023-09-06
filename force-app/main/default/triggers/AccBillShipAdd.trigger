trigger AccBillShipAdd on Account (before insert) {
    for(Account acc:Trigger.new){
        if(acc.BillingStreet != null){
            acc.ShippingStreet = acc.BillingStreet;
            system.debug('BillingStrret:::>'+acc.BillingStreet);
        }
        if(acc.BillingCity != null){
            acc.ShippingCity = acc.BillingCity;
            system.debug('BillingCity:::'+acc.BillingCity);
        }
        if(acc.BillingState != null){
            acc.ShippingState = acc.BillingState;
            system.debug('BillingSate:::'+acc.BillingState);
        }
        if(acc.BillingCountry != null){
            acc.ShippingCountry = acc.BillingCountry;
            system.debug('BillingCountry:::'+acc.BillingCountry);
        }
        if(acc.BillingPostalCode != null){
            acc.ShippingPostalCode = acc.BillingPostalCode;
            system.debug('BillingPostalCode:::'+acc.BillingPostalCode);
        }
    }
}