//--------------------------    VARIAVEIS   -----------------------
var ranking = [];
var lifes = [];
var Qlifes;


lifes[0] = true;
lifes[1] = true;
lifes[3] = true;

var playerCanPlay = true;

ranking[0] = 0;
ranking[1] = 0;
ranking[2] = 0;
ranking[3] = 0;
ranking[4] = 0;

let lista = 0;
let pontos = 0; // pontos

var inseto_tempo = 70;
var inseto_Dourado_tempo = 70;


var Inseto_Raro = false;


var vida_Bonus = 40;


var Inseto_Raro__Calculo = 0;
var Inseto_Raro__Calculo_Math = 5; // calculo de % de gerir o inseto raro

var _tempo_aparecer_inseto = 0;
var _tempo_Inseto_Dourado = 120;
var _tempo_Inseto_Dourado__bonus = 120;
var Inseto_Dourado_Pontos = 0;
var Inseto_Dourado_Pontos__Calculo = 0;


var audio4 = document.getElementById('audio4');

//  Define o campo usando em x e y e a largura e altura setadas
//      Define the fild of the game




function randomHeart() {

    var randomHeart_ = Math.floor(Math.random() * 25)

    if (randomHeart_ == 5) {
        Qlifes = Qlifes + 1
    }

}





function HaveHearts() {



    document.getElementById("heartsValue").innerHTML = Qlifes;
    var HeartFulls = [];

    HeartFulls[0] = "https://github.com/ViniciusF-Pereira/SnakeGameGame.github.io/blob/main/assets/Heart_HeartBar/vidaVazia.png?raw=true";
    HeartFulls[1] = "https://github.com/ViniciusF-Pereira/SnakeGameGame.github.io/blob/main/assets/Heart_HeartBar/vidaCheia.png?raw=true";

    var Vida1 = document.getElementById("QHearts1");
    var Vida2 = document.getElementById("QHearts2");
    var Vida3 = document.getElementById("QHearts3");

    if (Qlifes <= 0) {

        Qlifes = 0;

        document.getElementById("heartsValue").innerHTML = Qlifes;
        Vida1.src = HeartFulls[0];
        Vida2.src = HeartFulls[0];
        Vida3.src = HeartFulls[0];

        playerCanPlay = true;

        clearInterval(jogo);

        alert('Game Over :(');
        document.getElementById('refresh').style.display = 'block';

    } else if (Qlifes == 1) {

        vida = 100;


        Vida1.src = HeartFulls[0];
        Vida2.src = HeartFulls[0];
        Vida3.src = HeartFulls[1];

    } else if (Qlifes == 2) {

        vida = 100;


        Vida1.src = HeartFulls[0];
        Vida2.src = HeartFulls[1];
        Vida3.src = HeartFulls[1];

    } else if (Qlifes >= 3) {

        vida = 100;


        Vida1.src = HeartFulls[1];
        Vida2.src = HeartFulls[1];
        Vida3.src = HeartFulls[1];

    }



}

function jogar() {

    var FrutasNumero = 0; // para trocar a cor da comida ( piscando)
    var Frutas = []; //to change food color (flashing)



    Frutas[0] = "https://github.com/ViniciusF-Pereira/SnakeGameGame.github.io/blob/main/assets/comidas/banan.jpg?raw=true";
    Frutas[1] = "https://github.com/ViniciusF-Pereira/SnakeGameGame.github.io/blob/main/assets/comidas/cherry.jpg?raw=true";
    Frutas[2] = "https://github.com/ViniciusF-Pereira/SnakeGameGame.github.io/blob/main/assets/comidas/strawberry.jpg?raw=true";
    Frutas[3] = "https://github.com/ViniciusF-Pereira/SnakeGameGame.github.io/blob/main/assets/comidas/cherry.jpg?raw=true";
    Frutas[4] = "https://github.com/ViniciusF-Pereira/SnakeGameGame.github.io/blob/main/assets/comidas/strawberry.jpg?raw=true";

    var snakeHeaddirectionNumero = 0;
    var snakeHeaddirection = [];

    snakeHeaddirection[0] = "https://github.com/ViniciusF-Pereira/SnakeGameGame.github.io/blob/main/assets/Snake/snakeHead_direita.png?raw=true";
    snakeHeaddirection[1] = "https://github.com/ViniciusF-Pereira/SnakeGameGame.github.io/blob/main/assets/Snake/snakeHead_esquerda.png?raw=true";
    snakeHeaddirection[2] = "https://github.com/ViniciusF-Pereira/SnakeGameGame.github.io/blob/main/assets/Snake/snakeHead_cima.png?raw=true";
    snakeHeaddirection[3] = "https://github.com/ViniciusF-Pereira/SnakeGameGame.github.io/blob/main/assets/Snake/snakeHead_baixo.png?raw=true";


    let vida = 70; // vida da cobrinha
    let vidamenos = 100;
    let canvas = document.getElementById("snake"); // define canvas pelo ID "snake"/ define canvas by ID "snake"
    let context = canvas.getContext("2d"); // define context.canvas = "2d"  / define context.canvas = "2d"
    let box = 32; // define o tamanho do quadrado / define the size of box
    //-------------------------------------------------------------- TAMANHO DA COBRA / SIZE OF SNAKE
    //define o tamanho da cobra   // define the size of snake

    let snake = []; // define a cobra como um array / define the snake with an array
    snake[0] = {

        x: 8 * box,
        y: 8 * box

    }





    let direction = document.addEventListener('keydown', update); // define a direção da cobra / define the snake direction 

    //-------------------------------------------------------------- DEFINE A COMIDA / DEFINE THE FOOD
    // define a comida como um array / define the food with an array

    let food = {


        // Math.floor -> retira o ponto flutuante do Math.Random ( A virgula), até aonde foram setados no CANVAS
        x: Math.floor(Math.random() * 15 + 1) * box,
        // Math.floor -> removes the floating point from Math.Random (the comma), as far as they were set in CANVAS
        y: Math.floor(Math.random() * 15 + 1) * box

    }





    //-------------------------------------------------------------- FUNÇÕES DESENHO / DRAWING
    if (playerCanPlay == true) {
        //----------------------------------------------  Função Criar Campo / Function CREATE Fild
        function criarBG() {
            context.fillStyle = "#00FF7F";
            context.fillRect(0, 0, 16 * box, 16 * box);
            //  Define o campo usando em x e y e a largura e altura setadas
            //      Define the fild of the game
        }
    }
    //---------------------------------------------- Função Criar Cobra / Fuction CREATE Snake
    function criarCobrinha() {


        for (i = 0; i < snake.length; i++) {


            // aqui defino o corpo dela

            snakeBodyImage = new Image();

            snakeBodyImage.src = "https://github.com/ViniciusF-Pereira/SnakeGameGame.github.io/blob/main/assets/Snake/snakeBody.png?raw=true";

            context.drawImage(snakeBodyImage, snake[i].x, snake[i].y, box, box);

            // vou por o rabo dela agora.


            // aqui eu coloco a cabeça da cobra
            snakeHeadImage = new Image();

            snakeHeadImage.src = snakeHeaddirection[snakeHeaddirectionNumero];

            context.drawImage(snakeHeadImage, snake[0].x, snake[0].y, box, box);



            // Define o tamanho da cobra por uma função

            //     Define the size of snake by a fuction


        }

    }

    // Adiciona o evento de teclado. / Adds the keyboard event.

    document.addEventListener('keydown', update);



    //---------------------------------------------- Função Criar COMIDA / Fuction CREATE FOOD

    function drawFood() {

        //para trocar a cor da comida ( piscando) em um loop
        //to change food color (flashing) in a loop


        comidinha = new Image();
        comidinha.src = Frutas[FrutasNumero];

        context.drawImage(comidinha, food.x, food.y, box, box);



    }




    let inseto = {


        x: Math.floor(Math.random() * 15 + 1) * box,
        // Math.floor -> removes the floating point from Math.Random (the comma), as far as they were set in CANVAS
        y: Math.floor(Math.random() * 15 + 1) * box



    }



    function drawinseto() {


        if (_tempo_aparecer_inseto > 70) {

            if (Inseto_Raro == true) {


                base_image = new Image();
                base_image.src = "https://github.com/ViniciusF-Pereira/SnakeGameGame.github.io/blob/main/assets/Insects/joaninha_dourada.png?raw=true";

                context.drawImage(base_image, inseto.x, inseto.y, box, box);

            } else {



                base_image = new Image();
                base_image.src = "https://github.com/ViniciusF-Pereira/SnakeGameGame.github.io/blob/main/assets/Insects/joaninha.png?raw=true";




                context.drawImage(base_image, inseto.x, inseto.y, box, box);

            }
        }



    }





    //---------------------------------------------- Função de evento do TECLADO / KEYBOARD event function
    function update(event) {

        // SE O EVENTO DO BOTÃO ( CODIGO DO BOTÃO DO TECLADO) FAZ O SEGUINTE.
        if (event.keyCode == 37 && direction != "right") direction = "left"; // TECLA ➝ / KEY ➝
        // IF THE BUTTON EVENT (KEYBOARD BUTTON CODE) DOES THE FOLLOWING.
        if (event.keyCode == 38 && direction != "down") direction = "up"; // TECLA ↓ / KEY ↓ 

        if (event.keyCode == 39 && direction != "left") direction = "right"; // TECLA ⇽ / KEY ⇽

        if (event.keyCode == 40 && direction != "up") direction = "down"; // TECLA ↑ / KEY ↑

    }


    //-------------------------------------------------------------- Função Iniciar Jogo / Function Start Game
    function IniciarJogo() {


        //----------------------------------------------------------------- Função PAREDE // Function WALL

        // caso a cobra bate na parede, ela recebe uma nova propriedade e volta a aparecer num loop infinito 
        // if the snake hits the wall, it gets a new property and reappears in an infinite loop

        if (snake[0].x > 15 * box && direction == "right") snake[0].x = 0;


        if (snake[0].x < 0 && direction == "left") snake[0].x = 16 * box;

        if (snake[0].y > 15 * box && direction == "down") snake[0].y = 0;
        if (snake[0].y < 0 && direction == "up") snake[0].y = 16 * box;

        //----------------------------------------------------------------- 


        //----------------------------------------------------------------- Função FIM DE JOGO // Function ENDGAME

        for (i = 1; i < snake.length; i++) {

            // SE A CABEÇA BATER NO CORPO  / IF THE HEAD HIT THE BODY
            if (snake[0].x == snake[i].x && snake[0].y == snake[i].y) {


                var audio2 = document.getElementById('audio2');
                audio2.play();

                _tempo_aparecer_inseto = 0;

                Qlifes = Qlifes - 1;
                vida = 100;

                clearInterval(jogo);
                jogar();


            }
            if (snake[0].x == inseto.x && snake[0].y == inseto.y) {


                if (_tempo_Inseto_Dourado < _tempo_Inseto_Dourado__bonus) {



                    audio4.play();
                    vida = vida + vida_Bonus;
                    if (vida > 100) {
                        vida = 100;
                    }

                    pontos++;
                    document.getElementById("pontuacao").innerHTML = pontos;

                    drawinseto();

                    inseto_x = Math.floor(Math.random() * 15 + 1) * box;
                    inseto_y = Math.floor(Math.random() * 15 + 1) * box;
                    if (inseto_x != food.x || inseto_x != snake.x) {

                        inseto.x = inseto_x;
                    } else {
                        inseto_x = Math.floor(Math.random() * 15 + 1) * box;
                    }

                    if (inseto_y != food.y || inseto_y != snake.y) {

                        inseto.y = inseto_x;
                    } else {
                        inseto_y = Math.floor(Math.random() * 15 + 1) * box;
                    }



                    randomHeart();


                } else {





                    var audio2 = document.getElementById('audio2');
                    audio2.play();

                    inseto_x = Math.floor(Math.random() * 15 + 1) * box;
                    inseto_y = Math.floor(Math.random() * 15 + 1) * box;
                    if (inseto_x != food.x || inseto_x != snake.x) {

                        inseto.x = inseto_x;
                    } else {
                        inseto_x = Math.floor(Math.random() * 15 + 1) * box;
                    }

                    if (inseto_y != food.y || inseto_y != snake.y) {

                        inseto.y = inseto_x;
                    } else {
                        inseto_y = Math.floor(Math.random() * 15 + 1) * box;
                    }


                    Qlifes = Qlifes - 1;
                    vida = 100;
                    clearInterval(jogo);
                    jogar();


                    drawinseto();
                }


            }



            vidamenos = 100 - vida;
            var v1 = document.getElementById('p1').value;
            document.getElementById("p1").value = vidamenos;

            if (vida == 0) {
                var audio1 = document.getElementById('audio1');
                audio1.play();

                _tempo_aparecer_inseto = 1;
                Qlifes = Qlifes - 1;
                vida = 100;
                console.log(`A quantidade de vidas é :${Qlifes}`);
                console.log("Player can play " + playerCanPlay)

            }


        }



        //-----------------------------------------------------------------

        // Chama as funções criadas anteriormentes / Calls previously created functions
        HaveHearts();
        criarBG();
        criarCobrinha();
        drawFood();
        drawinseto();


        let snakeX = snake[0].x; // 0 -> X 
        let snakeY = snake[0].y; // 0 -> Y
        // definindo a posição da cobrinha aonde ela vai ter o ponto de partida em X e Y
        // defining the position of the snake where it will have the starting point in X and Y

        // Cria condicional. para o lado que ela ir, diminuir 1 quadrado ao lado contrario da direção da cobra.
        // Create conditional. which way it goes, decrease 1 square to the opposite side of the snake's direction.

        if (direction == "right") {
            snakeX += box;
            snakeHeaddirectionNumero = 0;
        } //     DIREITA


        if (direction == "left") {
            snakeX -= box;
            snakeHeaddirectionNumero = 1
        }
        //      ESQUERRDA
        //------------
        if (direction == "up") {
            snakeY -= box;
            snakeHeaddirectionNumero = 2;
        } //     CIMA
        if (direction == "down") {
            snakeY += box;
            snakeHeaddirectionNumero = 3;
        } //   BAIXO


        //|↑                                        |↑
        //|Y       PLANO CARTESIANO                 |Y       CARTESIAN PLAN
        //|                                         |
        //|              CIMA                       |             UP
        //|                ↑                        |              ↑
        //|  ESQUERDA ⇽ COBRA ➝ DIREITA                    LEFT ⇽ SNAKE ➝ RIGHT
        //|                ↓                        |              ↓              
        //|              BAIXO                      |             DOWN                 
        //0________________________________X ➝     0 __________________________________X   ➝         
        //                                         


        //---------------------------------------------- Função gerar nova comida / Function Generate new food
        if (snakeX != food.x || snakeY != food.y) {

            snake.pop();


        } else {



            console.log(Frutas[FrutasNumero]);


            food_x = Math.floor(Math.random() * 15 + 1) * box;
            food_y = Math.floor(Math.random() * 15 + 1) * box;
            if (food_x != inseto.x || food_x != snake.x) {

                food.x = food_x;
            } else {
                food_x = Math.floor(Math.random() * 15 + 1) * box;
            }

            if (food_y != inseto.y || food_y != snake.y) {

                food.y = food_y;
            } else {
                food_y = Math.floor(Math.random() * 15 + 1) * box;
            }



            // ao passar a cobra na comida, ela gera a comida em outro lugar
            // when passing the snake in the food, it generates the food elsewhere


            vida = vida + vida_Bonus;
            if (vida > 100) {
                vida = 100;
            }
            randomHeart();


            FrutasNumero = Math.floor(Math.random() * 4);

            audio4.play();
            pontos++;
            document.getElementById("pontuacao").innerHTML = pontos;

        }


        //---------------------------------------------- Função para cabeça da Cobra / Function for Snake Head
        // Define a cabeça da cobra / Define the snake Head
        let newHead = {

            x: snakeX,
            y: snakeY



        }

        snake.unshift(newHead); // Adiciona 1 no valor da cabeça / Add 1 to the head value



        vida--;

        if (_tempo == inseto_tempo) {



            Inseto_Raro__Calculo = Math.floor(Math.random() * Inseto_Raro__Calculo_Math);

            if (Inseto_Raro__Calculo == 1 || Inseto_Raro__Calculo == 2) {

                _tempo_Inseto_Dourado = 0;

            }
            if (_tempo_Inseto_Dourado == 0) {
                Inseto_Raro = true;

            }
            if (_tempo_Inseto_Dourado > _tempo_Inseto_Dourado__bonus) {
                inseto_raro = false;
                console.log("Inseto_Raro: " + inseto_raro);
            }

            console.log("drawing inset is rare? " + Inseto_Raro);
            console.log("drawing inset is rare? " + Inseto_Raro__Calculo);

            drawinseto();

            inseto_x = Math.floor(Math.random() * 15 + 1) * box;
            inseto_y = Math.floor(Math.random() * 15 + 1) * box;
            if (inseto_x != food.x || inseto_x != snake.x) {

                inseto.x = inseto_x;
            } else {
                inseto_x = Math.floor(Math.random() * 15 + 1) * box;
            }

            if (inseto_y != food.y || inseto_y != snake.y) {

                inseto.y = inseto_x;
            } else {
                inseto_y = Math.floor(Math.random() * 15 + 1) * box;
            }


            _tempo = 0;

        }

        if (_tempo_Inseto_Dourado > 120) {

            Inseto_Raro = false;
        }
        _tempo++;
        _tempo_Inseto_Dourado++;
        if (_tempo == 60) {
            drawFood();
        }

        _tempo_aparecer_inseto++;
    }


    //---------------------------------------------- Função para Atualizar o jogo / Function Game Update
    jogo = setInterval(IniciarJogo, 110);
    //                                   ^  definida em milissegundos / difine in milliseconds
    // Define um intervalo de tempo para iniciar o jogo e renovar o jogo sem ele travar
    // Sets a time interval to start the game and renew the game without it crashing


    var _tempo = 1;


}







var audioFundo = document.getElementById('audioFundo');



// INICIAR O JOGO / START THE GAME
var btn = document.querySelector("#refresh");
btn.addEventListener("click", function() {



    if (playerCanPlay == true) {
        var audio3 = document.getElementById('audio3');
        audio3.play();
        mostra_oculta();
        document.getElementById("pontuacao").innerHTML = pontos;

        Qlifes = 3;
        pontos = 0;
        console.log("Player can play " + playerCanPlay)
        HaveHearts();
        jogar();

        document.getElementById('refresh').style.display = 'none';

    }
});




function mostra_oculta() {

    var x = document.getElementById("myDIV");
    if (x.style.display === "none") {
        x.style.display = "block";
    }


}



//------------------------------------------------------- MAPAS
/* nessa parte irei criar os mapas baseados na função de exportação
irei criar blocos estaticos no canvas e personalização dos jogos aleatorias. */