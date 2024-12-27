/*global QUnit*/

sap.ui.define([
	"zsimpleform/projectmds1/controller/SimpleFormView1.controller"
], function (Controller) {
	"use strict";

	QUnit.module("SimpleFormView1 Controller");

	QUnit.test("I should test the SimpleFormView1 controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
