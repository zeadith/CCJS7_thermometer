/*Napisz funkcję celsjusToFahrenheit, która przyjmuje jeden argument typu Number którym bedzie wartość stopni Celsjusza. Funkcja zwróci wartość typu Number czyli wartość w skali Fahrenheita.*/

var celsiusToFahrenheit = function (degrCel){
//°C  x  9/5 + 32 = °F
    return degrFahr = degrCel * 9 / 5 + 32;
}


var form = document.getElementsByTagName('form')[0];

var wynik = document.createElement('p');
document.body.appendChild(wynik);

//W odpowiednim miejscu w kodzie wywołaj wcześniej stworzoną funkcję z odpowiednim argumentem i przypisz wynik jako tekst elementu <p>.



form.addEventListener('submit', function(e) {
  var celsjusz = form.celsjusz.value; // Przypisaliśmy wartość podaną przez użytkownika do zmiennej
  e.preventDefault(); // Zapobiegamy domyślnej akcji przeglądarki, czyli przeładowania strony
  
  // Tutaj będziemy wywoływać funkcję i przypisywać wynik do elementu.
    var dzialanie =  celsiusToFahrenheit (celsjusz);
    wynik.innerText = dzialanie;
});






