function f1(){
return new Promise((resolve,reject)=>{
    setTimeout(function(){
        console.log("hi!!");
        resolve();
    }, 1000);
});
}
function f2(){
 return new Promise((resolve,reject)=>{
    setTimeout(function(){
        console.log("hello!!");
        resolve();
    }, 2000);
});
}
f1().then(f2)
    .catch((err)=>{
        console.log("Error", err);
    });