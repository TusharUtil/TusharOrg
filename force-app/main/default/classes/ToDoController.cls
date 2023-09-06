public with sharing class ToDoController {
//method to return list of ToDo records during cmp initialization
@AuraEnabled
public static List<ToDo__c> loadData(){
    return [Select ID,Reminder_Date__c,Due_Date__c,Description__c From ToDo__c ORDER BY Due_Date__c ASC NULLS LAST];
}

//method to save record in database and return error msg
@AuraEnabled
public static string saveTodoRecord(ToDo__c toDoRecord){
    String message;
    Database.saveResult sr = Database.insert(toDoRecord,false);
    if(!sr.isSuccess()){
    for(Database.error err:sr.getErrors()){
        message += err.getMessage();
            }
    }
    return message;
}

}