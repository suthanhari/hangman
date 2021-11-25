var ul = document.createElement('ul');

var li1 = document.createElement('li');

li1.innerText = "hey you"
 ul.appendChild(li1)
var li2 = document.createElement('li');
li2.innerText = "yes you are going to great  one day"
  ul.appendChild(li2);

document.body.appendChild(ul);

var board = document.createElement("div");
var currentplayer = "x"
board.style.height = "300px"
board.style.width = "300px";
board.style.display = "flex";
board.style.flexDirection = "row";
board.style.flexWrap = "wrap";
board.style.border = "1px solid brown";
for (i = 1; i <= 9; i++) {
    var box = document.createElement("div");
    box.style.height = "100px";
    box.style.width = "70px";
    box.setAttribute = ("id", i)
    box.style.border = "1px solid brown";
    box.style.marginRight = "2px";
    box.style.marginRight = "5px";
    board.appendChild(box);
    box.addEventListener('click',function(){
        if(currentplayer == "x"){
            this.innerText= currentplayer;
            currentplayer="o"
        }
         else{
             this.innerText=currentplayer;
              currentplayer="x"
         }

    });

};
document.body.appendChild(board);

var arr=['orange','pineapple','pomegranet','guava','apple'];





let btns=document.querySelector('.button1 .btn');

Array.from(btns).forEach((btn)=>{
    btn.addEventListener('click',(e)=>{

    })
})

var btn1 = document.getElementsByClassName("btn");
Array.from(btn1)

var btn1 = document.getElementsByClassName("button1");
   Array.from(btn1);
     btn1.addEventListener(function hoverme(event){

         event.target.style.color = "red"
     },false)  

const p1=document.getElementsByClassName("button1");
const p2=document.getElementsByClassName("button2");






    
    

    






