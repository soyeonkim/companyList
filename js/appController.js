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
	
   };
   return appController;
	
});