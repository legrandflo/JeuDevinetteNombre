 /* 
Activité : jeu de devinette d'un nombre entre 1 et 100;
*/
//fonction qui fait deviner un nombre entre 1 et 100 a utilisateur
//Utilisateur a droit a 6 essais
function devinerNombre(){
	let reponse = "";
	let solution = Math.floor(Math.random() * 100) + 1;

	// Décommentez temporairement cette ligne pour mieux vérifier le programme
/*
	reponse = reponse + "La solution est " + solution +"<br>";
	document.getElementById("resultat").innerHTML =reponse;
*/
	let compteurEssai = 0 //nombre de proposition faite par utilisateur
	let nombresaisi = 0; //nombre saisi par utilisateur
	//boucle tant que le nombre n'est pas trouvé et que le nombre d'essai est moins que 6
	while (nombresaisi !== solution  && compteurEssai <6){
		nombresaisi = Number(prompt("Saisissez un nombre en 1 et 100 : "));
		//test si nombre compris entre 1 et 100 pour envoyer un message approprié
		if ((nombresaisi >= 1) && (nombresaisi <= 100)){
			if (nombresaisi < solution){
				reponse = reponse + nombresaisi + " est trop petit !<br>";
				document.getElementById("resultat").innerHTML =reponse;
			}else if (nombresaisi > solution){
				reponse = reponse + nombresaisi + " est trop grand  !<br>";
				document.getElementById("resultat").innerHTML =reponse;
					}
		}else { reponse = reponse + nombresaisi + " n'est pas compris entre 1 et 100 <br>";
				document.getElementById("resultat").innerHTML =reponse;
		}
		compteurEssai++;				
	}
	//test pour envoi message si utilisateur a trouver la solution ou non
	if (nombresaisi === solution){
		reponse = reponse + "Bravo! la solution etait " + solution + " :-)<br>" + "Vous avez trouvé en " + compteurEssai + " coups.<br>" ;  
		document.getElementById("resultat").innerHTML =reponse;    
	}else{
		reponse = reponse + "Vous avez perdu! Vous aviez 6 essais <br>" + "La solution était " + solution +"<br>";
		document.getElementById("resultat").innerHTML = reponse;
		}
return compteurEssai;//on retourne le nombre de proposition de la manche pour utiliser hors de la boucle
}

//fonction principale qui fait jouer utilisateur
//calcul le nombre de manche -- et le nombre de proposition le plus bas
function JeuDevinette(){
let nombreManche = 0;
let MeilleurNombreEssai = 6; 
//boucle tant que utilisateur veut rejouer
do{
	nombreManche += 1;        
	//Ecriture du titre a chaque tour avec le numero de la manche
	titre =  "Bienvenue dans ce jeu de devinette !<br>" + "Manche N° " + nombreManche + " <br>"
	document.getElementById("titre").innerHTML = titre ;  
	let nombreEssai = devinerNombre();
	var rejouer = confirm("Voulez-vous rejouer?");
	if(nombreEssai < MeilleurNombreEssai  ){
		MeilleurNombreEssai = nombreEssai;
	}
}while (rejouer);
//Message final de titre dans id titre
titre = "Merci d'avoir participé !!";
document.getElementById("titre").innerHTML = titre ;    
//Message final du nombre de manche joué et du meilleur nombre de proposition
message = "Vous avez joué " + nombreManche + " manche(s) <br>" + " Vous avez joué votre meilleur manche en " + MeilleurNombreEssai + " coups";
document.getElementById("resultat").innerHTML = message;
}

JeuDevinette();
