//  i divided whole tusk to several parts
//  to check each of them delete '/*' above the part
//  and '*/' below


/*
// this is the first part 
var Animal = function(age, name, sound, region){
    this.age = age,
    this.name = name,
    this.sound = sound,
    this.region = region,
    this.say = function(){
        console.log(this.sound+"!!!!");
    }
}

Animal.prototype.goAway = function(){
    console.log("i`ll miss you :(");
};

var Dog = new Animal(3, "Dog", "bow-wow", "everywhere");
var Cat = new Animal(5, "Cat", "meeeeow", "everywhere");
var Woodpecker = new Animal(0.5, "Woodpecker", "dubstep", "everywhere");

Dog.say();
Cat.say();
Woodpecker.say();

// end of first part
*/



/*
//this is the second

var Animal = {
    constructor: function(age, name, sound,region){
        this.age = age;
        this.name = name;
        this.sound = sound;
        this.region = region;
        return this;
    },
    say:function(){
        console.log(this.sound + '!!!!');
    }
};

Animal.goAway = function(){
        console.log("i`ll miss you :(");
};



var Dog = Object.create(Animal).constructor(12, "Dog", "bow-wow", "everywhere");
var Cat = Object.create(Animal).constructor(5, "Cat", "meeeeow", "everywhere");
var Woodpecker = Object.create(Animal).constructor(0.5, "Woodpecker", "dubstep", "everywhere");

Dog.say();
Cat.say();
Woodpecker.say();

// end of the second
*/


/*
//this is the function that takes object as argument
// to use this function uncomment part 2
var f = function(obj){
    switch(obj.sound) {
        case "bow-wow":
            return "Dog";
        case "meeeeow":
            return "Cat";
        case "dubstep":
            return "Woodpecker";
        default:
            return "i dont know the type";

}};

console.log(f(Dog));

*/


/*
// this function has been modified for call/apply/bind 
var f = function(){
    switch(this.sound) {
        case "bow-wow":
            return "Dog";
        case "meeeeow":
            return "Cat";
        case "dubstep":
            return "Woodpecker";
        default:
            return "i dont know the type";

}};

console.log(f.call(Dog));
console.log(f.apply(Dog));

var bounded = f.bind(Dog);
console.log(bounded());
*/
