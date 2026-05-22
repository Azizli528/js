// Tapşırıq 3: Verilmiş ədədin (məsələn, 17)
//  "sadə ədəd" (yalnız 1-ə və özünə qalıqsız bölünən)
//  olub-olmadığını tapın.

let eded = +prompt("eded daxil et:");
let sadedir = true; 

if (eded <= 1) {
    sadedir = false;
} 
else {
    
    for (let i = 2; i < eded; i++) {
        if (eded % i === 0) {
            sadedir = false; 
            break; 
        }
    }
}


if (sadedir) {
    console.log(eded + " sadə ədəddir.");
} 
else if (eded <= 1){
    console.log("Ne sade ne de murekkeb ededir.")
}
else {
    console.log(eded + " mürəkkəb ədəddir.");
}
