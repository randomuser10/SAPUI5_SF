sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";

    return Controller.extend("zsimpleform.projectmds1.controller.SimpleFormView1", {
        onInit() {
        },
        onSaveNew(){
            var empid = this.getView().byId("EpIdIp1").getValue();

            if (empid === "") {
                this.getView().byId("EpIdIp1").setValueState("Error");
                this.getView().byId("EpIdIp1").setValueStateText("Please enter employee Id");
            }
            else{
                this.getView().byId("EpIdIp1").setValueState("None")
                
            }
        }

    });
});