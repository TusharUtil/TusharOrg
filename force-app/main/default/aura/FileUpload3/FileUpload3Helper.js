({
    MAX_FILE_SIZE: 4500000, //Max file size 4.5 MB
    CHUNK_SIZE: 750000,      //Chunk Max size 750Kb
   
    uploadHelper: function(component, event) {
        debugger;
        component.set("v.showLoadingSpinner", true);
        var fileInput = component.find("fileId").get("v.files");
        // get the first file using array index[0] 
        var file = fileInput[0];
        var self = this;
        if (file.size > self.MAX_FILE_SIZE) {
            component.set("v.showLoadingSpinner", false);
            component.set("v.fileName", 'Alert : File size cannot exceed ' + self.MAX_FILE_SIZE + ' bytes.\n' + ' Selected file size: ' + file.size);
            return;
        }
 
        var objFileReader = new FileReader();
        objFileReader.onload = $A.getCallback(function() {
            var fileContents = objFileReader.result;
            var base64 = 'base64,';
            var dataStart = fileContents.indexOf(base64) + base64.length;
 
            fileContents = fileContents.substring(dataStart);
            self.uploadProcess(component, file, fileContents);
        });
 
        objFileReader.readAsDataURL(file);
    },
 
    uploadProcess: function(component, file, fileContents) {
        debugger;
        var startPosition = 0;
        var endPosition = Math.min(fileContents.length, startPosition + this.CHUNK_SIZE);
         this.uploadInChunk(component, file, fileContents, startPosition, endPosition, '');
    },
 
 
    uploadInChunk: function(component, file, fileContents, startPosition, endPosition, attachId) {
        debugger;
        var getchunk = fileContents.substring(startPosition, endPosition);
        var action = component.get("c.AccountWithAttachment");
        var accname = component.get("v.AccountName");
        console.log("--------" + accname);
        action.setParams({
            AccountName: accname,
            fileName: file.name,
            base64Data: encodeURIComponent(getchunk),
            contentType: file.type,
            fileId: attachId
        });
 
        // set call back
        action.setCallback(this, function(response) {
            // store the response / Attachment Id  
            attachId = response.getReturnValue();
            var state = response.getState();
            if (state === "SUCCESS") {
                alert("Success");      
            } else if (state === "INCOMPLETE") {
                alert("From server: " + response.getReturnValue());
            } else if (state === "ERROR") {
                var errors = response.getError();
                if (errors) {
                    if (errors[0] && errors[0].message) {
                        console.log("Error message: " + errors[0].message);
                    }
                } else {
                    console.log("Unknown error");
                }
            }
        });
       
        $A.enqueueAction(action);
    }
})