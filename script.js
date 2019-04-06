'use strict';

var CeltoFar = function(tempC){                     
  var tempFahrenheit = Math.round(tempC * 9/5 + 32);
  return tempFahrenheit;
};
//funkcja CeltoFar przelicza z C na F i wyswietla  tempFahrenheit


var FartoCel = function(tempF){                     
  var tempCelsius = Math.round(5/9 * (tempF - 32));
  return tempCelsius;
};
//funkcja FartoCel przelicza z F na C i wyswietla tempCelsius

var stan = function(tempC){      
    if(tempC <= 0) { 
      return 'Water become ice<br>'; 
    } 
    else if ((tempC > 0) && (tempC < 15)) {
      return 'At this temperature water is really cool<br>';
    }
    else if ((tempC > 15) && (tempC < 60)) {
      return 'At this temperature water is quite warm<br>';
    }
    else if ((tempC > 60) && (tempC < 100)) {
      return 'At this temperature water is hot<br>';
    }
    else if (tempC >= 100) {
      return 'Water become steam<br>';}
    };
//funkcja 'stan' wyświetla stan wody w zależnosci od temperatury

var logF = function(inputTempC){                    
  outputC.innerHTML =('<br>'+inputTempC+' °C = '+CeltoFar(inputTempC)+'°F'+'<br>' +stan(inputTempC)+'<br>');
};
//funkcja logF wyswietla wynik w *F + stan wody,  przyjmuje inputTempC czyli liczbe w oknie

var logC = function(inputTempF){                   
  outputF.innerHTML =('<br>'+inputTempF+' °F = '+FartoCel(inputTempF)+'°C'+'<br>'+stan(FartoCel(inputTempF))+'<br>');
}
// funkcja logC wyświetla wynik w *C + stan wody,   przyjmuje inputTempF czyli liczbe w oknie




var outputC = document.getElementById('greeter-output'); 
//zmienna odnosi sie do diva id=gree...

outputC.innerHTML = '<br>'+'Click the button and write temperature of water' +'<br>'+ 'You will see temperature in ℃ converted to ℉' + '<br>'+'See what happend with water in this temperature !!'+'<br><br>'+ outputC.innerHTML ; 
//komunikat wyswietlany w zmiennej outputC, ..pod pierwszym buttonem

var buttonC = document.getElementById('greeter-button');
//zmienna odnosi sie do buttona o id.gree, ..pierwszy button

buttonC.addEventListener('click', function(){
//piszemy funkcje, i dalszy kod będzie wykonywany zawsze po kliknięciu guzika

  var tempC = window.prompt('Write temperature in Celsius');//to co w nawiasie wyswietlane nad inputem
var tempCel = tempC;
  if(isNaN(tempCel)) {
	  outputC.innerHTML = '<br>'+'You wrote incorrect content !! '+tempC+' is not a number!'+'<br>Please write a number !!'+'<br><br>';
  } 
  else{
    logF(tempCel);
  }  
});


var outputF = document.getElementById('greeter-output2');

outputF.innerHTML = '<br>'+'Click the button and write temperature of water' +'<br>'+ 'You will see temperature in ℉ converted to ℃' + '<br>'+'See what happend with water in this temperature !!'+'<br><br>'+ outputF.innerHTML;
//zmienna outputF odnosi sie juz do drugiego buttona

var buttonF = document.getElementById('greeter-button2');

buttonF.addEventListener('click', function(){

var	tempF = window.prompt('Write temperature in Fahrenheit');
 
var tempFare = tempF;
 if(isNaN(tempFare)) {
	  outputF.innerHTML = '<br>'+'You wrote incorrect content !! '+tempF+' is not a number!'+'<br>Please write a number !!'+'<br><br>';
  } 
  else{
  logC(tempFare)
  }  
});
 