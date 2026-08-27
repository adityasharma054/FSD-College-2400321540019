function sum(a,b){
    return a+b;
}

function SumWithMsg(clbk,msg){
    const result=clbk(20,30);
    const fresult= "Hi " + msg + " your score is " + result;
    console.log(fresult);
}

SumWithMsg(sum,"Mr. Deepak");