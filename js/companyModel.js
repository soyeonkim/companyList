define(function (require) {
	var $ = require('jquery');
	var template =  '<div class="company">' +
                     '    <span class="name"></span>' +
                     '    <ul class="assets"></ul>' +
                     '</div>',

    types ={
    	Private:'private',
    	Bankrupt: 'bankrupt',
    	Public: 'public'
    },
    products;
    //Sample

    products = [
    	              "HR",
                     "Research",
                     "Marketing",
                     "Risk Analysis",
                     "Training",
                     "Sales",
                     "Aquisitions",
                     "Charity work",
                     "Health Care",
                     "Prostitution",
                     "Money Laundering",
                     "Racketeering",
                     "Smuggling",
                     "Human Trafficking"
    ];
    var companyModel = function () { 
    	this.getProduct = function() {
    		//var item=[];
    		$.getJSON("data/products.json",function(data) {
    			$.each(data, function(key,val){
    				products.push(val);
    			});
    		});
    	};
    	this.init = function() {
    	 	this.getProduct();
    	 };

    	this.setCompanyName = function(name){
	    	 this.type = types.Private;
	         this.name = name;
	         this.products = [];
	         this.show();
	         console.log("setCompanyName");
	         return this;
    	};
    	this.show = function() {
    		this.$element = $(template);
	        this.$name = this.$element.find('span');
	        this.$assets = this.$element.find('ul');
	        this.$name.text(this.name);
    	};
    	this.showList= function(list) {
    		return $('<li>'+list+'</li>');

    	}
    	this.getRandomSelection = function(maxValue) {
    		return Math.floor(Math.random()*(maxValue));
	     };
    	
     	this.bankrupt = function() {
     		this.type = types.Bankrupt;
	        this.$element.addClass(types.Bankrupt);
	    };
	 
	    this.public = function() {
	    	this.type = types.Public;
	        this.$element.addClass(types.Public);
	    };
	 
	    this.destroy = function() {
	         this.$element.remove();
	    };
	 
	    this.aquire = function(bigCompany,smallCompany) {
	        var self = this;
	        this.name  = bigCompany.name;
	        this.$name.text(this.name);
	        $.each(smallCompany.products, function( index, product ) {
	            self.$assets.append(self.showList(product));
	        });
	    };
	 
	     this.addProduct = function() {
	         if (!products.length) {
	             return;
	         }
	         var product = products[this.getRandomSelection(products.length)];
	         this.$assets.append(this.showList(product));
	         this.products.push(product);
	     };

    };

    return companyModel;
  

});