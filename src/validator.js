function transNumber (numberV){
    if (numberV>9){
      let separateNumberV = numberV.toString().split('');
        //console.log(separateNumberV);
      let newNumberV = separateNumberV.reduce(function (a, b){
        let num1 = parseInt(a);
        let num2 = parseInt(b);
        return num1+num2;
      });
      //console.log(newNumberV);
      return newNumberV;
    } else {
        return numberV;
    }
}
const validator = {
  isValid: function (creditCardNumber){
    let arrayNumberCard = creditCardNumber.split('').reverse();
        //console.log(arrayNumberCard);
    let newArrayNumber = arrayNumberCard.map(function (v, index){
        let newElement;
        if (index % 2){                                                   //consultar
            newElement = transNumber(v*2);
        }
        else {
            newElement = parseInt(v);
        }
        return newElement;
    });
        // console.log(newArrayNumber);
  let addNumbersCard = newArrayNumber.reduce(function(a, b){
        return a+b;
    });
        //console.log(addNumbersCard);
        if (addNumbersCard % 10 == 0){
            //console.log('true');
            return true;
        } else {
            //console.log('false');
            return false;
    }
  }, 
  maskify: function (creditCardNumber){
    let hiddeNumber = [];
      for(let ind = 0; ind < creditCardNumber.length; ind++){
        if(ind < creditCardNumber.length-4){
          hiddeNumber.push('#');
        }else{
          hiddeNumber.push(creditCardNumber[ind]);
        }
      }
      return hiddeNumber.join('');
  },
};
export default validator;