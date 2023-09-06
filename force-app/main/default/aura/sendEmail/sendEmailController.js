({
	showSpinner : function(component, event, helper) {
      //  debugger;
		component.set("v.Spinner",true);
	},
    
    hideSpinner : function(component, event, helper) {
       // debugger;
		component.set("v.Spinner",false);
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
})