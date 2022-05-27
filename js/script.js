//--------------------------    VARIAVEIS   -----------------------
var ranking = [];

ranking[0] = 0;
ranking[1] = 0;
ranking[2] = 0;
ranking[3] = 0;
ranking[4] = 0;

let lista = 0;
let pontos = 0; // pontos

function jogar() {
    var nrCorComida = 0; // para trocar a cor da comida ( piscando)
    var corComida = []; //to change food color (flashing)


    corComida[0] = "#FF6347";
    corComida[1] = "#FF0000";
    corComida[2] = "#FF4500";



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

    let direction = "right"; // define a direção da cobra / define the snake direction 

    //-------------------------------------------------------------- DEFINE A COMIDA / DEFINE THE FOOD
    // define a comida como um array / define the food with an array

    let food = {


        // Math.floor -> retira o ponto flutuante do Math.Random ( A virgula), até aonde foram setados no CANVAS
        x: Math.floor(Math.random() * 15 + 1) * box,
        // Math.floor -> removes the floating point from Math.Random (the comma), as far as they were set in CANVAS
        y: Math.floor(Math.random() * 15 + 1) * box

    }





    //-------------------------------------------------------------- FUNÇÕES DESENHO / DRAWING

    //----------------------------------------------  Função Criar Campo / Function CREATE Fild
    function criarBG() {
        context.fillStyle = "#00FF7F";
        context.fillRect(0, 0, 16 * box, 16 * box);
        //  Define o campo usando em x e y e a largura e altura setadas
        //      Define the fild of the game
    }

    //---------------------------------------------- Função Criar Cobra / Fuction CREATE Snake
    function criarCobrinha() {


        for (i = 0; i < snake.length; i++) {
            context.fillStyle = "#556B2F";

            context.fillRect(snake[i].x, snake[i].y, box, box);

            // Define o tamanho da cobra por uma função

            //     Define the size of snake by a fuction


        }

    }

    // Adiciona o evento de teclado. / Adds the keyboard event.

    document.addEventListener('keydown', update);



    //---------------------------------------------- Função Criar COMIDA / Fuction CREATE FOOD

    function drawFood() {

        //para trocar a cor da comida ( piscando) em um loop
        comidinha = corComida[nrCorComida++]; //to change food color (flashing) in a loop

        if (nrCorComida >= corComida.length) {
            nrCorComida = 0;

        }


        context.fillStyle = comidinha;
        context.fillRect(food.x, food.y, box, box);


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
                clearInterval(jogo);



                alert('Game Over :(');

                document.getElementById("pontuacao").innerHTML = pontos;
                ranking[lista] = pontos;




                document.getElementById("pont0").innerHTML = ranking[0];
                document.getElementById("pont1").innerHTML = ranking[1];
                document.getElementById("pont2").innerHTML = ranking[2];
                document.getElementById("pont3").innerHTML = ranking[3];
                document.getElementById("pont4").innerHTML = ranking[4];
                vida = 100;
                pontos = 0;
                lista++
            }



            vidamenos = 100 - vida;
            var v1 = document.getElementById('p1').value;
            document.getElementById("p1").value = vidamenos;

            if (vida == 0) {


                document.getElementById("pontuacao").innerHTML = pontos;
                ranking[lista] = pontos;




                document.getElementById("pont0").innerHTML = ranking[0];
                document.getElementById("pont1").innerHTML = ranking[1];
                document.getElementById("pont2").innerHTML = ranking[2];
                document.getElementById("pont3").innerHTML = ranking[3];
                document.getElementById("pont4").innerHTML = ranking[4];
                lista++
                clearInterval(jogo);

                alert('Game Over :(');
                vida = 100;
                pontos = 0;



            }





        }



        //-----------------------------------------------------------------

        // Chama as funções criadas anteriormentes / Calls previously created functions
        criarBG();
        criarCobrinha();
        drawFood();


        let snakeX = snake[0].x; // 0 -> X 
        let snakeY = snake[0].y; // 0 -> Y
        // definindo a posição da cobrinha aonde ela vai ter o ponto de partida em X e Y
        // defining the position of the snake where it will have the starting point in X and Y

        // Cria condicional. para o lado que ela ir, diminuir 1 quadrado ao lado contrario da direção da cobra.
        // Create conditional. which way it goes, decrease 1 square to the opposite side of the snake's direction.

        if (direction == "right") snakeX += box; //     DIREITA
        if (direction == "left") snakeX -= box; //      ESQUERRDA
        //------------
        if (direction == "up") snakeY -= box; //     CIMA
        if (direction == "down") snakeY += box; //   BAIXO


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



            food.x = Math.floor(Math.random() * 15 + 1) * box;
            // ao passar a cobra na comida, ela gera a comida em outro lugar
            food.y = Math.floor(Math.random() * 15 + 1) * box;
            // when passing the snake in the food, it generates the food elsewhere
            vida = vida + 30;
            if (vida > 100) {
                vida = 100;
            }
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


    }

    //---------------------------------------------- Função para Atualizar o jogo / Function Game Update
    jogo = setInterval(IniciarJogo, 100);
    //                                   ^  definida em milissegundos / difine in milliseconds
    // Define um intervalo de tempo para iniciar o jogo e renovar o jogo sem ele travar
    // Sets a time interval to start the game and renew the game without it crashing

}
// INICIAR O JOGO / START THE GAME
var btn = document.querySelector("#refresh");
btn.addEventListener("click", function() {




    document.getElementById("pontuacao").innerHTML = pontos;
    jogar();


});

var btn = document.querySelector("#refreshAtualiza");
btn.addEventListener("click", function() {

    location.reload();

});