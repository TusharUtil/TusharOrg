public class DemoLeadController {
    @AuraEnabled
    public static List<User> getUserList(String profileName){
        List<user> ulist = [Select Id,Name,Email,Phone,profile.Name From User where profile.Name =:profileName];
        system.debug('ulist>>>>'+ulist);
        return ulist;
    } 
    
    @AuraEnabled
    public static task createTaskapex( String LeadId,String taskSub,String taskDesc,Date taskdueDate){
        system.debug('LeadId>>>'+LeadId);
        system.debug('taskSub>>>'+taskSub);
        system.debug('taskDesc>>>'+taskDesc);
        system.debug('taskdueDate>>>'+taskdueDate);
        
        Task newtask = new Task();
        newtask.Subject = taskSub;
        newtask.ActivityDate = taskdueDate;
        newtask.Description = taskDesc;
        newtask.WhoId = LeadId;
        newtask.OwnerId = '0052w00000GKbrwAAD';
        
        insert newtask;
        system.debug('newtask::::'+newtask);
        
        return newtask;
        
    }
}