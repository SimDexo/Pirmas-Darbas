//Trecia uzduotis
const Asmuo = {
    Vardas: "Jonas",
    Pavarde: "Jonauskas",
    MokymosiVieta: "VN",
    Kursas: "3 kursas",
    Pazymiai: "6, 5, 8"
};

console.log(Asmuo.Vardas);
console.log(Asmuo["Vardas"]);

const AsmuoArray = [
    Object.assign({Kursas: 3}, Asmuo),
    ];
console.log(AsmuoArray[0].Vardas);