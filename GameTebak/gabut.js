// Membuat struktur Game // Bahan
var isGame = true;
var Score = 0;
var hintTam = 0; // Hint++.

var randAngka = null; // Nilai Tebakan
var hintLeft = null; // Hint user

/* Bagian Function */

// Function Hint

function Hints() {
	if (selectMode == 1) {
		hintLeft = 10;
	} else if (selectMode == 2) {
		hintLeft = 5;
	} else if (selectMode == 3) {
		hintLeft = 3;
	}
}


//Mode
function selectModes() {
	if (selectMode == 1) {
		var selectMode_1 = Math.floor(Math.random()*35) + 1;
		randAngka = selectMode_1;
	} else if (selectMode == 2) {
		var selectMode_2 = Math.floor(Math.random()*70) + 1;
		randAngka = selectMode_2;
	} else if (selectMode == 3) {
		var selectMode_3 = Math.floor(Math.random()*150) + 1;
		randAngka = selectMode_3;
	}
}



//Update The Number / hintLeft if win
function Update() {
	hintTam++;
	if (hintTam % 3 == 0) {
	alert("Anda Dapat 1+ Hint"); 
	hintLeft++;
	} else {
		selectModes();
	}
	
	/*else if (){
	randAngka = Math.floor(Math.random()*3) + 1;
	catchRandAngka = randAngka;
	}*/
}

// Question // Hint
function Soal() {
	var isQuest = true;
	var a = Math.floor(Math.random()*50) + 1;
	var b = Math.floor(Math.random()*50) + 1;
	var c = a + b;
	if (hintLeft == 0) {
		alert("Maaf Hint Anda Sudah Habis.");
	} else {
		hintLeft--;
		while (isQuest) {
			var jawab = prompt(a + "+" + b);
	
			if (jawab == c) {
			alert("Hint: " + randAngka + "\n" +
				hintLeft + " Hint Left");
				isQuest = false;
			} else if (jawab == "" || jawab == " ") {	
				alert("Jangan Di kosongkan!"); 
				isQuest = true;
			} else {
				alert("False!\n" + hintLeft + " Hint Left");
				isQuest = false;
			}
		}
		
	}
}

// Win 
function Win() {
	Score++;
		alert("Selamat, Anda berhasil menebak! " +
			"\nTebakanya adalah: " + randAngka +
				"\nScore Anda: " + Score);
		isGame = confirm("Lanjutkan permainan?");
		// Update the RandAngka.
		Update();
}

// Dev Mode.
function oof() {
	alert("Anda Berada Di dev mode");
	while(a != -1 || a != 1 || a != 2 || a != 3) {
		var a = prompt("Masukkan:\n" + "[-1] Exit dev mode\n" + 
			"[1] Increase Score\n" + "[2] Show The Hint\n" + 
			"[3] Increase Hint Guess" );
		if (a == 1) {
			a = prompt("Berapa Banyak?");
			Score += Number(a);
			break;
		} else if (a == 2) {
			alert("Hint: " + randAngka);
			break;
		} else if (a == 3){
			a = prompt("Berapa Banyak?");
			hintLeft += a;
			break;
		} else if (a == -1) {
			break;
		} else {
			alert("Input Code Correctly!");
		}
	}
	
}

// The Game!
function Game() {
	while(isGame) {
		var userTurn  = prompt("Mode:\n[ 0 ] Hint(Jawaban)\n[-1 ] untuk Keluar" +
				"\n====================================\nSilahkan Masukan Tebakan Anda");
		
		// Rules Game
		if (randAngka < userTurn) {
			alert("Terlalu Besar");
		} else if (userTurn === "oof") {
			oof();
		} else if (userTurn == "" || userTurn == " " ||
			userTurn == "  " ) {
			alert("Tolong Di isi ya!");
		} else if (userTurn == 0) {
			Soal(); // Call Function Soal().
		} else if (userTurn == -1) {
			isGame = false; // Exit Game.
		} else if (userTurn == randAngka) {
			Win(); // Call Function Win().
		} else {
			alert("Terlalu kecil")
		}
	}
}

// Run Game
var selectMode;

while (selectMode != 1 || selectMode != 2 || selectMode != 3) {
	selectMode = prompt("Select Mode\n" + "[1] Easy\n" +
				"[2] Normal\n" + "[3] Hard");
	if(selectMode == 1 || selectMode == 2 || selectMode == 3) break;
	else alert("Masukkan Mode Yang Tertera di atas!");
}	
selectModes(); // Pick The Number Random.
Hints(); // Mendeklarasikan nilai hint
Game();
    
