let cvsWrapper = null;
let bgImg, baseImg, readyImg;
let bgScale;
let x1, y1;
let xb, yb;
let vx, vy, ay;
let triAng;
let flap_num;
let color_index;
let mode_index;
let sound_wing, sound_hit, sound_die;
let readyScale;
let start_flag;
let xr, yr;
let base_x;
let loop_flag;
let pipe_x, pipe_y;
let pipes;
// assets from: https://github.com/sourabhv/FlapPyBird/tree/master/assets

function preload() {
    bgImg = ["day", "night"].map( mode => loadImage(`assets/sprites/background-${mode}.png`));
    readyImg = loadImage("assets/sprites/message.png");
    baseImg = loadImage("assets/sprites/base.png");
    assets
    = ["blue", "red", "yellow"].map(
        color => ["upflap", "midflap", "downflap"].map(
            flap => loadImage(`assets/sprites/${color}bird-${flap}.png`)
        )
    );
    pipes = ["green", "red"].map(
        color => ["upper", "lower"].map(
            position => loadImage(`assets/sprites/pipe-${color}-${position}.png`)
        )
    ); 
    sound_wing = loadSound("assets/audio/wing.wav");
    sound_hit = loadSound("assets/audio/hit.wav");
    sound_die = loadSound("assets/audio/die.wav");
}

function setup() {
    // Game basic setup.
    // Mounting canvas onto div for convenient styling.
    cvsWrapper = document.getElementById("canvasWrapper");
    const myCanvas = createCanvas(
        cvsWrapper.offsetWidth,
        cvsWrapper.offsetHeight
    );
    myCanvas.parent("canvasWrapper");

    // setup code below
    x1 = 0;
    y1 = 0;
    bgScale = width/bgImg[0].width;
    readyScale = width/readyImg.width;
    baseScale = width/baseImg.width;
    triAng = 0;
    vx = 2;
	vy = 0
	ay = 10;
	xb = width/2 - assets[0][0].width/2;
    yb = -(height-baseImg.height*baseScale)/2 + assets[0][0].width;
    flap_num = 0;
    color_index = Math.floor(Math.random() * 3);
    mode_index = Math.floor(Math.random() * 2);
    start_flag = 0;
    xr = -readyImg.width/2;
    yr = height/2 - readyImg.height/2;
    base_x = -width;
    loop_flag = 0;
    pipe_x = width;
}

function draw() {
    // Render function (called per frame.)
    background(0);
    x1 -= 1;
    base_x -= 1;
    //console.log("1", pipe_x);
    if (x1 <= -bgImg[mode_index].width*bgScale) 
    {
        //console.log("base_x", base_x);
        x1 += bgImg[mode_index].width*bgScale;
        xb -= bgImg[mode_index].width*bgScale;
        xr -= width;
        pipe_x += width; 
        base_x = -width;
        //console.log("x1", x1);
    }
    translate(x1, y1);
    image(bgImg[0], 0, 0, bgImg[mode_index].width*bgScale, bgImg[mode_index].height*bgScale);
    image(bgImg[1], bgImg[mode_index].width*bgScale, 0, bgImg[mode_index].width*bgScale, bgImg[mode_index].height*bgScale);
    
    // random height and color of pipe
    pipe();

    
    xr += 3;
    console.log("base", base_x);
    if (base_x <= -width*14/6) 
    {
        console.log("width", width);
        base_x += width*14/6;
        xr -= width;
        xb -= bgImg[mode_index].width*bgScale;
        //pipe_x -= pipes[0][0].width;
        //pipe_x += width;
        //console.log("base", base_x, xr, pipe_x);
    }
    
    translate(base_x, height-baseImg.height*baseScale);
    image(baseImg, 0, 0, baseImg.width*baseScale, baseImg.height*baseScale);
    image(baseImg, width, 0, baseImg.width*baseScale, baseImg.height*baseScale);
    
    

    // random color of bird
    flap_num += 1;
    flap_index = flap_num % 3

    xb += vx;
    if (start_flag === 0) {
        getReady();
    }
    else {
        // flappy bird fly
        vy += ay*0.04;
        yb += vy;
        triAng += 0.03;
        translate(xb, yb);
        rotate(triAng);
        image(assets[color_index][flap_index], 0, 0, assets[color_index][0].width, assets[color_index][0].height);

        // hit and die
        if (yb+5 >= height || yb === 0) {
            //console.log(yb);
            vx = 0;
            vy = 0;
            ay = 0;
            sound_hit.play();
            sound_die.play();
            loop_flag = 1;
            translate(xb, yb);
            console.log("die");
            noLoop();
        }

        
        
        
        
    }
   
    
    
}

function keyPressed() {
    if (keyCode === 32){
        console.log("keypress")
        vy = -7;
        triAng = -PI/4;
        sound_wing.play();
    }    
}

function getReady() {
    // message
    translate(xr, -height/2);
    image(readyImg, 0, 0, readyImg.width, readyImg.height);
    // flappy bird
    translate(readyImg.width/2-assets[color_index][0].width/2, readyImg.height/2+assets[color_index][0].height);
    image(assets[color_index][flap_index], 0, 0, assets[color_index][0].width, assets[color_index][0].height);
}

// for getReady
function mousePressed() {
    start_flag = 1;
}

function pipe() {
    pipe_x -= 1;
    // if (pipe_x <= 0) 
    // {
    //     pipe_x += width;
    //     console.log("pipe_x", pipe_x, width);
    // }

    //console.log("pipe_x", pipe_x, width);
    translate(pipe_x, 0);
    image(pipes[0][0], 0, 0, pipes[0][0].width, pipes[0][0].height);
    image(pipes[0][0], width/2, 0, pipes[0][0].width, pipes[0][0].height);
}
