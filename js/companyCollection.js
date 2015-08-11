define(function (require) {
	var $ = require('jquery');
	var companyModel = require('companyModel');
	var container = $('#world');
	var Privates =[],
		Publics =[];

	var companyCollection = function(){
		

		this.add = function(name) {
			console.log("add companyModel");
			if (!name.length) {
	         	console.log('No name was provided!');
		        return;
         	}
         this.company = new companyModel();
         var newName = this.company.setCompanyName(name);
         Privates.push(newName);
         container.append(this.company.$element);
		};
		this.bankrupt = function() {
	        if (!Privates.length) {
	            console.log("No private company");
	            return;
	        }
 
         var randomIndex = this.company.getRandomSelection(Privates.length);
            this.company = Privates[randomIndex];
         	this.company.bankrupt();
         	Privates.splice(randomIndex, 1);
     	};
     	this.addProduct = function() {
     		if(!Privates.length) {
     			console.log("No private company");
     			return;
     		}
     		var randomIndex = this.company.getRandomSelection(Privates.length);
     		this.company = Privates[randomIndex];
     		this.company.addProduct();


     	};
     	this.makePublic = function() {
     		if(!Privates.length) {
     			console.log("No private company");
     			return;
     		}
     		var randomIndex = this.company.getRandomSelection(Privates.length);
     		company = Privates[randomIndex];
     		company.public();
     		Privates.splice(randomIndex, 1);
     		Publics.push(company);  
     		console.log("makepublic");

     	};
     	this.removeFromPublics= function(smallCompany) {
         $.each(Publics, function( index, product ) {
             if (product === smallCompany) {
                 Publics.splice(index, 1);
             }
         });
     	} ;
     	this.merge = function () {
     		if(Publics.length < 2 ){
     			console.log("More than two public companies are needed");
     			return;
     		}
     		var firstPublic = Publics[this.company.getRandomSelection(Publics.length)];
     		var secondPublic;
 
	        do {
	             secondPublic = Publics[this.company.getRandomSelection(Publics.length)];
	        } while(firstPublic === secondPublic);

 
	         var bigCompany = firstPublic.products.length > secondPublic.products.length ? firstPublic : secondPublic;
	         var smallCompany = bigCompany === firstPublic ? secondPublic : firstPublic;
	 
	         bigCompany.aquire(bigCompany,smallCompany);
	 
	         this.removeFromPublics(smallCompany);
	         
	         smallCompany.destroy();
     		};

    };
 
	return companyCollection;

});