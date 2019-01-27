document.getElementById('btnCalculate').addEventListener('click', printResults);

// Age calculator
function calcAge() {
  let birthDay = new Date(document.getElementById('inputBirthDay').value);
  let testDay = new Date(document.getElementById('inputTestDay').value);

  let timeDiff = Math.abs(testDay.getTime() - birthDay.getTime());

  let age1 = Math.ceil(timeDiff / (1000 * 3600 * 24)) / 365;
  let age2 = age1.toFixed();

  return age2;
}

function printResults(e){
  let result = calc();

  var name = document.getElementById('inputName').value;
  document.getElementById('resName').innerHTML = name;

  let testDay = document.getElementById('inputTestDay').value;
  document.getElementById('resTestDay').innerHTML = testDay;

  let birthDay = document.getElementById('inputBirthDay').value;
  document.getElementById('resBirthDay').innerHTML = birthDay;

  let actualWeight = document.getElementById('inputActualWeight').value;
  document.getElementById('resActualWeight').innerHTML = actualWeight;

  let desiredWeight = document.getElementById('inputDesiredWeight').value;
  document.getElementById('resDesiredWeight').innerHTML = desiredWeight + 'kg';

  if (radioMale.checked === true) {
    document.getElementById('resGender').innerHTML = 'Male';
  } else {
    document.getElementById('resGender').innerHTML = 'Female';
  }

  document.getElementById('resBodyFat').innerHTML = result.toFixed(1) + '%';

  e.preventDefault();
  
}

function calc() {
  let bodyFat;
  let age = calcAge();
  // get folds values and changing to numbers
  let triceps = parseFloat(document.getElementById('inputTri').value);
  let subscapular = parseFloat(document.getElementById('inputSub').value);
  let toracica = parseFloat(document.getElementById('inputTor').value);
  let axilarMedia = parseFloat(document.getElementById('inputAxi').value);
  let supraIliaca = parseFloat(document.getElementById('inputSup').value);
  let abdominal = parseFloat(document.getElementById('inputAbd').value);
  let coxaMedia = parseFloat(document.getElementById('inputCox').value);

  let sumFolds = triceps + subscapular + toracica + axilarMedia + supraIliaca + abdominal + coxaMedia;

  if(radioMale.checked === true) {
    bodyFat = 495/(1.112-(0.00043499*sumFolds)+(0.00000055*sumFolds*sumFolds)-(0.00028826*age))-450;
  } else {
    bodyFat = 495/(1.097-(0.00046971*sumFolds)+(0.00000056*sumFolds*sumFolds)-(0.00012828*age))-450;
  }

  return bodyFat;
  
}




