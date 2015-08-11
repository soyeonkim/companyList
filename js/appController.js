define(function (require) {
	var $ = require("jquery");
	var companyCollection 	= require('companyCollection');
	var companyModel = require('companyModel');
		
	var appController = function() {
		this.start = function(){
			this._model 	= new companyModel();
    		this._collection = new companyCollection();
    		this.initListeners();

    		this._model.init();
		};
		


	this.initListeners = function() {
		$('#createCompanyBtn').on('click', $.proxy( this.createCompany, this ));
		$('#bankruptBtn').on('click', $.proxy(this.bankruptCompany, this));	    
		$('#addProductBtn').on('click', $.proxy(this.addProduct,this));
		$('#floatRandomBtn').on('click', $.proxy(this.floatRandom, this));
		$('#encourageMergersBtn').on('click', $.proxy(this.mergeCompanies, this));
 
	};
	this.createCompany = function() {
		console.log("createCompany");
		var name = $('#nameInput').val();
		this._collection.add(name);
		$('#nameInput').val('');
	};

	this.bankruptCompany = function() {
		this._collection.bankrupt();
	};

	this.addProduct = function(){
		this._collection.addProduct();
	};

	this.floatRandom = function(){
		this._collection.makePublic();
	};
	this.mergeCompanies = function() {
		this._collection.merge();

	};
	
/*
	var appController = function() {}

	appController.prototype._companyModel = null;
	appController.prototype._companyCollection = null;
	appController.prototype._companyView = null;

	appController.prototype._fetchTemplate = function () {
    	return $.get("templates/company.html");
    }
	appController.prototype._fetchProducts = function() {
      return $.getJSON("data/products.json");
    };
    appController.prototype._bindModels = function(templates){
    	this._companyModel 		= new companyModel();
    	this._companyCollection = new companyCollection();
    	this._companyView 		= new companyView(this._companyCollection);

    }

    appController.prototype.start = function() {
   		this._bindModels.bind(this));
    }


   Object.seal(appController.prototype);
   return Object.seal(appController);
   */
   };
   return appController;
	
});