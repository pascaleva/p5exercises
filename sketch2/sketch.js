function setup() {
	createCanvas(500, 500);

	stroke(255);
    background(0,0,0);
}

function draw() {

	background(0,0,0,50);
	/*rgba transparenter Background lässt den Zustand aus dem
	Frame vorher noch durchscheinen
	Spiel mit den alpha Werten, mehr oder weniger?
	*/


	var sec = second();
	var min = minute();
	var std 	= hour();


	var d = map(sec, 0, 59, 0, width);



	noStroke();
	fill(255,10);
	ellipse(width/2, height/2, d,d );

	fill(50,d,150,d);
	noStroke();
	ellipse(d, height/2, 50,50);

	fill(150,50,d,d);
	noStroke();
	ellipse(width/2, d, 50,50);

	frameRate(1);
	/* Hier setzen wir die frameRate auf 1 Frame pro Sekunde.
	Das genügt für unsere Uhr und braucht weniger Performance vom Browser
	*/

}
