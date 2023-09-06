({
	next : function(component, event, helper) {
		var currentTab = component.get("v.selTabId");
        if(currentTab =='1'){
            component.set("v.selTabId", '2');
        }else if(currentTab =='2'){
            component.set("v.selTabId", '3');
        }else if(currentTab =='3'){
            component.set("v.selTabId", '4');
        }else if(currentTab =='4'){
            component.set("v.selTabId", '5');
        }else if(currentTab =='5'){
            component.set("v.selTabId", '6');
        }else if(currentTab =='6'){
            component.set("v.selTabId", '1');
        }
	},
    back : function(component, event, helper) {
        var currentTab = component.get("v.selTabId");
        if(currentTab =='6'){
            component.set("v.selTabId", '5');
        }else if(currentTab =='5'){
            component.set("v.selTabId", '4');
        }else if(currentTab =='4'){
            component.set("v.selTabId", '3');
        }else if(currentTab =='3'){
            component.set("v.selTabId", '2');
        }else if(currentTab =='2'){
            component.set("v.selTabId", '1');
        }
    }
})