// PGCD-JS Calculateur par Thibaud Gamard en Mars 2012 - Ce code est placé sous licence CC-by-nc-sa: http://creativecommons.org/licenses/by-nc-sa/2.0/fr/
// Contact, repport de bugs et support: webmaster@gamardthibaud.com
// Algo utilisé: Algorithme d'Euclide (adapté): http://fr.wikipedia.org/wiki/Algorithme_d'Euclide

var PDC = true;
function pgcd(a, b) {
	if(a > 0 && b > 0) {
	while(a != b) {
		if(a > b) {
			a = a - b;
		}
		if(b > a) {
			b = b - a;
		}
	}
	}
	
	return a;
}

function calculer() {
	i = 1;
	while (i < 7) {
		
		var A = document.getElementById("A"+i);
		var B = document.getElementById("B"+i);
		if(parseInt(A.value) > 0 && parseInt(B.value) > 0) { 
			document.getElementById("pgcd"+i).innerHTML = "PGCD(" + A.value + "; " + B.value + ") = " + pgcd(parseInt(A.value), parseInt(B.value));
		}
		if(pgcd(parseInt(A.value), parseInt(B.value)) == 1) {
			document.getElementById("pgcd"+i).innerHTML = A.value + " et " + B.value + " sont premiers entre eux.";
		}
		i += 1;
		
	}
}


function showPDC() {
	var divPDC = document.getElementById("pdc");
	var linkPDC = document.getElementById("linkPDC");
	
	if(PDC == false) {
		linkPDC.innerHTML = 'Afficher plus de champs <img src="fleche_bas.png" alt="bas" id="bas" />';
		divPDC.style.height = '0px';
		PDC = true;
	} else {
		linkPDC.innerHTML = 'Afficher moins de champs <img src="fleche_haut.png" alt="haut" id="haut" />';
		divPDC.style.height = '120px';
		PDC = false;
	}
}


function reset() {
	i = 1;
	while (i < 7) {
		
		var A = document.getElementById("A"+i);
		var B = document.getElementById("B"+i);
		A.value = "";
		B.value = "";
		i += 1;
		
	}
	location.reload();
}