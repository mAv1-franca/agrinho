function setup() {
  createCanvas(400, 400);
}

let Xjogador1 = (0);
let Xjogador2 = (0);


function draw() {
  ativaJogo();
  desenhaJogadores();
 DesenhaLinhaDeChegada();
 fill("#680D0D");
 
   
  fill("#F8F1F1")
       if(Xjogador1 > 350){
         textSize(32);
    text("Trator chegou á cidade!🎆", 1, 210);
 noLoop ()    
  
       }
  
 
     if(Xjogador2 > 350){
       textSize(26);
    text("Seu cavalo chegou á cidade!🎉", 20, 210);
 noLoop();        
  } 
}
 function keyReleased () {
if ( key === 'a') { 
  Xjogador1 += random (20);
}
    if ( key === 's') {
     Xjogador2 += random (20);
 }
 }

 function ativaJogo(){
  if (focused == true) {
  background('#8BC34A');
  } else {
     background('#82D5FA');
 
  }
   
 } 
function desenhaJogadores(){
   textSize(30);
  text("Leve o campo á cidade",5,30) ;

   textSize(40);
text("🚜", Xjogador1,100) 
  
text("🏇",  Xjogador2, 250)
}
function DesenhaLinhaDeChegada(){ 
  fill ('white')
  rect(350, 0, 13, 400)
  fill ('black')
  for (let yAtual=0; yAtual < 400; yAtual += 20){
    rect (350, yAtual, 10, 10);
  }
  
  }
