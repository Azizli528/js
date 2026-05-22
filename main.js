// Tapşırıq 1: let soz = "Proqramlasdirma"
// string - i verilib.Bu sözün içində neçə dənə "r"
// hərfi olduğunu tapıb konsola çap edən dövr qurun.


let soz = "Proqramlasdirma";
let count = 0;


for (let i = 0; i < soz.length; i++) {

    if (soz[i] === 'r') {
        count++;
    }
}

console.log("Sozdeki 'r' herflerinin sayi:", count);
