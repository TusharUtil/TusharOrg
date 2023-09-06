trigger DuplicateLead on Lead (before insert) {
    if(trigger.isbefore && trigger.isInsert){
        List<Lead> ldInsert = new List<Lead>();
        
        for(Lead ld:Trigger.new){
            Lead dupLd = new Lead();
            dupld.FirstName = ld.FirstName;
            dupld.LastName = ld.LastName;
            dupld.City = ld.City;
            dupld.Country = ld.Country;
            system.debug('Lead::::'+ld.FirstName);
            ldInsert.add(dupld);
        }
    }
}