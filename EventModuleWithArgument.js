
const EVENTEMITTER = require('events');

const eventEmitter = new EVENTEMITTER();

eventEmitter.on('Tutorials2',(num1 , num2)=>{

    console.log('Sum is : ' + (num1 + num2));


});

eventEmitter.emit('Tutorials2' , 3 , 10);


class Extender extends EVENTEMITTER{
 
    constructor(name){
        super();
        this._name = name;
    }

    get Name(){

        return this._name;
    }

}

let toGetName = new Extender('Vishal');
toGetName.on('WeInheritedTheEventResourceClass',()=>{
    console.log("Name is :: " +toGetName.Name);
});

toGetName.emit('WeInheritedTheEventResourceClass');

