let inputan = document.querySelector('.input');

window.onload = function () {
    inputan.focus();
};

let angka = Math.floor(Math.random() * 10) + 1;

let getPilih = () => {
    return inputan.value;
}

let iniButton = document.querySelector('.button');
let iniAngka = document.querySelector('.ini-angka')
let jawaban = document.querySelector('.jawaban')
let count = document.querySelector('.count')

let kesempatan = 3;
let i = 0;

const disableButton = () => iniButton.disabled = 'true';

inputan.addEventListener("keyup", (event) => {
    // Number 13 is the "Enter" key on the keyboard
    if (event.keyCode === 13) {
      event.preventDefault();
      iniButton.click();
    }
  });

iniButton.addEventListener('click', () => {
    const iniPilih = getPilih();

    if (i < kesempatan) {
        if (iniPilih == angka) {
            jawaban.innerHTML = "Selamat Kamu benar";
            disableButton();
            iniAngka.innerHTML = angka;
            inputan.value = '';
        } else if (iniPilih < angka) {
            jawaban.innerHTML = "Angka yang kamu masukan terlalu kecil";
            count.innerHTML = `Count: ${i}`;
            i++;
            inputan.value = '';
            inputan.focus();
        } else if (iniPilih > angka) {
            jawaban.innerHTML = "Angka yang kamu masukan terlalu besar";
            i++;
            count.innerHTML = `Count: ${i}`;
            inputan.value = '';
            inputan.focus();
        }
    } else {
        if( iniPilih == angka){
            jawaban.innerHTML = "Selamat Kamu benar";
            iniAngka.innerHTML = angka;
            disableButton();
        }else {
            iniAngka.innerHTML = angka;
            jawaban.innerHTML = "Kesempatan kamu sudah habis";
            count.innerHTML = `Count: 3`;
            inputan.value = '';
            disableButton();
        }
        
    }
});

const iniReset = document.querySelector('.reset')

iniReset.addEventListener('click', () => {
    iniButton.removeAttribute('disabled');
    i = 1;
    angka = 0;
    angka += Math.floor(Math.random() * 10) + 1;
    iniAngka.innerHTML = '?';
    jawaban.innerHTML = 'Masukan angka untuk menebak';
    count.innerHTML = 'Count: 0';
    inputan.value = '';
});