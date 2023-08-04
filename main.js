// function statement
function myfunc(){
    console.log('i love my bangladesh');
};
myfunc();

// function exprention
let myFunc=function(){
    console.log('i love my bangladesh');
};
myFunc();

// function parametars
function mySum(a,b){
  let  sum=a+b
    return sum;
};
console.log(mySum(5,3));
console.log(mySum(5,55));
console.log(mySum(58,3));

// function parametars mul
 let myMul= function (a,b){
    let  mul=a*b
    return mul;
  };
  console.log(myMul(5,3));
  console.log(myMul(5,55));
  console.log(myMul(58,3));

// function er maje number bulien object sob kicu bebohar kora jabe

// function name(name,age){
//  let info=name+age;
//  return info;
// };
// console.log(name('sabbir ',20));


// let myname=function(name,age){
//     console.log('my name is :'+name+' and i am '+age+' year old');
// };
// myname('sabbir',20);


// object function bebohar korar niyom console a dekle sudu vitorei value dekha jabe 
let object={
    product:'mango',
    price:60,
    contaty:3,
};

function showproduct(objProduct){
console.log(objProduct)
};
showproduct(object);


// object function bebohar korar niyom return korle value a bahire dekha jabe and seita sob jaigai use kora jabe
// let myProduct={
//     productName:'banana',
//     productPrice:20,
//     productQuntity:5,
// };
// let myProduct1={
//     productName:'mango',
//     productPrice:50,
//     productQuntity:10,
// };
// let myProduct2={
//     productName:'orange',
//     productPrice:140,
//     productQuntity:65,
// };

// function productShow(product,productName){
// return`
// ${productName}
// productName:${product.productName}
// productPrice:${product.productPrice}
// prodctQuntity:${product.productQuntity}`
// };
// let productOne=productShow(myProduct,'product-1');
// console.log(productOne);

// let productTwo=productShow(myProduct1,'product-2');
// console.log(productTwo);

// let productThree=productShow(myProduct2,'product-3');
// console.log(productThree);


// object destucturing 
let bioData={
    id:100,
    name:'sabbir',
    age:20,
};

bioData.city='bogura'
function info(myData){
   let {id,name,age,city}=myData; 
 return`
 My id:${id} My name:${name} My age:${age} city:${city}` 
}
let fullData=info(bioData);
console.log(fullData);


// array destucturing 
// let product=['banana',20,3,true];
// let [productName,productPrice,prodctQuntity,productIsAvailable]=product;
// console.log(productName,productPrice,prodctQuntity,productIsAvailable);


let product=['banana',20,3,true];
function productInfo(info){
    let [productName,productPrice,prodctQuntity,productIsAvailable]=info
return`
ProductName-${productName} productPrice-${productPrice} prodctQuntity-${prodctQuntity} productIsAvailable-${productIsAvailable}`
}
let totall=productInfo(product);
console.log(totall)


// Function vs Method

let address={
    name:'sabbir',
    age:22,
    thana:'bogura',
    postCode:5800,
    information:function(){
    return`
    Name:${this.name} age:${this.age} thana:${this.thana} postCode:${this.postCode}`
    }
};
console.log(address.information());