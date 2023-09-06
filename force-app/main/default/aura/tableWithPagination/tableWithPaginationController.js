({
	doInit : function(component, event, helper) {
		helper.doInitHelper(Component,event);
	},
    navigation :function(component, event, helper) {
        var sObjectList = component.get("v.ListOfAllAccounts");
        var end = component.get("v.EndPage");
        var start = component.get("v.StartPage");
        var pageSize = component.get("v.PageSize");
        var whichBtn = event.getSource().get("v.name");
        if(whichBtn == 'next'){
            component.set("v.CurrentPage", component.get("v.CurrentPage") + 1);
            helper.next(component, event, sObjectList, end, start, pageSize);
        }
    },
    getSelectedRecords: function(component, event, helper) {
        var allRecords = component.get("v.ListOfAllAccounts");
        var selectedRecords = [];
        for (var i = 0; i < allRecords.length; i++) {
            if (allRecords[i].isChecked) {
                selectedRecords.push(allRecords[i].objAccount);
            }
        }
        alert(JSON.stringify(selectedRecords));
    },
    checkboxSelect: function(component, event, helper) {
        // on each checkbox selection update the selected record count 
        var selectedRec = event.getSource().get("v.value");
        var getSelectedNumber = component.get("v.SelectedCount");
        if (selectedRec == true) {
            getSelectedNumber++;
        } else {
            getSelectedNumber--;
            component.find("selectAllId").set("v.value", false);
        }
        component.set("v.SelectedCount", getSelectedNumber);
        // if all checkboxes are checked then set header checkbox with true   
        if (getSelectedNumber == component.get("v.TotalRecordsCount")) {
            component.find("selectAllId").set("v.value", true);
        }
    },
    
    selectAllCheckbox: function(component, event, helper) {
        var selectedHeaderCheck = event.getSource().get("v.value");
        var updatedAllRecords = [];
        var updatedPaginationList = [];
        var listOfAllAccounts = component.get("v.ListOfAllAccounts");
        var PaginationList = component.get("v.PaginationList");
        // play a for loop on all records list 
        for (var i = 0; i < listOfAllAccounts.length; i++) {
            // check if header checkbox is 'true' then update all checkbox with true and update selected records count
            // else update all records with false and set selectedCount with 0  
            if (selectedHeaderCheck == true) {
                listOfAllAccounts[i].isChecked = true;
                component.set("v.selectedCount", listOfAllAccounts.length);
            } else {
                listOfAllAccounts[i].isChecked = false;
                component.set("v.selectedCount", 0);
            }
            updatedAllRecords.push(listOfAllAccounts[i]);
        }
        // update the checkbox for 'PaginationList' based on header checbox 
        for (var i = 0; i < PaginationList.length; i++) {
            if (selectedHeaderCheck == true) {
                PaginationList[i].isChecked = true;
            } else {
                PaginationList[i].isChecked = false;
            }
            updatedPaginationList.push(PaginationList[i]);
        }
        component.set("v.ListOfAllAccounts", updatedAllRecords);
        component.set("v.PaginationList", updatedPaginationList);
    },

})