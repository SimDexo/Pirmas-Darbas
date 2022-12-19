//Pirma uzduotis.
document.getElementById('myButton').addEventListener('click', function() {
    document.getElementById('textField').value = 'Labas, pasauli!';
});

//Antra uzduotis.

document.getElementById('Mygtukas').addEventListener('click', function() {

    let newDiv = document.createElement('div');

    let newInput = document.createElement('input');
    newInput.type = 'text';
    newInput.placeholder = 'Type here';

    let newButton = document.createElement('button');
    newButton.innerHTML = 'Click me!';

    newDiv.appendChild(newInput);
    newDiv.appendChild(newButton);

    document.body.appendChild(newDiv);
});

//Trecia uzduotis.

document.getElementById('addButton').addEventListener('click', function() {

    let name = document.getElementById('nameInput').value;
    let age = document.getElementById('ageInput').value;
    let city = document.getElementById('cityInput').value;

    let table = document.getElementById('myTable');
    let row = table.insertRow(-1);
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);

    cell1.innerHTML = name;
    cell2.innerHTML = age;
    cell3.innerHTML = city;
});