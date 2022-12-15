//Pirma uzduotis
let studentas = {
    Vardas: "Tomas",
    Pavarde: "Tomauskas",
    MokymosiVieta: "KTU",
    Kursas: "4 kursas",
    Pazymiai: "7, 4, 5",
}
console.log(studentas.Vardas.Pavarde);
console.log(studentas.MokymosiVieta.Kursas);
console.log(studentas.Pazymiai);

let sentence = Vardas.Pavarde + "mokosi" + MokymosiVieta + Kursas + "jo pazymiai" + Pazymiai + ".";

console.log(sentence);

//Antra uzduotis

let Asmuo = {
    Vardas: "Jonas",
    Pavarde: "Jonauskas",
    MokymosiVieta: "VN",
    Kursas: "3 kursas",
    Pazymiai: "6, 5, 8",
};
console.log(Asmuo.Vardas);
console.log(typeof Asmuo.MokymosiVieta);
console.log(Asmuo.Kursas.Pazymiai);
let str = '{"Vardas":"Jonas", "Vieta":"KTU"} ';
console.log(typeof str);
let nmr = '{Kursas":"Pazymiai"} ';
console.log(typeof nmr);

//Trecia uzduotis - JSFnkcijos2. Duplikavos elementai.
//Note: Gali but netycia "padariau" uzduotis ne is eiles.