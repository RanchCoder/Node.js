const sum = (num1 , num2) => num1 + num2;
const PI = 3.14;
class ObjectCreate{

    constructor(){
        console.log('Object created');
    }
}
//module.exports.sum = sum;
//module.exports.OjectCreate = ObjectCreate;
//module.exports.PI = PI;

//now we will export in one single line

module.exports = {sum : sum , PI : PI , ObjectCreate: ObjectCreate}
