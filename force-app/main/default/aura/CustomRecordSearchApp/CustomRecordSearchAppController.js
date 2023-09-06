({
	myAction : function(component, event, helper) {
		
	},
    checkLength : function(cmp,event, helper) {
        debugger;
        var regpan = /^([a-zA-Z]){5}([0-9]){4}([a-zA-Z]){1}?$/;
        var panNo=cmp.find('txtPan').get("v.value");
        var mobileNo=cmp.find('txtMobile').get("v.value");
        var number = /^[0-9]{10}?$/;
        if(panNo.length == "10" && regpan.test(panNo)){
            cmp.set("v.isSearchDisabled","false");
        }
        else if(mobileNo.length == "10" && number.test(mobileNo)){
            cmp.set("v.isSearchDisabled","false");
        }
            else{
                cmp.set("v.isSearchDisabled","true");   
            }
    },
     SearchClick : function(component, event, helper) {
        debugger; 
        var panNo=component.find('txtPan').get("v.value");
        var mobileNo=component.find('txtMobile').get("v.value");
        component.set('v.panNo',panNo);
        component.set('v.mobileNo',mobileNo);
        console.log(panNo + ' ' + mobileNo);
        component.set('v.isShowdata',true); 
        helper.CustomerSearchHelper(component);        
    },
    Reset: function(component, event, helper){
        component.set("v.dataList",' ');
        component.set('v.isShowdata',false); 
    }
})