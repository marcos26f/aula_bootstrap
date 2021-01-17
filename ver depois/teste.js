<id de tela ="tela" largura="400" altura="400"></tela>

<Script>
janela. onload = função(){
	tela = documento. getElementById("tela" );
	ctx = tela. getContext("2d");

	documento. addEventListener("keydown", função(e ){
		console. log(e. keyCode);
		switch (e. keyCode) {
				caso 37:
				velX = -1;
				vely = 0;
				Quebrar;
				caso 38:
				velY = -1;
				velX = 0;
				Quebrar;
				caso 39:
				velX = 1;
				vely =0;
				Quebrar;
				caso 40:
				vely = 1;
				velX = 0
				Quebrar;
		}
	});

	setInterval(jogo, 100);
}

posiçãoX = 10;
posiçãoY = 10;
foodX = 15;
foodY = 15;
velX = 0;
vely = 0;
grade = 20;
Cobra = [];
tam = 5;

jogo função (){
	posiçãoX += velX;
	posiçãoY +=velY;

	console. log(posiçãoX );
	se(posiçãoX < 0){
		posiçãoX = grade;
	}
	se(posiçãoX > grade){
		posiçãoX = 0;
	}
	se(posiçãoY < 0){
		posiçãoY = grade;
	}
	se(posiçãoY > grade){
		posiçãoY = 0;
	}


	ctx. fillStyle = "#9aff94";
	ctx. fillRect(0,0, tela. largura, tela. altura);



	ctx. fillStyle = "preto";
	para(var i=0; i < cobra. comprimento; i ++){
		ctx. fillRect(cobra[i]. x * grade, cobra[i]. y * grade, grid - 1 , grid - 1);
		se(cobra[i].. x == posiçãoX && cobra[i]. y == posiçãoY){
			tam = 5;
		}
	}

	cobra. push({x: positionX, y: posiçãoY});
	enquanto(cobra. comprimento > tam){
		cobra. mudança();
	}

	ctx. fillStyle = "vermelho";
	ctx. fillRect(foodX* grade, foodY * grade, grade - 1, grade - 1);

	se(posiçãoX == alimentoX && posiçãoY == alimento){
		Tam++;
		foodX = Matemática. piso(Matemática. grade aleatória  () *);
		foodY = Matemática. piso(Matemática. grade aleatória  () *);
	}

}

