//Trecia uzduotis
const Asmuo = {
    Vardas: "Jonas",
    Pavarde: "Jonauskas",
    MokymosiVieta: "VN",
    Kursas: "3 kursas",
    Pazymiai1: "6",
    Pazymiai2: "5",
    Pazymiai3: "8",


};

console.log(Asmuo.Vardas);
console.log(Asmuo["Vardas"]);

const AsmuoArray = [
    Object.assign({Kursas: 3}, Asmuo),
    ];
console.log(AsmuoArray[0].Vardas);

function grade(Pazymiai1, Pazymiai2, Pazymiai3) {
    console.log(sum = Pazymiai1 + Pazymiai2 + Pazymiai3)
}
grade('Pazymiai1', 'Pazymiai2', 'Pazymiai3');

if (grade > 20){
    console.log("Studentas islaike");
}
if (grade < 20){
    console.log("Studentas neislaike");
}
