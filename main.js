var block_img_width= 30;
var block_img_height= 30;

player_x= 10;
player_y= 10;

var canvas= new fabric.Canvas('myCanvas');

var player_object= "";
var block_img_object= "";

function player_update() {
   fabric.Image.fromURL("player.png", function(img){
   player_object= img;
   player_object.scaleToWidth(150);
   player_object.scaleToHeight(140);
   player_object.set({
        top:player_y,
        left:player_x
   });
   });
}

function new_image(get_image) {
    fabric.Image.fromURL(get_image,  function(img){
        block_img_object=img;
        block_img_object.scaleToWidth(block_img_width);
        block_img_object.scaleToHeight(block_img_height);
        block_img_object.set({
            top:player_y,
            left:player_x
        });
    });
}