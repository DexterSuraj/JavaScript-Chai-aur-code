/* Primitive Datatypes
    String,Number,Boolean,Null,Undefined,Symbol,BigInt.
*/
let name="Suraj"

const Num=5.5
const Num2=5

const right=true
const wrong=false

const Pocket=null

const bio=undefined

const Id=Symbol('123')
const NewId=Symbol('123')
console.log(Id===NewId)

const bigNum=789098758795484378903249870459665678n // n is used to tell the compiler that this number is BigInt. 

/*Reference (Non Primitive)
    Array,Objects,Function
*/

const hero=["Shaktiman","Nagraj","Doga"] // [] this represents Array.
const obj={ name:"Suraj_Kumar",
    age:"23",
    Gender:"Male"
 } // {} this represents Object.

 const myFunction=function(){
    console.log("Hello")
 }


 /*

Return type of variables in JavaScript
1) Primitive Datatypes
       Number => number
       String  => string
       Boolean  => boolean
       null  => object
       undefined  =>  undefined
       Symbol  =>  symbol
       BigInt  =>  bigint

2) Non-primitive Datatypes
       Arrays  =>  object
       Function  =>  function
       Object  =>  object

 */