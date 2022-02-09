canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");


car_img="car2.png";

car_width=75;
car_height=170;

car_x=30;
car_y=300;

background_img="parkingLot.jpg";






function add(){
    background_imgTag= new Image();
    background_imgTag.onload=upload_background;
    background_imgTag.src=background_img;

    car_imgTag= new Image();
    car_imgTag.onload=upload_car;
    car_imgTag.src=car_img;
}
function upload_background(){
    ctx.drawImage(background_imgTag,0,0,canvas.width,canvas.height);
}
function upload_car(){
    ctx.drawImage(car_imgTag,car_x,car_y,car_width,car_height);
}


window.addEventListener("keydown",my_keydown);

function my_keydown(e){

    keyPressed=e.keyCode;
    console.log(keyPressed);

    if(keyPressed=='38')
    {
        up();
        console.log("up");
    }
    if(keyPressed=='40')
    {
        down();
        console.log("down");
    }
    if(keyPressed=='37')
    {
        left();
        console.log("left");
    }
    if(keyPressed=='39')
    {
        right();
        console.log("right");
    }
    
}

function up()
{
    if(car_y >=0){
       car_y=car_y-10;
        console.log("When up arrow is pressed, x = " + car_x + " | y = " +car_y);
        upload_background();
        upload_car();
    }
}

function down()
{
    if(car_y<=500){
        car_y=car_y+10;
        console.log("When down arrow is pressed, x = " + car_x + " | y = " +car_y);
        upload_background();
        upload_car();
    }
}

function left()
{
    if(car_x >=0){
        car_x=car_x-10;
        console.log("When left arrow is pressed, x = " + car_x + " | y = " +car_y);
        upload_background();
        upload_car();
    }
}

function right()
{
    if(car_x<=700){
        car_x=car_x+10;
        console.log("When right arrow is pressed, x = " + car_x + " | y = " +car_y);
        upload_background();
        upload_car();
    
    }
}
