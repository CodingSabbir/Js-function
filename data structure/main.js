let product=[
    {
        productName:'potato',
        productPrice:15,
        productQuntity:5,
    
    },
    {
        productName:'banana',
        productPrice:7,
        productQuntity:44,
    
    },
];

function showProduct(info){
let [product1,product2]=info 
 return`
 ${product1.productName}  ${product1.productPrice}  ${product1.productQuntity}
`
};
let result=showProduct(product);
console.log(result);