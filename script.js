function Phone(brand, price, color) {
	this.brand = brand;
	this.price = price;
	this.color = color;
    this.resolution = {
        width: 1080,
        height: 1920
    };
}

Phone.prototype.printInfo = function() {
	console.log("The phone brand is " + this.brand + ", color is " + this.color + " and the price is " + this.price + ".");
}

Phone.prototype.printResolution = function() {
    console.log("The resolution phone is: " + this.resolution.width + ' x ' + this.resolution.height + '.');
}

var iPhone6S = new Phone("Apple", 2250, "silver");
iPhone6S.printInfo();
iPhone6S.printResolution();

var samsungS6 = new Phone("Samsung Galaxy S6", 1000, "silver");
samsungS6.printInfo();
samsungS6.printResolution();

var onePlusOne = new Phone("OnePlus One", 1299, "black");
onePlusOne.printInfo();
onePlusOne.printResolution();