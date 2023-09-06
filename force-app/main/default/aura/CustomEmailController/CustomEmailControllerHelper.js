({
	SendEmail : function(component) {
        debugger;
         
        var action=component.get("c.processEmail");
        action.setParams({
            email:component.get("v.sendEmail"),
            subject:component.get("v.sendSubject"),
            message:component.get("v.sendMessage")
        })
        action.setCallback(this,function(e){
           
            if(e.getState()==='SUCCESS'){
                var result=e.getReturnValue();
                if(result==='SUCCESS'){
                    alert('Email Send Successfully!');
                }else{
                    alert('ERROR!');
                }
            }
            
        });
        $A.enqueueAction(action);
 },
    
    _e:function(ele){
        debugger;
        return document.getElementById(ele);
    },
})