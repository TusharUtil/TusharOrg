public with Sharing class accountVFController {
    public List<Account> records{get;set;}
    public accountVFController(){
        records = [Select Id,Name,Phone,Industry,Website,Description FROM Account LIMIT 30];
    }
}