//8.create an apex trigger on the contact object which is throwing an error whenever user tries to delete the contact without an account

trigger ContactBeforeDelete on Contact (before delete) {
    for(Contact con:Trigger.old){
        if(con.AccountId == null){
            con.addError('You are not allowed to delete Contact without account');
        }
    }
}