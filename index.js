let aMoney = 100;
let bMoney = 50;
let cMoney = 20;
let dMoney = 10;
let eMoney = 5;
let fMoney = 2;
let gMoney = 1;
let hMoney = 0.5;
let iMoney = 0.2;
let jMoney = 0.1;
let kMoney = 0.05;
let lMoney = 0.02;
let mMoney = 0.01;
function change(preis, summe) {
    let restbetrag = summe - preis;
    if (restbetrag >= 50 && restbetrag < 100) {
        console.log(restbetrag);
        console.log("1 x " + bMoney + " // 1 fifty euro notes ");
        restbetrag = restbetrag - 50;
    }
    if (restbetrag >= 40 && restbetrag < 50) {
        console.log(restbetrag);
        console.log("2 x " + cMoney + " // 2 twenty euro notes ");
        restbetrag = restbetrag - 40;
    } else if (restbetrag >= 20 && restbetrag < 40) {
        console.log(restbetrag);
        console.log("1 x " + cMoney + " // 1 twenty euro notes ");
        restbetrag = restbetrag - 20;
    }
    if (restbetrag >= 10 && restbetrag < 20) {
        console.log(restbetrag);
        console.log("1 x " + 10 + " // 1 then euro notes ");
        restbetrag = restbetrag - 10;
    } else if (restbetrag >= 5 && restbetrag < 10) {
        console.log(restbetrag);
        console.log("1 x " + 5 + " // 1 five euro notes ");
        restbetrag = restbetrag - 5;
    }
    if (restbetrag >= 4 && restbetrag < 5) {
      console.log(restbetrag);
        console.log("2 x " + 2 + " // 2 two euro coins ");
        restbetrag = restbetrag - 4;
    } else if (restbetrag >= 2 && restbetrag < 4) {
        console.log(restbetrag);
        console.log("1 x " + 2 + " // 1  two euro coins ");
        restbetrag = restbetrag - 2;
    }
    if (restbetrag >= 1 && restbetrag < 2) {
      console.log(restbetrag);
        console.log("1 x " + 1 + " // 1 one euro coins ");
        restbetrag = restbetrag - 2;
    } else if (restbetrag >= 0.5 && restbetrag < 1) {
      console.log(restbetrag);
        console.log("1 x " + 0.5 + " // 1 fity euro coins ");
        restbetrag = restbetrag - 0.5;
    }
    if (restbetrag >= 0.4 && restbetrag < 0.5) {
      console.log(restbetrag);
      console.log("1 x " + 0.2 + " // 1 one euro coins ");
      restbetrag = restbetrag - 0.4;
    } else if (restbetrag >= 0.4 && restbetrag < 0.5) {
      console.log(restbetrag);
      console.log("1 x " + 0.05 + " // 1 fity euro phenig ");
      restbetrag = restbetrag - 0.05;
    }
    if (restbetrag >= 0.4 && restbetrag < 0.5) {
      console.log(restbetrag);
      console.log("1 x " + 0.2 + " // 2 two euro phenig ");
      restbetrag = restbetrag - 0.4;
    } else if (restbetrag >= 0.02 && restbetrag < 0.04) {
      console.log(restbetrag);
      console.log("1 x " + 0.2 + " // 1 two euro coin ");
      restbetrag = restbetrag - 0.2;
    }
    if (restbetrag >= 0.01 && restbetrag < 0.02) {
      console.log(restbetrag);
      console.log("1 x " + 0.01 + " // 1 one euro phenig ");
      restbetrag = restbetrag - 0.01;
    }
    return "Your change is: " + (summe - preis);
}
let kunde1 = change(3.56, 20);
console.log(kunde1 + " €");