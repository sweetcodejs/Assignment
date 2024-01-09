   // =====database=====
   const database = {
    1234567890: {
        Name: "Md Abdul Haque",
        DOB: 1984
    },
    1234567891: {
        Name: "Md Nafiz Mahmud",
        DOB: 2001
    },
    1234567892: {
        Name: "Md Sakib Ali",
        DOB: 2014
    },
    1234567893: {
        Name: "Md Hasib Hossen",
        DOB: 2018
    },
    1234567894: {
        Name: "Md Iqbal Hafiz",
        DOB: 1983
    },
    1234567895: {
        Name: "Md Zakir Khan",
        DOB: 2012
    },
    1234567896: {
        Name: "Md Asad Molla",
        DOB: 1982
    },
    1234567897: {
        Name: "Md Sifat Ullah",
        DOB: 1984
    },
    1234567898: {
        Name: "Md Naiem Opu",
        DOB: 2020
    },
    1234567899: {
        Name: "Md Shamim Mia",
        DOB: 2014
    }
}
// =====function 1=====


function getArray() {
    const idArray = Object.keys(database);
    const nameArray = Object.entries(database).map((element) => element[1].Name);
    const dateArray = Object.entries(database).map((element) => element[1].DOB);

    var birthReg = document.getElementById('birthReg').value;
    var idIndex = idArray.indexOf(birthReg);

    var element1 = document.getElementById('element1');
    var element2 = document.getElementById('element2');
    var element3 = document.getElementById('element3');

    var a = idArray[idIndex];
    var b = nameArray[idIndex];
    var c = dateArray[idIndex];

    element1.innerText = a;
    element2.innerText = b;
    element3.innerText = c;

}

// =====function 2=====
function calculation() {
    const idArray = Object.keys(database);
    const nameArray = Object.entries(database).map((element) => element[1].Name);
    const dateArray = Object.entries(database).map((element) => element[1].DOB);

    var birthReg = document.getElementById('birthReg').value;
    var idIndex = idArray.indexOf(birthReg);

    var element1 = document.getElementById('element1');
    var element2 = document.getElementById('element2');
    var element3 = document.getElementById('element3');

    var a = idArray[idIndex];
    var b = nameArray[idIndex];
    var c = dateArray[idIndex];

    var d = parseInt(new Date().getFullYear());

    var result = parseInt(d - c);

    var dis = document.getElementById('display-verification');
    if (result <= 0) {
        dis.innerHTML = `Wrong entry&#128545, Year ${b} has not come yet.`;
        dis.style.background = "red";
    } else if (result >= 18) {
        dis.innerHTML = `Welcome&#128526, you are an adult. You are ${result} years old. You are eligible.`;
        dis.style.background = "green";
    } else {
        dis.innerHTML = `Sorry&#128530, you are a child. Your age is only ${result} years. Please try again after ${18 - result} years.`;
        dis.style.background = "yellow";
    }
}

