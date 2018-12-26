// Beispiel 5 zum Thema Raster & Wiederholung
// Loop im Loop
// weisse Kreise

function setup() {
    createCanvas(500,500);
}

function draw () {
    background(0);
    noStroke;
    // Führ den Loop solange aus, solange x kleiner als die Breite
    // des Ausgabe-Fenster ist
    for (var x = 0; x < width; x = x+20) {
        // Ausgabe des x Wertes in der Konsole, mit Begleit-Text
        console.log("x hat den Wert " + x);

        // Zweiter Loop !!
        // Führe diesen Loop solange aus, solange y kleiner als die
        // Höhe des Ausgabe-Fenster ist
        for (var y = 0; y < height; y = y+20) {
            // x+10 und y+10 damit Kreis schön vom Rand her beginnt
            fill(x,200,y);
            ellipse(x+10,y+10,20,20);
            // Ausgabe des x Wertes in der Konsole, mit Begleit-Text
            console.log("y hat den Wert " + y);
        }
    }


    noLoop();
}
