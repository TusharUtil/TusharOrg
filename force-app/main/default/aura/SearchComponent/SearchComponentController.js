({   
    doInit : function(compoent,event,helper){
        debugger;
    },
    
    onChange1: function (component, evt, helper) {
         var selectedLimit = component.find('searchField').get('v.value');
         

         component.set('v.searchKeyword', selectedLimit);
        helper.SearchHelper(component, event);
    }
})