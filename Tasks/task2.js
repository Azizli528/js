// 2. Maaşdan vergi çıxma
// Funksiya yaz:
// maaş qəbul etsin
// 13% vergi çıx
// net maaşı qaytar

function netMaasHesabla(umumiMaas) {
    let vergi = umumiMaas * 0.13;
    
    let elimizeGelenMaas = umumiMaas - vergi;
    
    return elimizeGelenMaas;
}

let maas = +prompt("Maasi daxil et:");

alert("Qalan maas: " + netMaasHesabla(maas) + " AZN");