//Masyvai
const studentas = ["Jonas", "Jonytis", "Modernus Menas", "Meno Unikas", [9, 8, 7, 8]];

console.log(studentas[0]); // Output: "Jonas"

for (const item of studentas) {
    console.log(item);
}

//If maziau daugiau
let a = -5;
let b = 0;
let c = -4;
let d = 4;
if (b < c || d < a) {
    console.log("Sankirtos nera");
} else {
    let x = Math.max(a, c);
    let y = Math.min(b, d);

    console.log("Sankirta yra:", x, "->", y);
}