public with sharing class FileUploadController {
	@AuraEnabled
    public static Id SaveFile(Id parentId, String fileName, String base64Data, String contentType){
        
        base64Data = EncodingUtil.urlDecode(base64Data, 'UTF-8');
        Attachment attach = new Attachment();
        attach.ParentId = parentId;
        attach.Body = EncodingUtil.base64Decode(base64Data);
        attach.Name = fileName;
        attach.ContentType = contentType;
        insert attach;
        return attach.Id;
    }
}