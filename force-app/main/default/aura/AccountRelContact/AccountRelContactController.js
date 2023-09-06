({
	 doInit : function(component, event, helper) {
        
        helper.fetchAccountHelper(component,event,helper)
        
   },
    
    onChange: function (component, evt, helper) {
         var selectedPickListValue = component.find('statusPickList').get('v.value');
        alert('selectedPickListValue==>'+selectedPickListValue)
    },
    
     fetchAcc : function(component, event, helper) {
        
        helper.fetchAccountHelper(component,event,helper)
        
   },
})