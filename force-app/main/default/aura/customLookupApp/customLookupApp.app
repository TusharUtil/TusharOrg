<aura:application extends="force:slds">
	<!-- Create attribute to store lookup value as a sObject--> 
   <aura:attribute name="selectedLookUpRecord" type="sObject" default="{}"/>

   <c:customLookup objectAPIName="User" IconName="standard:User" selectedRecord="{!v.selectedLookUpRecord}" label="User Name"/>
   <!-- here c: is org. namespace prefix-->
</aura:application>