var url;
var globalData;
var img;

var img2;
var xPos;
var yPos;
var xDirect;
var yDirect;
var xVelo;
var yVelo;

function preload() {
    img = loadImage("assets/charybdis.jpg");
    img2 = loadImage("assets/chimera.png");
}

function setup() {

    createCanvas(800, 600);

    url = 'https://raw.githubusercontent.com/dariusk/corpora/master/data/mythology/greek_monsters.json'

    xPos = 1;
    yPos = 1;
    xDirect = 1;
    yDirect = 1;
    xVelo = 5;
    yVelo = 5;
}

function gotData(myData) {

    console.log(myData);
    globalData = myData;
    //get this data to a global variable

}

function draw() {

    if (globalData) { //test if data is available
        println(globalData.greek_monsters[3]);

        background(95, 175, 155);
        image(img, pmouseX, pmouseY);
        textSize(25);
        text("WARNING: GREEK MONSTERS AHEAD!", 100, 500);

        image(img2, xPos, yPos);
        xPos = xPos + xVelo;
        yPos = yPos + yVelo;


        if (xPos >= width || xPos <= 0) {
            xVelo = xVelo * xDirect;
            xDirect = -xDirect;
        }

        if (yPos >= height || yPos <= 0) {
            yVelo = yVelo * yDirect;
            yDirect = -yDirect;

        } else { //still loading!
            println("Beware of the Chimera!");
        }

    }
}

function mouseClicked() {
    myData = loadJSON(url, gotData);
}
