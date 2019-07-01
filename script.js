var tableForm=["carre","rond"]; // je crée un tableau de forme
var tableColor=["rouge","bleu","jaune"];// je crée un tableau de couleur


var bouton=document.createElement("button");
document.body.appendChild(bouton);
bouton.textContent="buton";
bouton.addEventListener('click',function(){
    jeu();  
    var aside=document.querySelector("aside");
    if(aside != null){
   		aside.remove();
   }
	for (i=0;i<50;i++){
		var nvELT=document.createElement("div");// je crée mon element (div)
		
		var formAl=tableForm[Math.floor(Math.random()*tableForm.length)];//je choisie aléatoirement une forme
		nvELT.classList.add(formAl);//je rajoute la class de la forme choisie aléatoirement
		document.body.appendChild(nvELT);//mon élément est l'enfant du body
    			
		var positionX=Math.round(Math.random()*400);
		var positionY=Math.round(Math.random()*400);
		nvELT.style.top=positionX+"px";
		nvELT.style.left=positionY+"px";

		if (i<3){
			// var formNoir=document.createElement("div")
			// var couleur = 'noir';
			nvELT.classList.add('noir');
			

		}else{

		var couleurAle=tableColor[Math.floor(Math.random()*tableColor.length)];// je choisie aléatoirement une couleur
		nvELT.classList.add(couleurAle);//je rajoute la class de la couleur choisie aleatoiremen
		}

	}


	var tableDiv=document.querySelectorAll("div");//je sélectionne toutes mes div et je les stocke dans tableDiv

	for (i=0;i<tableDiv.length;i++){
		tableDiv[i].addEventListener('click',function(){ // je rends ma div cliquable 
			deplacer();
			this.remove();
			if(this.classList.contains('noir')){
				jeu();
				var perdu=document.createElement("span");
				document.body.appendChild(perdu);
				perdu.textContent="vous avez perdu ";
			}



			
		});
	}          
})

function jeu(){
   var jeu=document.querySelectorAll("div");
   
   for(i=0;i<jeu.length;i++){
   	jeu[i].remove();
   }
   var span=document.querySelector("span");
   if(span!=null){
   	span.remove();
   }
}

function deplacer() {
	var tableDiv=document.querySelectorAll("div");
	for (i=0;i<tableDiv.length;i++){
		var positionX=Math.round(Math.random()*400);
	    var positionY=Math.round(Math.random()*400);
	    tableDiv[i].style.top=positionX+"px";
	    tableDiv[i].style.left=positionY+"px";

	}
}

