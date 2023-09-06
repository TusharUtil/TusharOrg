({
    doInit : function(component,event,helper){
        debugger;
        var action = component.get('c.fetchOppRec');
        action.setParams({ 
            "recordId" : component.get("v.recordId") 
        });
        action.setCallback(this,function(response){
            var state = response.getState();
            if(state ==="SUCCESS"){
                var result=response.getReturnValue();
                console.log('result--',result);
                component.set("v.totalPayment",result.Amount);
                var duePay = (result.Amount) - (result.UpFront_Payment__c);
                component.set("v.duePayment",duePay);
            }
        });
        $A.enqueueAction(action);
    },
    
    handlePayRadio : function(component, event, helper) {
        debugger;
        var paymentType = event.getParam('value');
        //alert(paymentType);
        
        component.set("v.rdPayValue",paymentType);
        
    },
    
    handleRadio : function(component, event, helper) {
        debugger;
        var paymentOption = event.getParam('value');
        //alert(paymentOption);
        component.set("v.rdvalue",paymentOption);
        
    },
    
    handleUploadFinished : function (component, event) {
        debugger;
        var uploadedFiles = event.getParam("files");
        var documentId = uploadedFiles[0].documentId;
        var fileName = uploadedFiles[0].name;
        component.set("v.noFileSelected",fileName);
        var toastEvent = $A.get("e.force:showToast");
        toastEvent.setParams({
            "title": "Success!",
            "message": "File "+fileName+" Uploaded successfully."
        });
        toastEvent.fire();
        
        /*
        $A.get('e.lightning:openFiles').fire({
            recordIds: [documentId]
        });
        */
    },
    
    handleSubmit : function(component,event,helper){
        
        var action = component.get("c.fetchOppRec");
        action.setParams({ 
            
            "recordId" : component.get("v.recordId"),
            "PaymentOptions" : component.get("v.rdvalue"),
            "PaymentType": component.get("v.rdPayValue"),
            "PaymentMode": component.get("v.SelectedPayMode"),
            "UpFrontPayment": component.get("v.upfrontPayment")
        });
        action.setCallback(this, function(response) {
            var state = response.getState();
            if (state === "SUCCESS") {
                var name = response.getReturnValue();
                alert("success");
            }
            else if (state === "ERROR")
            {
                alert("Failed");
            }
        });
        $A.enqueueAction(action); 		
	},
    
    handleClose : function(component, event, helper) {
        $A.get("e.force:closeQuickAction").fire() 
    },
        
    handleUpfront:function(component, event, helper) {
        debugger;
        var total=component.get("v.totalPayment");
        var selectedValue =  event.getSource().get("v.value");
        component.set("v.upfrontPayment",selectedValue);
        console.log('total--',total);
        console.log('selectedValue--',selectedValue);
        
        var DuePayment = total - parseInt(selectedValue);
        console.log('DuePayment--',DuePayment);
        component.set("v.duePayment",DuePayment);   
    },
    
    onChange : function(component, event, helper) {
        debugger;  
        var selectedPaymentMode = component.find('paymentMedPicklist').get('v.value');
        component.set("v.SelectedPayMode",selectedPaymentMode);
    }

})