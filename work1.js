// 1. Tapşırıq
// Verilən ədədin tərsini tapan funksiya yaz.

function tapin(eded){
    let ters = "";
    
    for(let i = eded.length - 1; i >= 0; i--){
        ters += eded[i]; 
    }
    
    return ters; 
}

console.log(tapin("hello"));