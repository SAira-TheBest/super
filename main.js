canvas = new fabric.Canvas('myCanvas');
block_image_width = 30;
block_image_height = 30;
player_x = 10;
player_y = 10;
var player_object = ""; 
var block_image_object = "";

function player_update()
{
    fabric.Image.fromURL("player.png" , function(Img) {
        player_object = Img;

        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set ({

        top:player_y,
        left:player_x
        });

        canvas.add(player_object);
    });
}


function new_image(get_image){
    fabric.Image.fromURL(get_image , function(Img) {
    block_image_object = Img;

    block_image_object.scaleToWidth(block_image_width);
    block_image_object.scaleToHeight(block_image_height);
    block_image.set ({

    top:player_y,
    left:player_x
    });
    canvas.add(block_image_object);
  });
}
 window.addEventListener("keydown",my_keydown);

 function my_keydown(e){

var KeyPressed = e.keyCode;

if(KeyPressed == '70')
{
   
   new_image('iron_face.png');
   console.log("f");
}

if(KeyPressed == '66')
{

    new_image('spiderman_body.png')
    console.log("b")
}

if(KeyPressed == '76')
{
  new_image('hulk_legs.png');
  console.log("h");

}

if(KeyPressed == '72')
{
new_image('captin_america_left_hand.png')
console.log("h")
}

if(KeyPressed == '38')
{
    up();
    console.log("up");
}

if(KeyPressed == '37')
{
  left();
  console.log("left");
}


if(KeyPressed == '39')
{
  right();
  console.log("right");
}


if(KeyPressed == '40')
{
  down();
  console.log("down");
}
 }


function up()
{
    if(player_y >= 0)
    {
        player_y = player_y - block_image_height
        canvas.remove(player_object);
        player_update();
    }
}

function down()
{
 if(player_y <= 500)
 {
   player_y = player_y +block_image_object;
  
   canvas.remove(player_object);
   player_update();

 }
 }

 function left()
 {
   if(player_x >0)
   {
           player_x = player_x - block_image_width
           canvas.remove(player_object);
           player_update();
   }
 }

function right()
{
        if(player_x <= 850)
        {
          player_x = player_x + block_image_width;
          canvas.remove(player_object);
          player_update();      
        }
      }
    