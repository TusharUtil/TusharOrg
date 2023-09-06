trigger PreventDuplicateCon on Contact (before insert,before update) {
    for(Contact con :trigger.new){
               
        if(con.email == null || con.phone == null){
            con.adderror('Please Enter unique value for email and Phone');
        }
    }

}