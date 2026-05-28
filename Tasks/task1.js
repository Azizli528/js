// 1. Nested Function – Stipendiya hesabla
// Funksiya yaz:
// tələbənin ortalama balını qəbul etsin
// daxili funksiya faiz hesablasın
// 80+ bal → "Stipendiya qazanır"
// əks halda → "Qazana bilmir"


function stipendiyaHesabla(ortalamaBal) {

    function faizHesabla() {

        if (ortalamaBal >= 80) {
            return "Stipendiya qazanır";
        } else {
            return "Qazana bilmir";
        }
    }

    return faizHesabla();
}
let Bal = +prompt("Bali daxil et:");
alert(stipendiyaHesabla(Bal))