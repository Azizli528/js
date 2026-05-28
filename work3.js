// // 3. Tapşırıq
// // 1-dən verilən ədədə qədər olan cüt ədədlərin cəmini hesablayan funksiya yaz.

function hesabla(eded){
    let sum = 0
    for (let i = 1 ; i <= eded ; i++){
        if(i % 2 === 0){
            sum += i
        }
    }
    return sum
}
console.log(hesabla(10))