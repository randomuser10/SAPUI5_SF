sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";

    return Controller.extend("zsimpleform.projectmds1.controller.SimpleFormView1", {
        onInit() {
        },
        onSaveNew(){
            var empid = this.getView().byId("EpIdIp1").getValue();

            if (empid ==="") {
                this.getView().byId("EpIdIp1").getValueState("Error");
            } else {
                
            }
        }

    });
});