sap.ui.define([
		'jquery.sap.global',
		'sap/ui/core/mvc/Controller',
		'sap/ui/model/json/JSONModel'
	], function(jQuery, Controller, JSONModel) {
	"use strict";

	var ListController = Controller.extend("sap.m.sample.DisplayListItem.List", {

		onInit: function () {
			// set explored app's demo model on this sample
			var oModel = new JSONModel(jQuery.sap.getModulePath("sap.ui.demo.mock", "/supplier.json"));
			this.getView().setModel(oModel);
		}
	});


	return ListController;

});