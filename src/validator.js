// function transNumber(numberV) {
//   if (numberV > 9) {
//     const suma = numberV - 9;
//     // let separateNumberV = numberV.toString().split('');
//     // console.log(separateNumberV);
//     // let newNumberV = separateNumberV.reduce(function (a, b){
//     //   let num1 = parseInt(a);
//     //   let num2 = parseInt(b);
//     //   return num1+num2;
//     // });
//     return suma;
//   } else {
//     return numberV;
//   }
// }
const validator = {
  isValid: function (creditCardNumber) {
    let arrayNumberCard = creditCardNumber.split('').reverse();
    //console.log(arrayNumberCard);
    let newArrayNumber = arrayNumberCard.map(function (valor, index) {
      let newNumber;
      if (index % 2) {                                          //consultar
        let numberMult = valor * 2
        if (numberMult > 9) {
          newNumber = numberMult - 9;
        } else {
          newNumber = numberMult;
        }
        // newNumber = transNumber(v * 2);
      }
      else {
        newNumber = valor;
      }
      return parseInt(newNumber);
    });
    // console.log(newArrayNumber);
    let addNumbersCard = newArrayNumber.reduce(function (a, b) {
      return a + b;
    });
    //console.log(addNumbersCard);
    if (addNumbersCard % 10 == 0) {
      //console.log('true');
      return true;
    } else {
      //console.log('false');
      return false;
    }
  },
  maskify: function (creditCardNumber) {
    let hiddeNumber = [];
    for (let ind = 0; ind < creditCardNumber.length; ind++) {
      if (ind < creditCardNumber.length - 4) {
        hiddeNumber.push('#');
      } else {
        hiddeNumber.push(creditCardNumber[ind]);
      }
    }
    return hiddeNumber.join('');
  },
};
export default validator;