public class ManualpaymentController5 {

      @AuraEnabled
    public static void SaveFile(Id parentId, String fileName, String base64Data, String contentType){
        try{
            base64Data = EncodingUtil.urlDecode(base64Data, 'UTF-8');
            String attachmentOwner = userInfo.getUserId();  //[Select Invoice__r.Opportunity__r.OwnerId from Receipt__c where id = :parentId].Invoice__r.Opportunity__r.OwnerId;
            Attachment attach = new Attachment();
            attach.parentId = parentId;
            attach.Body = EncodingUtil.base64Decode(base64Data);
            attach.Name = fileName;
            attach.ContentType = contentType;
            
            //Insert ContentVersion
            ContentVersion cVersion = new ContentVersion();
            cVersion.ContentLocation = 'S'; //S-Document is in Salesforce. E-Document is outside of Salesforce. L-Document is on a Social Netork.
            cVersion.PathOnClient = attach.Name;//File name with extention
            cVersion.Origin = 'H';//C-Content Origin. H-Chatter Origin.
            cVersion.OwnerId = attachmentOwner;//Owner of the file
            cVersion.Title = attach.Name;//Name of the file
            cVersion.VersionData = attach.Body;//File content
            Insert cVersion;
            
            //After saved the Content Verison, get the ContentDocumentId
            Id conDocument = [SELECT ContentDocumentId FROM ContentVersion WHERE Id = :cVersion.Id].ContentDocumentId;
            
            //Insert ContentDocumentLink
            ContentDocumentLink cDocLink = new ContentDocumentLink();
            cDocLink.ContentDocumentId = conDocument;//Add ContentDocumentId
            cDocLink.LinkedEntityId = attach.ParentId;//Add attachment parentId
            cDocLink.ShareType = 'V';//V - Viewer permission. C - Collaborator permission. I - Inferred permission.
            cDocLink.Visibility = 'AllUsers';//AllUsers, InternalUsers, SharedUsers
            Insert cDocLink;
            
        } catch (Exception e){
            system.debug('ERROR :: ' + e.getMessage() + 'AT LINE NUMBER :: ' + e.getLineNumber());
           // HandleBusinessException.captureError('ManualpaymentcreateInvoice', 'SaveFile', e, null);
        }
    }
}