//1. Create Account record whenever new contact is created without an account.
trigger ContactAccountCreation on Contact (After insert) {
    List<Account> accInsert = new List<Account>();
    for(Contact con:Trigger.New){
        if(con.AccountId == null){
            Account acc = new Account();
            acc.Name = con.LastName;
            acc.Phone = con.Phone;
            accInsert.add(acc);
        }
    }
    if(!accInsert.isEmpty()){
        insert accInsert;
    }
}