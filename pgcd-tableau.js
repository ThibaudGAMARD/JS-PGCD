// PGCD-JS Calculateur par Thibaud Gamard en Mars 2012 - Ce code est placé sous licence CC-by-nc-sa: http://creativecommons.org/licenses/by-nc-sa/2.0/fr/
// Contact, repport de bugs et support: webmaster@gamardthibaud.com
// Algo utilisé: Algorithme d'Euclide: http://fr.wikipedia.org/wiki/Algorithme_d'Euclide


// ##      ######
// ##          ##
// ##  ##  ######, La réponse à la vie, l'univers et le reste…
// ######  ##
//     ##  ######

function pgcd(a, b) { // Cette fonction calcule le PGCD de a et b
	if(a > 0 && b > 0) {
	while(a != b) {
		if(a > b) {
			a = a-b;
		}
		if(b > a) {
			b = b-a;
		}
	}
	}
	
	return a;
}

function ctableau() { // Cette fonction remplie le tableau avec les PGCD calculés par la fonction PGCD
	var ligne = 1;
	var colone = 1;
	var cmax = 19; // Sont rajoutés pour pouvoir choisir de combien à combien sont les PGCD :D
	var lmax = 20;
	var rpgcd = 0; // Est rajouté pour la lisibilité
	
	var canvas = document.getElementById('tableau');
	var ctx = canvas.getContext('2d');
	ctx.font = "9pt Arial"; // Les fameuses variables pour Canvas
	
	while(ligne < lmax) {
	
		rpgcd = pgcd(ligne, colone);
		
		if(rpgcd != 1) { 
			ctx.fillStyle = "rgb(0,0,0)";
		} else {
			ctx.fillStyle = "rgb(200,0,0)";
		}
		ctx.fillText(rpgcd, colone*21+21, ligne*21+21);
	
		if(colone < cmax) { // Déplacement dans le tableau
			colone += 1;
			if(ligne == 1) {
				ctx.fillStyle = "rgb(0,120,0)";
				ctx.fillText(colone-1, colone*21, ligne*21);
			}
		} else if(colone == cmax) {
			
			colone = 1;
			ligne += 1;
			
			ctx.fillStyle = "rgb(0,120,0)";
			ctx.fillText(ligne-1, colone*21, ligne*21);
		}
		
	}
}

/*function pgcd(a, b) { // Cette fonction calcule le PGCD de a et b
	if(a > 0 && b > 0) {
	while(a != b) {
		if(a > b) {
			a = a-b;
		}
		if(b > a) {
			b = b-a;
		}
	}
	}
	
	return a;
}

function ctableau() { // Cette fonction remplie le tableau avec les PGCD calculés par la fonction PGCD
	var ligne = 1;
	var colone = 1;
	var i = 1;
	
	var canvas = document.getElementById('tableau');
	var ctx = canvas.getContext('2d');
	ctx.font = "9pt Arial";
	
	while(i < 144) {
		ctx.fillText(pgcd(ligne, colone), colone*19, ligne*19);
		i += 1;
		colone += 1;
		if(colone == 13) {
		ligne += 1;
		colone = 1;
		}
	}
}*/

