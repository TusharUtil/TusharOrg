({
    doInit : function(component,event,helper){
        var action = component.get("c.fetchEmailMessageRecords");
        action.setCallback(this,function(a){
            component.set("v.recordList",a.getReturnValue())
        });
        $A.enqueueAction(action);
    },
    
	showSpinner : function(component, event, helper) {
      //  debugger;
		component.set("v.Spinner",true);
	},
    
    hideSpinner : function(component, event, helper) {
       // debugger;
		component.set("v.Spinner",false);
	},
    
    handleInbox : function(component, event, helper) {
    	component.set("v.InboxPage",true);
        component.set("v.SentMailPage",false);
    },
    
    handleSentMail : function(component,event,helper){
        component.set("v.SentMailPage",true);
        component.set("v.InboxDetailsPage",false);
    },
    
    Send : function(component, event, helper) {
        debugger;
		var email = helper._e('txtEmail').value;
        component.set("v.sendEmail",email);
        var subject = helper._e('txtSubject').value;
         component.set("v.sendSubject",subject);
        var Message= component.get("v.myMessage");
         component.set("v.sendMessage",Message);
        var regExpEmailformat = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	
        if(email==''){
            alert('Email-Id is required');
        }else if(subject==''){
            alert('Subject is required');
        }else if(Message==''){
            alert('Message is required');
        }
         else{
            if(!email.match(regExpEmailformat)){
                alert("Invalid Email Id");
            }
            else{
                helper.SendEmail(component);
            }
        }
    }, 
    
    getdetails : function(component,event,helper){
        debugger;
        component.set("v.InboxDetailsPage",true);
        component.set("v.SentMailPage",false);
        var selectedId = event.target.dataset.id;  
     	//alert(selectedId);
        
        var recDetails = component.get("v.recordList");
        
        var getRecord = recDetails.find(record => record.Id === selectedId);
        console.log('data:::::'+JSON.stringify(getRecord));
        component.set("v.InboxDetailsPage",true);
        
        
        var getAllDetails = getRecord.FromName+'\n'+getRecord.FromAddress+'\n'+getRecord.Subject+'\n\n\n'+getRecord.TextBody;
        component.set("v.AllDetails",getAllDetails);
        
             var str= getRecord.FromName;
        component.set("v.FormName",str);
        
        component.set("v.FormAddress",getRecord.FromAddress);
        component.set("v.Subject",getRecord.Subject);
        component.set("v.TextBody",getRecord.TextBody);
    }
})