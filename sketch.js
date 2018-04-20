function setup() {
  // put setup code here
  createCanvas(400,400);
  //angleMode(DEGREES);
}

function draw() {
  // put drawing code here
  background(0);
  let hours = hour();
  let minutes = minute();
  let seconds = second();

  //fill(0,255,0);
  //textSize(64);
  //text(hours + " : " + minutes + " : " + seconds, 5, 200);

  push();
  translate(200,200);  
  noFill();
  stroke("#58fcc1");
  strokeWeight(2);  
  ellipse(0,0,385,385);

  fill(255,255,0);
  textSize(40);
  noStroke();
  for(let i = 1; i <= 12; ++i){
  	let angle = -i * TWO_PI / 12 + PI;
  	let x = 160 * sin(angle) - 15;
  	let y = 160 * cos(angle) + 15;
  	//console.log("x = ", x, " y = ", y);
  	let value = i;
  	if(i === 3){
  		value = "III";
  	} else if(i === 6){
  		value = "VI";
  	} else if(i === 9){
  		value = "IX";
  	} else if(i === 12){
  		value = "XII";
  	}
  	text(value,x,y);
  }


  noFill();
  rotate(-HALF_PI);
  
  //hours
  let hoursAngle = map(hours % 24,0,12,0,TWO_PI);

  
  stroke("#ff00ff");
  strokeWeight(8);
  noFill();
  arc(0,0,200,200,0,hoursAngle);

  push();
  rotate(hoursAngle);
  stroke("#ff00ff");
  strokeWeight(4);
  line(0,0,40,0);
  pop();

  //minutes
  let minutesAngle = map(minutes,0,60,0,TWO_PI);
  stroke("#0450fb");
  strokeWeight(8);
  noFill();
  arc(0,0,220,220,0,minutesAngle);

  push();
  rotate(minutesAngle);
  stroke("#0450fb");
  strokeWeight(4);
  line(0,0,60,4);
  pop();

  //seconds
  let secondsAngle = map(seconds,0,60,0,TWO_PI);
  stroke("#8bc900");
  strokeWeight(8);
  noFill();
  arc(0,0,240,240,0,secondsAngle);

  push();
  rotate(secondsAngle);
  stroke("#8bc900");
  strokeWeight(4);
  line(0,0,80,0);
  pop();

  strokeWeight(0);
  fill("#ffff66");
  ellipse(0,0,10,10);

  pop();
}