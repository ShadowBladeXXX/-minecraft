var canvas=new fabric.Canvas('myCanvas');
var block_width=40;
var block_height=40;
var player_x=15;
var player_y=15;
var object_player="";
var object_block="";
function player_update(){
    fabric.Image.fromURL("player.png",function(img){
        object_player=img;
        object_player.scaleToWidth(150);
        object_player.scaleToHeight(150);
        object_player.set({
            top:player_y,
            left:player_x
        })
        canvas.add(object_player);
    })
}
function img_update(get_Image){
    fabric.Image.fromURL(get_Image,function(img){
        object_block=img;
        object_block.scaleToWidth(block_width);
        object_block.scaleToHeight(block_height);
        object_block.set({
            top:player_y,
            left:player_x
        })
        canvas.add(object_block);
    })
}
window.addEventListener("keydown",mykeydown);
function mykeydown(e){
    
     keypressed=e.keyCode;
     console.log(keypressed);
    if(e.shiftKey==true && keypressed=='80')
        {

            block_width=block_width+10;
            block_height=block_height+10;
            document.getElementById("Width").innerHTML=block_width;
            document.getElementById("Height").innerHTML=block_height;
        }
        if(e.shiftKey==true && keypressed=='77')
            {
                block_width=block_width-10;
                block_height=block_height-10;
                document.getElementById("Width").innerHTML=block_width;
                document.getElementById("Height").innerHTML=block_height;

            }
            if(keypressed =='87'){
            console.log("w");
                
              img_update('wall.jpg'); 
             
            }
            if(keypressed =='71'){
                console.log("g");
                    
                  img_update('ground.png'); 
                 
                }
                if(keypressed =='76'){
                    console.log("l");
                        
                      img_update('light_green.png'); 
                     
                    }
                    if(keypressed =='84'){
                        console.log("t");
                            
                          img_update('trunk.jpg'); 
                         
                        }
                        if(keypressed =='82'){
                            console.log("r");
                                
                              img_update('roof.jpg'); 
                             
                            }
                            if(keypressed =='89'){
                                console.log("y");
                                    
                                  img_update('yellow_wall.png'); 
                                 
                                }
                                if(keypressed =='68'){
                                    console.log("d");
                                        
                                      img_update('dark_green.png'); 
                                    
                                     
                                    }
                                    if(keypressed =='85'){
                                        console.log("u");
                                            
                                          img_update('unique.png'); 
                                         
                                        }
                                        if(keypressed =='67'){
                                            console.log("c");
                                                
                                              img_update('cloud.jpg'); 
                                             
                                            }
                                            if(keypressed=='37'){
                                              left();
                                            
                                            }
                                            if(keypressed=='38'){
                                              up();
                                            
                                            } 
                                            if(keypressed=='39'){
                                              right();
                                            
                                            }  
                                            if(keypressed=='40'){
                                              down();
                                            
                                            }                               
    }
function up(){
  if(player_y>=0){
    player_y=player_y-block_height;
    canvas.remove(object_player);
    player_update();
  }
}
function down(){
  if(player_y<=500){
    player_y=player_y+block_height;
    canvas.remove(object_player);
    player_update();
  }
}
function left(){
  if(player_x>=0){
    player_x=player_x-block_height;
    canvas.remove(object_player);
    player_update();
  }
}

function right(){
  if(player_x<=500){
    player_x=player_x+block_height;
    canvas.remove(object_player);
    player_update();
  }
}