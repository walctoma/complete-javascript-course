'use strict';

// Losowanie liczby 1-20
const number = Math.trunc(Math.random() * 20) + 1;
// Przypisanie liczby do pola 
document.querySelector('.number').textContent = number;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  document.querySelector('.message').textContent = 'Piękna Liczba Stary! ✅';
  console.log(guess, typeof guess);


 // Warunek gdy liczba nie jest wpisana: 
  if (!guess) {
    document.querySelector('.message').textContent = '⛔ Brak Cyferki o_o';
  }
});
