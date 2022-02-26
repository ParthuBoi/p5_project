function preload(){

}

function setup(){
    canvas = createCanvas(750, 590);
    canvas.position(110, 250);
    video = createCapture(VIDEO);
    video.hide();
}

function draw(){
    image(video, 259, 190, 200, 180);
    circle(100,100,100);
    rect(150,86,400,30);
    circle(100,100,100);
    circle(600,100,100);
    rect(150,486,400,30);
    circle(100,500,100);
    circle(600,500,100);
    rect(85,150,30,300);
    rect(585,150,30,300);
}

function take_snapshot(){
    save('My_filter.png');
}


