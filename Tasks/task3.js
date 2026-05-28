// 3. Endirim sistemi
// Funksiya yaz:
// alış-veriş məbləği qəbul etsin
// 100+ → 10% endirim
// 200+ → 20% endirim
// nəticə: ödəniləcək məbləğ

function sonMeblegHesabla(mebleg) {

    if (mebleg >= 200) {
        mebleg = mebleg * 0.8; 
    } else if (mebleg >= 100) {
        mebleg = mebleg * 0.9; 
    }
    
    return mebleg;
}

let netice = +prompt("Meblegi daxil et:");

alert("Yekun mebleg: " + sonMeblegHesabla(netice) + " AZN");