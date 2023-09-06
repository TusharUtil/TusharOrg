({
	myAction : function(component, event, helper) {
		
	},
    Reset : function(component,event, helper){
        component.set("v.dataList",'');
        component.set('v.isShowdata',false);
        $A.get('e.force:refreshView').fire();
    },
    SearchClick : function(component, event, helper){
        debugger;
        var panNo = component.find('txtPan').get("v.value");
        var mobileNo = component.find('txtMobile').get("v.value");
        component.set('v.panNo',panNo);
        component.set('v.mobileNo',mobileNo);
        
        console.log(panNo + ' ' + mobileNo);
        
        component.set('v.isShowdata',false);
        helper.CustomerSearchHelper(component);
        
        
    },
    checkLength : function(component, event, helper){
        debugger;
        var regpan = /^([a-zA-Z]){5}([0-9]){4}([a-zA-Z]){1}?$/;
        var panNo = component.find('txtPan').get("v.value");
        var number = /^[0-9]{10}?$/;
        var mobileNo = component.find('txtMobile').get("v.value");
        
        if(panNo.length == "10" && number.test(mobileNo)){
            component.set("v.isSearchDisabled",false);
        }
        else{
            component.set("v.isSearchDisabled",true);
        }
        
    }
})