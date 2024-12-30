sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";

    return Controller.extend("zsimpleform.projectmds1.controller.SimpleFormView1", {
        onInit() {
        },
        onSaveNew(){
            var empid = this.getView().byId("EpIdIp1").getValue();
// Employee ID is initial
            if (empid === "") {
                this.getView().byId("EpIdIp1").setValueState("Error");
                this.getView().byId("EpIdIp1").setValueStateText("Please enter employee Id");
            }
            else{
                this.getView().byId("EpIdIp1").setValueState("None")     
            }
// Employee ID should be 10 characters
          if (empid.length !== 10) {
                this.getView().byId("EpIdIp1").setValueState("Error");
                this.getView().byId("EpIdIp1").setValueStateText("Employee Id should be of 10 characters")
            }
            // else{
            //     this.getView().byId("EpIdIp1").setValueState("None");
            // }

// Employee ID should be Alphabets/Numeric/AlphaNumeric
// /^[a-zA-Z]+$/ = Alphabets
// /^[0-9]+$/ = Numeric
// /^[a-zA-Z0-9]+$/ = Alphanumeric
            var regExp = /^[a-zA-Z0-9]+$/;
            if(!empid.match(regExp)) {
                this.getView().byId("EpIdIp1").setValueState("Error");
                this.getView().byId("EpIdIp1").setValueStateText("Employee ID should be Alphabets");                
            }
            else{
                this.getView().byId("EpIdIp1").setValueState("None");
            }

        }


    });
});