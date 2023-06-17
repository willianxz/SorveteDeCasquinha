function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  noStroke();
  
  //Moldura
  fill(0);
  rect(0, 0, 400);
  fill(255);
  rect(20, 14, 355, 365);
  
  //Primeira Bola de sorvete
  fill(100, 43, 100);  
  ellipse(200, 80, 130);
  
  //Segunda Bola de sorvete
  fill(147, 43, 118);
  ellipse(200, 80, 100);  
  
  //Casquinha  
  strokeWeight(5);
  stroke(73, 41, 17);
  line(137, 184, 188, 373);
  line(251, 190, 189, 370);
  stroke(242, 174, 118);
  line(149, 215, 239, 215);
  line(156, 245, 230, 245);
  line(160, 265, 223, 265);
  line(167, 285, 215, 285);
  line(173, 300, 208, 300);
  line(178, 320, 204, 320);
  noStroke();
  
  //Terceira camada
  fill(143, 101, 72);
  ellipse(150, 180, 35); 
  ellipse(180, 180, 35);
  ellipse(210, 180, 35);
  ellipse(240, 180, 35);
  
  //Segunda camada
  fill(255, 202, 50);
  ellipse(150, 160, 45);  
  ellipse(180, 160, 45);
  ellipse(210, 160, 45);
  ellipse(240, 160, 45);
  
  //Primeira camada
  fill(147, 43, 118);
  ellipse(150, 130, 50);
  ellipse(180, 130, 50);
  ellipse(210, 130, 50);
  ellipse(240, 130, 50);
  
 
  
}

function mousePressed(){
 console.log('MouseX: ' + mouseX + ' - '+ 'MouseY: '+mouseY);
}