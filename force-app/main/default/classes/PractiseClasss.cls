public class PractiseClasss {

    Public static void PractiseMethod(String accid){
        Account acc = new Account();
        acc = [Select Id,Name From Account Where Id ='0012w00001SvthlAAB'];
        
        Contact cc = new Contact();
        cc.FirstName = 'Himanshu';
        cc.Lastname = 'tripathi';
        cc.Phone = '7845120369';
        cc.AccountId = acc.Id;
        
        insert cc;
    }
}