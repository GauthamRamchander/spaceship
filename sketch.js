var spaceimg,spaceship;
var cong,Background,bullet_img
var rand,bomb_img,bomb
var stars,tryagain,tryagain_img
var star1_img,star2_img,star3_img,star4_img
var star1,star2,star3,star4
var Score=0
var bullets
var END=0
var gameState=1
function preload(){
back=loadImage("space.png")
spaceimg=loadImage("spaceship.png")
star1_img=loadImage("asteroid1.png")
star2_img=loadImage("asteroid2.png")
star3_img=loadImage("asteroid3.png")
star4_img=loadImage("asteroid4.png")
bullet_img=loadImage("bullet.png")
tryagain_img=loadImage("try again.gif")
}

function setup(){
createCanvas(700,700)

Background=createSprite(700,400,300,20)
Background.addImage(back)
Background.scale=1.0
Background.velocityY=3

spaceship=createSprite(400,545,20,50)
spaceship.addImage(spaceimg)
spaceship.scale=0.2


star_1=new Group()
star_2=new Group()
star_3=new Group()
star_4=new Group()
bulletGroup=new Group()
}
function draw(){
        background("black")
 if(keyDown("SPACE")){
     bullet()
     bullets.y=spaceship.y
     bullets.x=spaceship.x
 }
if(keyDown("LEFT_ARROW")){
  spaceship.x-=6
}
if(keyDown("RIGHT_ARROW")){
  spaceship.x+=6
}
var selectstar=Math.round(random(1,4))
            if(World.frameCount %80 === 0){
                if(selectstar === 1){
                  stad1()
                }
                if(selectstar === 2){
                  stad2();
                }
                if(selectstar === 3){
                  stad3();
                }
                if(selectstar === 4){
                  stad4();
                }     
              }
                         if(bulletGroup.isTouching(star_1)){
                 star_1.destroyEach()
                 Score=Score+1
               }
               if(bulletGroup.isTouching(star_2)){
                 star_2.destroyEach()
                Score=Score+2
              }
              if(bulletGroup.isTouching(star_3)){
                star_3.destroyEach()
                Score=Score+3
              }
              if(gameState===END){
                star_4.destroyEach()
               star_3.destroyEach()
               star_2.destroyEach()
               star_1.destroyEach()
               bulletGroup.destroyEach()
               tryagain=createSprite(400,200,100,100)
               tryagain.addImage(tryagain_img)
               Background.velocityY=0
               Score=0
              }
              if(bulletGroup.isTouching(star_4)){
                gameState=END
              }
              drawSprites()
              if(Background.y>550){
                Background.y=width/2
              }
     fill ("white")       
    textSize(20)
    text("Score :" +Score, 600,100)
           
           }

           function bullet(){
            bullets=createSprite(500,100,5,10)
           bullets.velocityY= -3
            bullets.addImage(bullet_img)
            bullets.scale=0.05
            bullets.lifetime =200
            bulletGroup.add(bullets)
        }
        
                    function stad1(){
                        star1=createSprite(500,Math.round(random(20,200)))
                        star1.addImage(star1_img)
                        star1.scale = 0.1
                         star1.velocityY = +(6-3*Score/10)
                         star1.lifetime = 200
                         star_1.add(star1)
                    }
                      
                    function stad2(){
                            star2=createSprite(600,Math.round(random(20,200)))
                            star2.addImage(star2_img)
                            star2.scale = 0.1
                             star2.velocityY = +(6-3*Score/10)
                             star2.lifetime = 200
                             star_2.add(star2)
                        }  
                    
                  function stad3(){
                        star3=createSprite(300,Math.round(random(20,200)))
                        star3.addImage(star3_img)
                        star3.scale = 0.3
                         star3.velocityY =+(6-3*Score/10)
                         star3.lifetime = 200
                         star_3.add(star3)
                    }  
                    function stad4(){
                   
                    star4=createSprite(200,Math.round(random(20,200)))
                    star4.addImage(star4_img)
                    star4.scale = 0.3
                     star4.velocityY =+(6-3*Score/10)
                     star4.lifetime = 200
                     star_4.add(star4)
                   }
                        
                             
                       
                        
                    
                    













